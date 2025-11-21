import React from 'react';
import s from './style.module.scss';
import { RegisterForm } from '@/widgets/RegisterForm';

export default function AdminRegister() {
  return (
    <div className={s.container}>
      <RegisterForm />
    </div>
  );
}
