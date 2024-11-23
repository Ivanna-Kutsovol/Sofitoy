export const addAmountProduct = (currentAmount: any) => {
  console.log("---")
  return currentAmount + 1;
  }
  
  export const delAmountProduct = (currentAmount: any) => {
    console.log("+++")
  return currentAmount === 0 ? 0 : currentAmount -1;
  }
  
  export const handleAddIncreaseClick = (product: any) => {
    // Дивимось на поточний вміст кошика з localStorage або створюємо порожній об'єкт в який будемо класти значення
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") as string) : {};
    // Перевіряємо чи продукт вже існує в кошику
    if (cart[product.id]) {
      // Якщо існує, збільшуємо кількість на 1
      cart[product.id].quantity += 1;
    } else {
      // Якщо не існує, додаємо новий продукт з кількістю quantity 1
      cart[product.id] = {
        quantity: 0,
      };
    }
    // Зберігаємо оновлений кошик у localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    console.log(`Product ID: ${product.id}, Quantity: ${cart[product.id].quantity}`);
  };
  
  