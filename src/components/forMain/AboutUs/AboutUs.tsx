'use client';

import styles from "./AboutUs.module.scss"
import aboutUsImg from "/public/imgAboutUs/aboutUs.png"
import accordionArrow from "/public/imgAboutUs/accordionArrow.svg"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface AboutUsProps {
  id?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ id }) => {
  const [firstAccordionIsVisible, setFirstAccordionVisible] = useState(false);
  const [secondAccordionIsVisible, setSecondAccordionVisible] = useState(false);
  const [thirdAccordionIsVisible, setThirdAccordionVisible] = useState(false);

  const handlefirstAccordionVisible = () => {
    setFirstAccordionVisible(!firstAccordionIsVisible);
  }
  const handleSecondAccordionVisible = () => {
    setSecondAccordionVisible(!secondAccordionIsVisible);
  }
  const handleThirdAccordionVisible = () => {
    setThirdAccordionVisible(!thirdAccordionIsVisible);
  }

  const firstAccordionArrowAnimateVariables = {
    open: {
      rotate: firstAccordionIsVisible ? -180 : -360,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const secondAccordionArrowAnimateVariables = {
    open: {
      rotate: secondAccordionIsVisible ? -180 : -360,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const thirdAccordionArrowAnimateVariables = {
    open: {
      rotate: thirdAccordionIsVisible ? -180 : -360,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const accordionTextAnimateVariables = {
    hidden: {
      maxHeight: 'auto',
      opacity: 1,
      overflow: "hidden",
    },
    show: {
      transition: {
        maxHeight: { duration: 0.6, ease: "easeInOut" },
        opacity: { duration: 0.6, ease: "easeInOut" }
      }
    },
    close: {
      transition: {
        maxHeight: { duration: 0.6, ease: "easeInOut" },
        opacity: { duration: 0.6, ease: "easeInOut" }
      }
    }
  }
  

  return (
    <div className={styles.aboutUs} id={id}>
      <div className={styles.aboutUs__heading}>About us</div>
      <div className={styles.aboutUs__box}>
        <div className={styles.aboutUs__textBox}>
          <p className={styles.aboutUs__text}>Welcome to a world of creativity and fun! We provide unique toys, 
            like water drawing mats and magnetic constructors, that help develop fine motor skills and imagination. 
            Each toy is designed with children&apos;s needs in mind for engaging and memorable learning.</p>
          <br />
          <p className={styles.aboutUs__text}>Our products entertain while helping young explorers build essential skills. 
            Join us and let every child become an artist and creator. 
            Playing with our toys is an opportunity to grow and dream!
          </p>
        </div>
        <Image
          unoptimized
          src={aboutUsImg}
          alt="about us"
          className={styles.aboutUs__Img}
        />
      </div>
      <div className={styles.aboutUs__box}>
        <div className={styles.aboutUs__accordion}>
          <motion.div
            className={styles.aboutUs__accordionHead}
            animate={{
              backgroundColor: firstAccordionIsVisible ? "#fe93c6" : "#ffcbda"
            }}
            onClick={handlefirstAccordionVisible}>
            <div >
            What age group are your toys suitable for?
            </div>

            <motion.div initial={false}
              className={styles.aboutUs__accordionArrow}
              animate={"open"}
              variants={firstAccordionArrowAnimateVariables}
            >
              <Image
                className={styles.aboutUs__accordionArrowImg}
                src={accordionArrow}
                alt="accordion arrow"
              />
            </motion.div>

          </motion.div>
          <AnimatePresence>
            {firstAccordionIsVisible && (
              <motion.div
                initial={"'hidden'"}
                animate={"show"}
                exit={"close"}
                variants={accordionTextAnimateVariables}
                className={styles.aboutUs__accordionText}
              >
                <div>
                Our toys are suitable for children of various age groups, typically ranging from 2 to 8 years old. 
                We offer products that are safe and developmentally appropriate, allowing children to explore, learn, and grow at their own pace.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={styles.aboutUs__accordion}>
          <motion.div
            className={styles.aboutUs__accordionHead}
            animate={{
              backgroundColor: secondAccordionIsVisible ? "#fe93c6" : "#ffcbda"
            }}
            onClick={handleSecondAccordionVisible}>
            <div >
            How do your toys promote skill development?
            </div>

            <motion.div initial={false}
              className={styles.aboutUs__accordionArrow}
              animate={"open"}
              variants={secondAccordionArrowAnimateVariables}
            >
              <Image
                className={styles.aboutUs__accordionArrowImg}
                src={accordionArrow}
                alt="accordion arrow"
              />
            </motion.div>

          </motion.div>
          <AnimatePresence>
            {secondAccordionIsVisible && (
              <motion.div
              initial={"'hidden'"}
              animate={"show"}
              exit={"close"}
              variants={accordionTextAnimateVariables}
                className={styles.aboutUs__accordionText}
              >
                <div >
                Our toys help develop fine motor skills, creativity, and problem-solving abilities. 
                For example, water drawing mats allow children to express their artistic side while improving hand-eye coordination, 
                and magnetic constructors stimulate imaginative play and critical thinking as children build and create.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={styles.aboutUs__accordion}>
          <motion.div
            className={styles.aboutUs__accordionHead}
            animate={{
              backgroundColor: thirdAccordionIsVisible ? "#fe93c6" : "#ffcbda"
            }}
            onClick={handleThirdAccordionVisible}>
            <div >
            Are your toys safe and environmentally friendly?
            </div>

            <motion.div initial={false}
              className={styles.aboutUs__accordionArrow}
              animate={"open"}
              variants={thirdAccordionArrowAnimateVariables}
            >
              <Image
                className={styles.aboutUs__accordionArrowImg}
                src={accordionArrow}
                alt="accordion arrow"
              />
            </motion.div>

          </motion.div>
          <AnimatePresence>
            {thirdAccordionIsVisible && (
              <motion.div
              initial={"'hidden'"}
              animate={"show"}
              exit={"close"}
              variants={accordionTextAnimateVariables}
                className={styles.aboutUs__accordionText}
              >
                <div >
                Absolutely! We offer only safe and sustainable toys made from high-quality, non-toxic materials that meet strict safety standards.
                We believe in providing safe play experiences while also being mindful of our planet.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div >
  )
}

export default AboutUs;
