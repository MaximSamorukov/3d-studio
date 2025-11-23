import Image from 'next/image';
import cn from 'classnames';
import s from './style.module.scss';
import Link from 'next/link';
import { LoginButton } from '@/shared/ui/LoginButton';
import { CRMEnterButton } from '@/features/CRMEnterButton';
import { Icon } from '@/shared/ui/Icon';

export default function ContactWidget({
  footer = false,
}: {
  footer?: boolean;
}) {
  return (
    <div
      className={cn(
        s.contactWidgetContainer,
        footer && s.contactWidgetContainerFooterAdaptivity,
      )}
    >
      <div className={cn(s.itemContainer)}>
        <Link
          href="tel:+79250261737"
          className={cn(
            s.itemIcon,
            footer && s.itemIconFooterAdaptivity,
            !footer && s.itemIconHeaderAdaptivity,
          )}
        >
          <Icon type="phone" />
        </Link>
        <Link
          href="tel:+79250261737"
          className={cn(s.itemLabel, {
            [s.footer]: footer,
            [s.header]: !footer,
          })}
        >
          <span>+7-925-026-17-37</span>
        </Link>
      </div>
      <div className={s.itemContainer}>
        <Link
          href="mailto:zakaz.print.3d@gmail.com?subject=Заказ"
          className={cn(
            s.itemIcon,
            footer && s.itemIconFooterAdaptivity,
            !footer && s.itemIconHeaderAdaptivity,
          )}
        >
          <Icon type="email" />
        </Link>
        <Link
          href="mailto:zakaz.print.3d@gmail.com?subject=Заказ"
          className={cn(s.itemLabel, {
            [s.footer]: footer,
            [s.header]: !footer,
          })}
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
