import Image from 'next/image';
import Link from 'next/link';
import ContactWidget from '../../MainMenuContactWidget';
import s from './style.module.scss';
import { menuItems } from './constants';
import MenuItem from '@/shared/common/MenuItem';

export default function Header() {
  return (
    <div className={s.container}>
      <div className={s.inner_container}>
        <div className={s.logoImg_container}>
          <Link href={'/3d_printing'}>
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
          </Link>
        </div>
        <div className={s.menuItems_container}>
          {menuItems.map((i) => (
            <MenuItem key={i.href} href={i.href} label={i.label} />
          ))}
          <div>
            <ContactWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
