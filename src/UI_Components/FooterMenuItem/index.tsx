import Link from "next/link";
import { menuItems, socials } from "../Footer/constants";
import ContactWidget from "../MainMenuItemContactWidget";
import s from "./style.module.scss";
import Image from "next/image";

export const FooterMenuItem = ({
  type,
  header,
}: {
  type: string;
  header: string;
}) => {
  if (type === "baseMenuItems") {
    return (
      <div className={s.container}>
        <div className={s.header}>{header}</div>
        <div className={s.bodyMenuContainer}>
          {menuItems.map(({ href, label }) => (
            <Link key={href} href={href} className={s.bodyMenuItem}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    );
  }
  if (type === "contacts") {
    return (
      <div className={s.container}>
        <div className={s.header}>{header}</div>
        <div className={s.bodyContactsContainer}>
          <ContactWidget footer />
        </div>
      </div>
    );
  }
  if (type === "socials") {
    return (
      <div className={s.container}>
        <div className={s.header}>{header}</div>
        <div className={s.bodySocialsContainer}>
          {socials.map((i) => (
            <div className={s.bodySocialsItem}>
              <Image
                className={s.bodySocialsItemIcon}
                key={i}
                src={`/footer/socials_${i}_footer.png`}
                alt={i}
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};
