"use client"; 
 
import Image from 'next/image'; 
import React, {useState} from 'react'; 
import styles from './ButtonBasket.module.scss'; 
import Basket from "../BasketPage"; 
import ButtonOpen from '/public/imgBasket/buttonBasketOpen.png'; 
 
function ButtonBasket() { 
  const[isOpen, setIsOpen] = useState(false); 
 
  function handleClick(){ 
    setIsOpen(prevState => !prevState) 
  } 
 
    return ( 
      <>  
        <button className={`${styles.ButtonOpen} ${isOpen ? styles.ButtonOpenHidden : ''}`} 
        onClick={handleClick} > 
        <Image  
          unoptimized
          src= {ButtonOpen} 
          width={63} 
          height={111} 
          alt="button basket" 
        /> 
        </button> 
        {isOpen && (
        <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
          <Basket setIsOpen={setIsOpen} />
        </div>
      )}
    </> 
  ); 
} 
export default ButtonBasket;