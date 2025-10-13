"use client";
import { useMemo } from "react";
import cn from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import s from "./style.module.scss";

export default function MenuItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const currentPath = useMemo(() => pathname === href, [pathname, href]);
  return (
    <div className={cn(s.menuItemHover, { [s.menuItemActive]: currentPath })}>
      <Link href={href}>{label}</Link>
    </div>
  );
}
