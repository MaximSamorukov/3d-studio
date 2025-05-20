import Image from 'next/image';
import cn from 'classnames';
import Link from 'next/link'
import s from './style.module.scss'
import ContactWidget from '../MainMenuItemContactWidget'

export default function ActionPanel() {
  return (
    <div className={s.container}>
      <button className={cn(s.button, s.buttonOrderPrintingContainer)}>
         Заказать 3D печать
      </button>
      <button className={cn(s.button, s.buttonOrderModelingContainer)}>
         Заказать 3D моделирование
      </button>
    </div>
  )
}
