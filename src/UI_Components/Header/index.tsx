import Image from 'next/image';
import Link from 'next/link'
import s from './style.module.scss'
import ContactWidget from '../MainMenuItemContactWidget'

export default function Header() {
  return (
    <div className={s.container}>
       <div className={s.inner_container}>
         <div className={s.logoImg_container}>
            <Link href='/3d_printing'>
               <Image
                  src="/logo.svg"
                  width={100}
                  height={100}
                  alt='logo'
               />
            </Link>
         </div>
         <div className={s.menuItems_container}>
            <div className={s.menuItemHover}>
               <Link href='/3d_printing'>3D-печать</Link>
            </div>
            <div className={s.menuItemHover}>
               <Link href='/3d_modeling'>3D-моделирование</Link>
            </div>
            <div className={s.menuItemHover}>
               <Link href='/plastic'>Типы пластика</Link>
            </div>
            <div className={s.menuItemHover}>
               <Link href='/logistic'>Доставка и оплата</Link>
            </div>
            <div className={s.menuItemHover}>
               <Link href='/contacts'>Контакты</Link>
            </div>
            <div className={s.menuItem}>
               <ContactWidget />
            </div>
         </div>
       </div>
    </div>
  )
}
