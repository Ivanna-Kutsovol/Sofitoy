/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useRef, useState, useCallback} from "react";
import styles from './button.module.scss';
import { useRouter } from 'next/navigation';
import { IForm } from '../page';

const cloudsConfig = [
  [],
  [
    { width: '11%', height: '25%', left: '13%', top: '2%' },
    { width: '13%', height: '29%', left: '1%', top: '25%' },
    { width: '8%', height: '17%', left: '5%', top: '60%' },
    { width: '9%', height: '20%', left: '15%', top: '77%' },
  ],
  [ 
    { width: '12%', height: '27%', left: '15%', top: '3%' },
    { width: '9.5%', height: '21%', left: '2%', top: '30%' },
    { width: '7%', height: '15.5%', left: '25%', top: '45%' },
    { width: '13%', height: '29%', left: '6%', top: '55%' },
    { width: '11%', height: '25%', left: '20%', top: '73%' },
  ],
  [ 
    { width: '13%', height: '28%', left: '33%', top: '4%' },
    { width: '15.5%', height: '35%', left: '10%', top: '3%' },
    { width: '17.5%', height: '38.5%', left: '20%', top: '34%' },
    { width: '9.5%', height: '21%', left: '2%', top: '38%' },
    { width: '12.5%', height: '27%', left: '8%', top: '63%' },
    { width: '10%', height: '22%', left: '30%', top: '75%' },
  ],
  [ 
    { width: '15.3%', height: '33%', left: '15%', top: '7%' },
    { width: '10%', height: '22%', left: '4%', top: '33%' },
    { width: '13%', height: '29%', left: '10%', top: '62%' },
    { width: '17%', height: '38.5%', left: '25%', top: '32%' },
    { width: '11%', height: '24%', left: '30%', top: '75%' },
    { width: '12%', height: '27%', left: '42%', top: '10%' },
    { width: '8%', height: '17%', left: '48%', top: '45%' },
    { width: '15%', height: '32%', left: '48%', top: '65%' },
  ],
  [
    { width: '5%', height: '11%', left: '18%', top: '15%' },
    { width: '8%', height: '18%', left: '5%', top: '32%' },
    { width: '11%', height: '24%', left: '10%', top: '60%' },
    { width: '11%', height: '24%', left: '33%', top: '10%' },
    { width: '13.5%', height: '29%', left: '22%', top: '35%' },
    { width: '7%', height: '15.5%', left: '28%', top: '72%' },
    { width: '6%', height: '13.5%', left: '35%', top: '52%' },
    { width: '12%', height: '26%', left: '43%', top: '68%' },
    { width: '13%', height: '29%', left: '50%', top: '28%' },
    { width: '8%', height: '18%', left: '62%', top: '10%' },
    { width: '11%', height: '24%', left: '60%', top: '54%' },
    { width: '5%', height: '11%', left: '67%', top: '78%' },
  ],
  [],
];

const raysConfig = [
  [],
  [],
  [
    {height: '17%', left: '6%', top: '0%', rotate: '135deg'},
    {height: '29%', left: '-1%', top: '13%', rotate: '105deg'},
    {height: '37%', left: '-2%', top: '44%', rotate: '80deg'},
    {height: '13%', left: '6%', top: '83%', rotate: '35deg'}
  ],
  [
    {height: '13%', left: '5%', top: '1%', rotate: '130deg'},
    {height: '35%', left: '-3%', top: '3%', rotate: '-79deg'},
    {height: '50%', left: '-6%', top: '19%', rotate: '90deg'},
    {height: '35%', left: '-1%', top: '60%', rotate: '62deg'},
    {height: '19%', left: '8%', top: '83%', rotate: '45deg'}
  ],
  [
    {height: '13%', left: '6%', top: '2%', rotate: '135deg'},
    {height: '32%', left: '-1%', top: '3%', rotate: '112deg'},
    {height: '35%', left: '-4%', top: '30%', rotate: '90deg'},
    {height: '14%', left: '5%', top: '85%', rotate: '50deg'},
    {height: '8%', left: '15%', top: '90%', rotate: '180deg'},
    {height: '10%', left: '25%', top: '84%', rotate: '130deg'},
    {height: '8%', left: '15%', top: '0%', rotate: '180deg'},
    {height: '8%', left: '23%', top: '3%', rotate: '35deg'},
  ],
  [
    {height: '14%', left: '6%', top: '1%', rotate: '130deg'},
    {height: '32%', left: '-1%', top: '5%', rotate: '112deg'},
    {height: '35%', left: '-4%', top: '35%', rotate: '90deg'},
    {height: '14%', left: '5%', top: '85%', rotate: '50deg'},
    {height: '8%', left: '15%', top: '90%', rotate: '180deg'},
    {height: '10%', left: '25%', top: '84%', rotate: '130deg'},
    {height: '8%', left: '15%', top: '0%', rotate: '180deg'},
    {height: '8%', left: '23%', top: '5%', rotate: '35deg'},
    {height: '11%', left: '30%', top: '20%', rotate: '70deg'},
    {height: '37%', left: '-1%', top: '65%', rotate: '65deg'},
    {height: '14%', left: '30%', top: '60%', rotate: '110deg'}
  ]
]

interface SwithProps {
  onSubmit: (data: IForm) => void;
  isLimitReached: boolean;
  isFieldsValid: boolean;
  data: IForm;
}

