import React, { InputHTMLAttributes, useEffect, useRef, forwardRef, createRef } from 'react';
import IMask from 'imask';
import { IForm } from '../../../app/ContactUs/page';
import { UseFormSetValue } from 'react-hook-form';

interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  setValue: UseFormSetValue<IForm>;
  name: keyof IForm;
  error?: string;
}

const PhoneInput = forwardRef<HTMLInputElement,PhoneInputProps>(
  ({ setValue, name, error, ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  

  useEffect(() => {
    const currentRef = inputRef.current;

    if (currentRef) {
      const phoneMask = IMask(currentRef, {
        mask: '+1 000 000 0000',
        lazy: true,
        overwrite: true,
      });

      phoneMask.on('accept', () => {
        const value = phoneMask.value;
        setValue(name, value || '');
        phoneMask.updateValue();
      });

      return () => {
        phoneMask.destroy();
      };
      
    }
  }
)
  return (
      <input
      id='phone'
      autoComplete="tel"
      type="text"
      placeholder={"+1 000 000 0000"}
      onChange={(e) => setValue(name, e.target.value)}
      ref={(el) => {
        inputRef.current = el;
        if (typeof ref === 'function') {
          ref(el);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
        }
      }}
      {...props}
      />
  );
});

PhoneInput.displayName = 'PhoneInput';
export default PhoneInput;