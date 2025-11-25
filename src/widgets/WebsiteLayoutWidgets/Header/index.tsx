import Image from 'next/image';
import Link from 'next/link';
import ContactWidget from '../../MainMenuContactWidget';
import s from './style.module.scss';
import { MenuItems } from './ui/MenuItems';
import { Logo } from './ui/Logo';

export default function Header() {
  return (
    <div className={s.container}>
      <div className={s.inner_container}>
        <div className={s.logoImg_container}>
          <Logo />
        </div>
        <div className={s.menuItems_container}>
          <MenuItems />
          <div>
            <ContactWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
