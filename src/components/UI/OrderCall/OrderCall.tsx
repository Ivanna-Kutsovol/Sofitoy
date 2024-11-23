"use client";

import Button from "../Button/Button";
import styles from "./OrderCall.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IForm } from '../../../app/ContactUs/page';
import PhoneInput from "../../UI/Inputs/InputMasked";

interface OrderCallProps {
    id: string;
  }

const OrderCall: React.FC<OrderCallProps> = ({id}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { register, handleSubmit, formState: {errors}, reset, setValue } = useForm<IForm>({
        mode: 'onBlur',
        defaultValues: {
          name: '',
          phone: ''
        }
      });

      const onSubmit = async (data: IForm) =>{
        setIsLoading(true);
        try {
            alert("Success")
            reset()
        } catch (error) {
            alert("Failed")
        } finally {
            setIsLoading(false);
        }
      }
    
    return (
        <section className={styles.orderCall} id={id}>
            <h2 className={styles.orderCall__heading}>Order a call</h2>
            <form onSubmit={handleSubmit(onSubmit)} method="post" className={styles.orderCallForm}>
            <p className={styles.orderCallForm__labelClass}> Full name </p>
            <section className={styles.orderCallForm__section}>
            <input 
                autoComplete="name"
                type="text" 
                className={styles.orderCallForm__inputClass}
                placeholder={"name"}
              {...register('name', {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z]{1,19}\s[A-Za-z]{1,19}$/,
                  message: 'Invalid name format'
                }
              })}
            />
            {errors.name && <p className={styles.orderCallForm__errors}>{errors.name.message}</p>}
            </section>
            
        <section className={styles.orderCallForm__section}>
            <p className={styles.orderCallForm__labelClass}> Phone </p>
             <PhoneInput 
              setValue={setValue}
              className={styles.orderCallForm__inputClass}
              {...register('phone', {
                required: "Phone number is required",
                pattern: {
                  value: /^\+1\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                  message: 'Invalid phone number',
                }
              })}
            />
            {errors.phone && <p className={styles.orderCallForm__errors}>{errors.phone.message}</p>}
        </section>
                <Button
                    text={isLoading ? "Sending..." : "Send"}
                    type="submit"
                    className={styles.orderCallForm__button}
                />
            </form>
        </section>
    )
}

export default OrderCall;