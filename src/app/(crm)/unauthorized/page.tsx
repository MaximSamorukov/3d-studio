import Link from 'next/link';
import s from './unauthorized.module.scss';
// export const runtime = 'nodejs';

export default function UnauthorizedPage() {
  return (
    <div className={s.unauthorized}>
      <h1>⛔ Отсутствует авторизация</h1>
      <p>для нахождения на данной странице.</p>
      <Link href="/">
        <p>Вернуться на главную страницу</p>
      </Link>
    </div>
  );
}
