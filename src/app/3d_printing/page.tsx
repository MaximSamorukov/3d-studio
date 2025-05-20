import Image from 'next/image'
import s from './style.module.scss'
import Plastics from '@/UI_Components/Plastics'

export default function Printing3D() {
  return (
    <div className={s.pageContainer}>
      <div className={s.pageMainLabelContainer}>
        <div className={s.pageMainLabel}>
          3D печать 
        </div>
        <div className={s.pageSubLabelOne}>
          инженерных и декоративных
        </div>
        <div className={s.pageSubLabelTwo}>
          изделий из пластика
        </div>
      </div>
      <Plastics />
    </div>
  )
}
