import cn from 'classnames';
import s from './style.module.scss';

export const Label = () => {
  return (
    <div className={cn(s.itemContainer)}>
      <div className={cn(s.unset, s.itemLabel, s.pointer)}>
        Интерфейст обработки заказов
      </div>
    </div>
  );
};
