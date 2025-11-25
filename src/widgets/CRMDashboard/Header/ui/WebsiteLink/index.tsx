import cn from 'classnames';
import Link from 'next/link';
import s from './style.module.scss';

export const WebsiteLink = () => {
  return (
    <div className={cn(s.itemContainer)}>
      <Link href={'/'} className={cn(s.unset, s.itemLabel, s.pointer)}>
        Сайт
      </Link>
    </div>
  );
};
