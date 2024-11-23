"use client";  
  
import React, { useState, useEffect } from 'react';  
import styles from './page.module.scss';  
import Image from 'next/image';  
import Square from '/public/imgBasket/selectAll.png';  
import Trash from '/public/imgBasket/trashCan.png';  
import SquareSelect from '/public/imgBasket/squareSelect.png';  
import { useCart } from './BasketCatalogy/BasketCatalogy';  
import Button from "../../UI/Button/Button";  
import ButtonClose from '/public/imgBasket/buttonBasketClose.png'; 

interface BasketProps {
  setIsOpen: (isOpen: boolean) => void
}
  
const Basket = ({setIsOpen}: BasketProps) => { 
  const { cartItems, handleAddIncreaseClick, handleDecrease, removeFromCart } = useCart();  
  const [selectNone, setSelectNone] = useState<number[]>([]);  
  const [selectAll, setSelectAll] = useState(false);  
  
  
  useEffect(() => {  
    if (!cartItems.map){  
      console.log("cart item not array")  
    }  
  }, [cartItems]);  
  
  useEffect(() => {  
    console.log('Текущие товары в корзине:', cartItems);  
  }, [cartItems]);  
     
  function handleSelectAll() {  
    if (selectAll) {  
      setSelectNone([]);  
    } else {  
      setSelectNone(cartItems.map(item => item.id));  
    }  
    setSelectAll(!selectAll);  
  }  
  
  function handleDeleteSelected() {  
    selectNone.forEach(id => removeFromCart(id));  
    setSelectNone([]);  
    setSelectAll(false);  
  }  
  
  function handleItemSelect(id: number) {  
    setSelectNone(prev =>   
      prev.includes(id)   
        ? prev.filter(itemId => itemId !== id)   
        : [...prev, id]  
    );  
  }  
  
  return (  
  <div className={styles.basketContainer}>  
  <a className={styles.ButtonClose} onClick={() => setIsOpen(false)}>
  <Image  
    unoptimized
    src= {ButtonClose} 
    width={63} 
    height={111} 
    alt="button basket" 
  /> 
  </a>
    {cartItems.length === 0 ? (  
      <section> 
        <p className={styles.header}></p>  
        <p className={styles.emptyMessage}>The selected product will appear here</p>  
      </section>  
    ) : (  
      <>  
        <section className={styles.header}> 
          <a className={styles.header__Square} >
            <Image  
              unoptimized
              src={selectAll ? SquareSelect : Square}  
              alt="Select all square"  
              width={50}  
              height={50}  
              onClick={handleSelectAll}  
            />  
          </a> 
          
          <h2 className={styles.header__SelectAll} onClick={handleSelectAll}>Select all</h2> 

          <a className={styles.header__Trash} >
            <Image  
              unoptimized
              src={Trash}  
              alt='Trash'  
              width={56}  
              height={76}  
              onClick={handleDeleteSelected}  
            />  
          </a> 
        </section>  

        {cartItems.map((item) => (  
        <section key={item.id} className={styles.cartItem}>  
          <a className={styles.cartItem__SquareInput} >
          <Image  
              unoptimized
              src={selectNone.includes(item.id) ? SquareSelect : Square}  
              alt="Select item"  
              width={45}  
              height={45}  
              onClick={() => {
                console.log('Клик на элементе');
                handleItemSelect(item.id);
              }}  
            />  
          </a>

          <a className={styles.cartItem__image}>
          <Image  
              unoptimized
              src={`/imgCatalogy/products/${item.imgSrc}`}  
              alt="image"  
              height={180}  
              width={180}  
            /> 
          </a>  
            <h1 className={styles.cartItem__ItemName}>{item.name}</h1>  
            {item.sale ? (
              <div className={styles.cartItem__priceBox}>
                <span className={styles.cartItem__priceSale}>
                  {item.sale}
                </span>
                <span className={styles.cartItem__priceOld}>
                  {item.price} 
                </span>
              </div>
              ) : (
                <span className={styles.cartItem__ItemPrice}>
                  {item.price} 
                </span>
              )}
            {/* <h2 className={styles.cartItem__ItemPrice}>{item.price}</h2>   */}
            <section className={styles.cartItem__ammount}>  
              <Button type="button" text="−" onClick={() => handleDecrease(item.id)} className={styles.cartItem__button} />  
              <h3 className={styles.cartItem__number}>{item.quantity}</h3>  
              <Button type="button" text="+" onClick={() => handleAddIncreaseClick(item, item.id)} className={styles.cartItem__button} /> 
            </section>  
            <p className={styles.cartItem__line}/> 

          </section> 
        ))}  
      </>  
    )}  
  </div>  
  );  
};  
  
export default Basket;