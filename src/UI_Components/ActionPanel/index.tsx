import cn from 'classnames';
import s from './style.module.scss'

export default function ActionPanel() {
  return (
    <div className={s.container}>
      <button className={cn(s.button, s.buttonOrderPrintingContainer)}>
         Заказать 3D печать
      </button>
      <button className={cn(s.button, s.buttonOrderModelingContainer)}>
         Заказать 3D моделирование
      </button>
      <button className={cn(s.button, s.buttonOrderModelingContainer)}>
         Заказать консультацию
      </button>
    </div>
  )
}
