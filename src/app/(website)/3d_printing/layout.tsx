import s from './style.module.scss';
// export const runtime = 'nodejs';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={s.layoutContainer}>{children}</div>;
}
