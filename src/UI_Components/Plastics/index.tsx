import { plastics } from './constants'
import s from './style.module.scss'

export default function Plastics() {
  return (
    <div className={s.container}>
      {plastics.map((i) => (
        <div className={s.item}>
          {i}
        </div>
      ))}
    </div>
  )
}
