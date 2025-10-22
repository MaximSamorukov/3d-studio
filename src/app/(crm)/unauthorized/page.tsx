import s from "./unauthorized.module.scss";

export default function UnauthorizedPage() {
  return (
    <div className={s.unauthorized}>
      <h1>⛔ Unauthorized</h1>
      <p>You don’t have access to this page.</p>
    </div>
  );
}
