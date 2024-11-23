"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./CatalogySlides.module.scss";
import ratigStar from "/public/imgCatalogy/rating_star.png";
import ratigStarOK from "/public/imgCatalogy/rating_star_ok.png";
import Button from "../../../../UI/Button/Button";
import {addAmountProduct, delAmountProduct } from "../../../../../app/utils/button";
import { useCart } from '../../../Basket/BasketCatalogy/BasketCatalogy';
import Link from 'next/link';

const CatalogySlides = (data: any) => {
  const { handleAddIncreaseClick: addToCart, cartItems } = useCart();
  const [currentProduct, setCurrentProduct] = useState(data.data[0][0]); // Початково зберігаємо перший товар
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({}); 
  const [quantity, setQuantity] = useState(0);
  const [canOpen, setCanOpen] = useState(false);

  const dataArr = data.data[0];

  useEffect(() => {
    setQuantity(quantities[currentProduct.id] || 0);
  }, [currentProduct, quantities]);

  function handleClick() {
    setCanOpen(prevState => !prevState)
  }

  const handleDecrease = () => {
    const newQuantity = delAmountProduct(quantity);
    setQuantity(newQuantity);
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [currentProduct.id]: newQuantity,
    }));
  };

  const handleAddToCart = () => {
    
    const newQuantity = addAmountProduct(quantity);
    setQuantity(newQuantity);
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [currentProduct.id]: newQuantity,
    }));

    const productWithQuantity = { ...currentProduct, quantity: newQuantity, image: currentProduct.imgSrc };
    addToCart(productWithQuantity, currentProduct.id); 
  };

  useEffect(() => {
    const productInCart = cartItems.find(item => item.id === currentProduct.id);
    if(productInCart) {
      setQuantity(productInCart.quantity);
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [currentProduct.id]: productInCart.quantity,
      }));
    }
  }, [currentProduct, cartItems])

  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
    const nextSlideIndex = (data.data[0].indexOf(currentProduct) + 1) % data.data[0].length; // Знаходимо індекс наступного слайда
    setCurrentProduct(data.data[0][nextSlideIndex]); // Оновлюємо стан з новим об'єктом товару
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
    const prevSlideIndex = (data.data[0].indexOf(currentProduct) - 1 + data.data[0].length) % data.data[0].length; // Знаходимо індекс попереднього слайда
    setCurrentProduct(data.data[0][prevSlideIndex]); // Оновлюємо стан з новим об'єктом товару
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    easing: "ease-in-out",
    arrows: false
  };

  const addRating = (rating: number) => {
    let ratingJxs = [];
    if (rating > 0) {
      for (let i = 0; i < rating; i++) {
        ratingJxs.push(<Image unoptimized key={`starOk${i}`} src={ratigStarOK} alt="rating star" className="catalogySlides__ratigStar" width={40} height={38} />)
      }
    }
    if (rating < 5) {
      for (let i = 5; i > rating; i--) {
        ratingJxs.push(<Image unoptimized key={`star${i}`} src={ratigStar} alt="rating star" className="catalogySlides__ratigStar" width={40} height={38} />)
      }
    }
    return (ratingJxs)
  }

  return (
    <>
      <section className={styles.catalogySlides}>
        <Slider ref={sliderRef} {...settings}>
          {dataArr.map((slide: any, index: number) => (
            <article key={index} id={slide.id} className={styles.catalogySlides__slide}>
              <section className={styles.catalogySlides__img}>
              {slide.sale && slide.price && parseFloat(slide.price) > parseFloat(slide.sale) ? (
                  <div className={styles.catalogySlides__sticker}>
                    -{Math.round(((parseFloat(slide.price) - parseFloat(slide.sale)) / parseFloat(slide.price)) * 100)}%
                  </div>
                ) : null}
                <Image unoptimized src={`/imgCatalogy/products/${slide.imgSrc}`} alt={slide.name} width={200} height={200} />
              </section>
              <section className={styles.catalogySlides__info}>
                <section className={styles.catalogySlides__infoBox}>
                  <span className={styles.catalogySlides__title}> {slide.name} </span>
                  <span className={styles.catalogySlides__descr}> {slide.descr} </span>
                </section>
                <section className={styles.catalogySlides__infoBox}>
                  <section className={styles.catalogySlides__rating}>
                    {addRating(slide.rating)}
                </section>
                {slide.sale ? (
                <div className={styles.catalogySlides__priceBox}>
                  <span className={styles.catalogySlides__priceOld}>
                    {slide.price} 
                  </span>
                  <span className={styles.catalogySlides__priceSale}>
                    {slide.sale}
                  </span>
                  </div>
                ) : (
                  <span className={styles.catalogySlides__price}>
                    {slide.price} 
                  </span>
                )}
                <section className={styles.ammount}>
                  <Button type="button" text="−" onClick={handleDecrease} className={styles.ammount__button} />
                  <span className={styles.ammount__number}>{quantity}</span>
                  <Button type="button" text="+" onClick={handleAddToCart} className={styles.ammount__button} />
                  </section>
                </section>
              </section>
            </article>
          ))}
        </Slider>
      </section>

      <Link href="/ContactUs">
      <Button className={styles.catalogySlides__buttonBuyNow} type="button"text="buy now"/>
      </Link>

      <section className={styles.catalogySlides__controls}>
        <button className={styles.catalogySlides__prevButton} onClick={previous}>
        </button>
        <button className={styles.catalogySlides__nextButton} onClick={next}>
        </button>
      </section>
    </>
  )
}

export default CatalogySlides;
