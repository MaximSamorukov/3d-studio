import Image from 'next/image';
import cn from 'classnames';
import s from './style.module.scss';
import Link from 'next/link';
import { LoginButton } from '../LoginButton';
import { CRMEnterButton } from '../CRMEnterButton';

export default function ContactWidget({
  footer = false,
}: {
  footer?: boolean;
}) {
  return (
    <div className={s.contactWidgetContainer}>
      <div className={s.itemContainer}>
        <Link href="tel:+79250261737" className={s.itemIcon}>
          <Image src="/phone.svg" width={24} height={24} alt="phone" />
        </Link>
        <Link
          href="tel:+79250261737"
          className={cn(s.itemLabel, { [s.footer]: footer })}
        >
          <span>+7-925-026-17-37</span>
        </Link>
      </div>
      <div className={s.itemContainer}>
        <Link
          href="mailto:zakaz.print.3d@gmail.com?subject=Заказ"
          className={s.itemIcon}
        >
          <Image src="/email.svg" width={24} height={24} alt="email" />
        </Link>
        <Link
          href="mailto:zakaz.print.3d@gmail.com?subject=Заказ"
          className={cn(s.itemLabel, { [s.footer]: footer })}
        >
          <span>zakaz.print.3d@gmail.com</span>
        </Link>
      </div>
      {!footer ? (
        <div className={s.itemContainer}>
          <LoginButton />
          <CRMEnterButton />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
