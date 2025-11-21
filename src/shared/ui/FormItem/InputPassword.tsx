import React, { useState } from 'react';
import { FormItemType } from './types';
import cn from 'classnames';
import s from './style.module.scss';
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';

export const InputPassword = ({ field }: { field: FormItemType }) => {
  const methods = useFormContext();
  const [isPassword, setIsPassword] = useState(true);
  const inputType = isPassword ? 'password' : 'text';
  const handlePasswordVisibility = () => {
    setIsPassword((v) => !v);
  };
  return (
    <div className={s.inputTextContainer}>
      <div className={cn(s.inputTextItem, s.inputTextItemPassword)}>
        <input
          type={inputType}
          placeholder={field.placeholder}
          {...methods.register(field.name, field.rules)}
        />
        <button onClick={handlePasswordVisibility} className={s.passwordEye}>
          {isPassword ? (
            <Image
              src={'/eye_close.svg'}
              height={24}
              width={24}
              alt="eye_close"
            />
          ) : (
            <Image
              src={'/eye_open.svg'}
              height={24}
              width={24}
              alt="eye_close"
            />
          )}
        </button>
      </div>
    </div>
  );
};
