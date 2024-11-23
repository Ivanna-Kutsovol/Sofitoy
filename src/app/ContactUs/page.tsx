"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.scss";
import { useForm } from "react-hook-form";
import Link from 'next/link';
import Swith from "./buttonContactUs/buttonForm";
import Button from "../../components/UI/Button/Button";
import PhoneInput from '../../components/UI/Inputs/InputMasked';

export interface IForm {
  name: string;
  phone: string;
  email: string;
  streetAddres: string;
  city: string;
  state: string;
  zipCode: string;
}

function Contact() {
  const [submissionCount, setSubmissionCount] = useState(0);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);
  const [showLimitMessage, setShowLimitMessage] = useState(false);

  const { register, handleSubmit, formState, reset, clearErrors, getValues, setValue } = useForm<IForm>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      streetAddres: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  console.log(getValues('phone'));

  const isFieldsValid = formState.isValid;

  useEffect(() => {
    const savedSubmissionCount = localStorage.getItem("submissionCount");
    const savedLastSubmissionTime = localStorage.getItem("lastSubmissionTime");

    if (savedSubmissionCount) {
      setSubmissionCount(Number(savedSubmissionCount));
    }
    if (savedLastSubmissionTime) {
      setLastSubmissionTime(Number(savedLastSubmissionTime));
    }
  }, []);

  const onSubmit = (data: IForm) => {
    const currentTime = Date.now();
    if (lastSubmissionTime) {
      const hoursPassed = (currentTime - lastSubmissionTime) / (1000 * 60 * 60);
      if (hoursPassed >= 2) {
        setSubmissionCount(0);
        localStorage.removeItem("submissionCount");
        localStorage.removeItem("lastSubmissionTime");
      }
    }
      
      if (submissionCount < 2 && isFieldsValid) {
        console.log("Submitted data:", data);
  
        setTimeout(() => {
          reset();  
          clearErrors();  
        }, 1000);
  
        const newCount = submissionCount + 1;
  
        localStorage.setItem("submissionCount", String(newCount));
        localStorage.setItem("lastSubmissionTime", String(currentTime));
  
        setSubmissionCount(newCount);
        setLastSubmissionTime(currentTime);
        setShowLimitMessage(false);
        
      } else {
        if (lastSubmissionTime !== null && submissionCount === 2){
          setShowLimitMessage(true);
          console.log("Form submission limit reached.");
        } 
        
        console.log({ submissionCount, lastSubmissionTime });
  
      }
  };

  return (
    <section className={styles.main}>
      {showLimitMessage && (
        <div className={styles.dropWindow}>
          <p className={styles.dropWindow__text}>
            You have reached the limit for submitting the form. Please wait 2 hours.
          </p>
          <Link href='/'>
            <Button className={styles.dropWindow__buttonOK} type="button" text="good" />
          </Link>
        </div>
      )}

      <aside className={styles.contactUs}> Contact </aside>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form__firstColumb}>
          <div className={styles.form__IT}>
            <p className={styles.form__topic}> Full name </p>
            <input type="text" className={styles.form__input}
              {...register('name', {
                required: "Full name is required",
                pattern: {
                  value: /^[A-Za-z]{1,19}\s[A-Za-z]{1,19}$/,
                  message: 'Invalid name format'
                }
              })}
            />
            {formState.errors.name && <p className={styles.form__errors}>{formState.errors.name.message}</p>}
          </div>

          <div className={styles.form__IT}>
            <p className={styles.form__topic}> Email </p>
            <input type="email" className={styles.form__input}
              {...register('email', {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {formState.errors.email && <p className={styles.form__errors}>{formState.errors.email.message}</p>}
          </div>

          <div className={styles.form__IT}>
            <p className={styles.form__topic}> City </p>
            <input type="text" className={styles.form__input}
              {...register('city', {
                required: "City is required",
                pattern: {
                  value: /^[A-Za-z\s.-]{1,100}$/,
                  message: 'Invalid city format'
                }
              })}
            />
            {formState.errors.city && <p className={styles.form__errors}>{formState.errors.city.message}</p>}
          </div>

          <div className={styles.form__IT}>
            <p className={styles.form__topic}> ZIP Code </p>
            <input type="text" className={styles.form__input}
              {...register('zipCode', {
                required: "ZIP Code is required",
                pattern: {
                  value: /^\d{5}(-\d{4})?$/,
                  message: 'Invalid ZIP code'
                }
              })}
            />
            {formState.errors.zipCode && <p className={styles.form__errors}>{formState.errors.zipCode.message}</p>}
          </div>
        </div>

        <div className={styles.form__secondColumb}>
          <div className={styles.form__IT}>
            <p className={styles.form__topic}> Phone </p>
            <PhoneInput 
              className={styles.form__input}
              setValue={setValue}
              // error={formState.errors.phone?.message}
              {...register('phone', {
                required: "Phone number is required",
                pattern: {
                  value: /^\+1\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                  message: 'Invalid phone number',
                }
              })}
            />
            {formState.errors.phone && <p className={styles.form__errors}>{formState.errors.phone.message}</p>}
          </div>

          <div className={styles.form__IT}>
            <p className={styles.form__topic}> Street Address </p>
            <input type="text" className={styles.form__input}
              {...register('streetAddres', {
                required: "Street Address is required",
                pattern: {
                  value: /^[A-Za-z0-9\s.,'-]{1,100}$/,
                  message: 'Invalid street address'
                }
              })}
            />
            {formState.errors.streetAddres && <p className={styles.form__errors}>{formState.errors.streetAddres.message}</p>}
          </div>

          <div className={styles.form__IT}>
            <p className={styles.form__topic}> State </p>
            <input type="text" className={styles.form__input}
              {...register('state', {
                required: "State is required",
                pattern: {
                  value: /^[A-Za-z\s]{1,100}$/,
                  message: 'Invalid state'
                }
              })}
            />
            {formState.errors.state && <p className={styles.form__errors}>{formState.errors.state.message}</p>}
          </div>

          <Swith
            onSubmit={onSubmit}
            isLimitReached={submissionCount >= 2}
            isFieldsValid={isFieldsValid}
            data={getValues()}
          />
        </div>
      </form>
    </section>
  );
}

export default Contact;
