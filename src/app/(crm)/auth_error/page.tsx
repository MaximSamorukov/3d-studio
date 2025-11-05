import Link from 'next/link';
import s from './unauthorized.module.scss';
// export const runtime = 'nodejs';

export default function AuthErrorPage() {
  return (
    <div className={s.unauthorized}>
      <h1>⛔ Ошибка аутентификации</h1>
      <Link href="/">
        <p>Вернуться на главную страницу</p>
      </Link>
    </div>
  );
}
