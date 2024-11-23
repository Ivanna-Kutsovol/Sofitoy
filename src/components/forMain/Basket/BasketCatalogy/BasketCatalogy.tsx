'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Определяем интерфейс для товара
interface Product {
  name: string;
  imgSrc: string;
  price: string;
  sale: string;
  id: number;
  quantity: number;
}

// Определяем интерфейс для контекста корзины
interface CartContextType {
  cartItems: Product[];
  handleAddIncreaseClick: (product: Product, productId: Product["id"]) => void;
  handleDecrease: (productId: Product["id"] ) => void;
  removeFromCart: (productId: Product["id"] ) => void;
}

// Создаем контекст с начальным значением
const CartContext = createContext<CartContextType | undefined>(undefined);

// Пользовательский хук для использования контекста корзины
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Тип для пропсов CartProvider
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const updateLocalStorage = (updatedCart: Product[]) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };  
  
  const handleAddIncreaseClick = (product: Product, productId: Product["id"]) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      
      let updatedCart;
      if (existingProduct) {
        updatedCart = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Увеличиваем количество
            : item
        );
      } else {
        updatedCart = [...prevItems, { ...product, quantity: 1 }]; // Добавляем новый товар с количеством 1
      }

      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };
  
  const handleDecrease = (productId: number) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => {
     const updateCart = prevItems.filter(item => item.id !== productId);
    
      if(updateCart.length === 0){
        removeFromCartLocalStorage();
      } else {
        updateLocalStorage(updateCart);
      }
      return updateCart;
    });
  };

  const removeFromCartLocalStorage = () => {
    localStorage.removeItem('cart');
  };

  // Восстановление корзины из localStorage при монтировании компонента
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    console.log('Обновленная корзина:', cartItems);
  }, [cartItems]);
  

  // Сохранение корзины в localStorage при изменении cartItems
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);
  
  return (
    <CartContext.Provider value={{ cartItems, handleAddIncreaseClick, handleDecrease, removeFromCart }}>
      {children}
    </CartContext.Provider>
    
  );
};


