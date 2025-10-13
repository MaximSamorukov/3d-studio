import Link from "next/link";
import ContactWidget from "../../../widgets/common/ui/MainMenuItemContactWidget";
import s from "./style.module.scss";
import Image from "next/image";
import { menuItems, socials } from "@/app/config/constants";

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
          {socials.map(({ id, description }) => (
            <div key={id} className={s.bodySocialsItem}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className={s.bodySocialsItemLink}
                href={description}
              >
                <Image
                  className={s.bodySocialsItemIcon}
                  src={`/footer/socials_${id}_footer.png`}
                  alt={id}
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
