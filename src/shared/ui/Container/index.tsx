import React from 'react';
import s from './style.module.scss';

type ContainerProps = {
  children: React.ReactElement;
};
export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
