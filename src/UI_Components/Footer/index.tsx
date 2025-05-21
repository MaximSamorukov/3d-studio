import Image from "next/image";
import Link from "next/link";
import ContactWidget from "../MainMenuItemContactWidget";
import s from "./style.module.scss";
import MenuItem from "../MenuItem";
import { footerMenu, logoText, menuItems } from "./constants";
import { FooterMenuItem } from "../FooterMenuItem";

export default function Footer() {
  return (
    <div className={s.container}>
      <div className={s.inner_container}>
        <div className={s.logoImg_container}>
          <Link href={"/3d_printing"}>
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
          </Link>
          <div className={s.logoImg_logo}>
            <span>{logoText}</span>
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