const Swith: React.FC<SwithProps> = ({ onSubmit, isLimitReached, isFieldsValid, data }) => {

  const swithRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null);
  const [isDisabled, setIsDisable] = useState<boolean>(false)
  

   const router = useRouter();

   const goToHome = () => {
    router.push('/');
   }

  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number,
    lastX: number,
  }>({
    startX: 53,
    lastX: 53
  })

  const [position, setPosition] = useState<number>(0);
  const [step, setStep] = useState<number>(0);
  const [maxX, setMaxX] = useState<number>(450);
  const [stepWidth, setStepWidth] = useState<number>(55);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const updateStep = useCallback((clampedX: number) => {
    const newStep = Math.floor(clampedX / stepWidth);
    if (newStep !== step) {
      setStep(newStep);
    }
  }, [step, stepWidth]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setMaxX(100); 
        setStepWidth(20);
      } else if (width < 768) {
        setMaxX(150); 
        setStepWidth(40);
      } else if (width < 1024) {
        setMaxX(230); 
        setStepWidth(40);
      } else {
        setMaxX(300); 
        setStepWidth(55);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{
    if(!buttonRef.current || !swithRef.current) return;

    const swith = swithRef.current;
    const button = buttonRef.current;

    const onMouseDown = (e: MouseEvent | TouchEvent) => {
      if (isDisabled) return;
      isClicked.current = true;
      coords.current.startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    }

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = position;
    }

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      if(!isClicked.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const nextX = clientX - coords.current.startX + coords.current.lastX;
      const minX = 0;
      // const maxX = swith.offsetWidth - button.offsetWidth;
      const clampedX = Math.min(Math.max(nextX, minX), maxX);

      setPosition(clampedX);
      updateStep(clampedX); 

      console.log('Current Position:', clampedX); 
      console.log('Max Position:', maxX); 

      if (clampedX >= maxX) {
        goToHome(); 
        onSubmit(data)
        return;
      }
  };

  button.addEventListener('mousedown', onMouseDown);
  button.addEventListener('touchstart', onMouseDown);
  window.addEventListener('mouseup', onMouseUp);
  swith.addEventListener('mousemove', onMouseMove);
  swith.addEventListener('touchmove', onMouseMove);
  swith.addEventListener('mouseleave', onMouseUp);

    const cleanup = () => {
      button.removeEventListener('mousedown', onMouseDown);
      button.removeEventListener('touchstart', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      swith.removeEventListener('mousemove', onMouseMove);
      swith.removeEventListener('touchmove', onMouseMove);
      swith.removeEventListener('mouseleave', onMouseUp);
    }
  
    return cleanup;
  },[position, updateStep, maxX, goToHome, onSubmit, isDisabled, data])

  const handleClick = () => {
      animateButtonToMax(Math.floor(maxX / stepWidth));
      onSubmit(data)
  };

  const animateButtonToMax = (targetStep: number) => {

    setIsAnimating(true);
    const start = position;
    let targetPosition = targetStep * stepWidth;
    // const distance = maxX - start;
    const duration = 10000; 
    const startTime = performance.now();
    let currentStep = step;
    let currentPosition = start;
  
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easing = progress * (5 + progress); 

      currentPosition += stepWidth * easing;
      setPosition(currentPosition);
      updateStep(currentPosition);

      if (currentPosition >= maxX) {
        console.log('Go to home');
        goToHome(); 
        return; 
      }
  
      if (currentPosition == targetPosition) {
        currentStep++;
        setStep(currentStep);
        targetPosition += stepWidth;
      }
  
      if (progress < 1) {
        if (isDisabled) return; 
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
  
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
      if (isFieldsValid && isLimitReached) {
      console.warn('Form submission limit reached.');
    }
  
    setIsDisable(isLimitReached || !isFieldsValid);
  }, [isLimitReached, isFieldsValid]);
  
  const renderRays = () => {
    const rays = raysConfig[step] || [];
    return rays.map((rays, index) => (
      <div 
      key={index} 
      className={styles.rays} 
      style={{
        width: '1.5%',
        height: rays.height,
        left: `calc(${rays.left} + ${position}px)`,
        top: rays.top,
        rotate: rays.rotate,
        position: 'absolute', 
      }}
      ></div>
    ));
  }

  const renderClouds = () => {
    const clouds = cloudsConfig[step] || [];
    return clouds.map((cloud, index) => (
      <div 
        key={index} 
        className={styles.cloud} 
          style={{
          width: cloud.width,
          height: cloud.height,
          left: cloud.left,
          top: cloud.top,
          position: 'absolute', 
          backgroundImage: `var(--gb-cloud-icon-url)`,
          backgroundSize: 'contain'
        }}
      ></div>
    ));
  }

  return(
    <div  ref={swithRef}  className={`${styles.buttonMain} ${isDisabled ? styles.disabled : ''}`}>
      <button 
      className={`${styles.swith} ${styles[`swith--step${step}`]} `}>
      {renderClouds()} 
        
        <div ref={buttonRef} 
          className={`${styles.swith__button} ${styles[`swith__button--step${step}`]}`}
          style={{left: `${position}px`}} onClick={handleClick}/>
        {renderRays()}
        
      <p className={`${styles.swith__text} ${styles[`swith__text--step${step}`]}`}>Send</p>
      </button>
    </div>
      
  )
}

export default Swith;