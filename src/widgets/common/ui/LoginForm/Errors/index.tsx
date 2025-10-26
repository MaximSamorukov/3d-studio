'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import s from './style.module.scss';

export const Errors = () => {
  const methods = useFormContext();
  const { errors } = methods.formState;
  const { password, login } = errors || {};
  if (password || login) {
    return (
      <div className={s.container}>
        {login ? <span>{login.message?.toString()}</span> : <></>}
        {password ? <span>{password.message?.toString()}</span> : <></>}
      </div>
    );
  }
  return <div className={s.container} />;
};
