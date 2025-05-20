import Image from 'next/image';
import Link from 'next/link';
import ContactWidget from '../MainMenuItemContactWidget'
import s from './style.module.scss'
import MenuItem from '../MenuItem';
import { menuItems } from './constants';

export default function Header() {

  return (
    <div className={s.container}>
       <div className={s.inner_container}>
         <div className={s.logoImg_container}>
            <Link href={'/3d_printing'}>
               <Image
                  src="/logo.svg"
                  width={100}
                  height={100}
                  alt='logo'
               />
            </Link>
         </div>
         <div className={s.menuItems_container}>
            {menuItems.map((i) => (
               <MenuItem key={i.href} href={i.href} label={i.label} />
            ))}
            <div className={s.menuItem}>
               <ContactWidget />
            </div>
         </div>
       </div>
    </div>
  )
}
