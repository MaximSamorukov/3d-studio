import Image from 'next/image';
import Link from 'next/link';
import s from './style.module.scss';
import { FooterMenuItem } from '@/shared/ui/FooterMenuItem';
import { footerMenu, logoText } from '@/app/config/constants';

export default function Footer() {
  return (
    <div className={s.container}>
      <div className={s.inner_container}>
        <div className={s.logoImg_container}>
          <Link href={'/3d_printing'}>
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
          </Link>
          <div className={s.logoImg_logo}>
            {logoText.split('\n').map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
        </div>
        <div className={s.baseMenuContainer}>
          {footerMenu.map((i) => (
            <FooterMenuItem key={i.value} type={i.value} header={i.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
