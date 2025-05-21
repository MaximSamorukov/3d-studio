import { benefits } from './constants';
import s from './style.module.scss';

export const Benefits = () => {
  return (
    <div className={s.benefitsContainer}>
      <div className={s.benefitsMainLabel}>
         Преимущества изготовления изделий методом 3-D печати
      </div>
      <div className={s.benefitsStepsContainer}>
         {benefits.map((i) => (
            <div className={s.benefitsStepContainer}>
               <div className={s.benefitsStepHeader}>
                  {i.feature}
               </div>
               <div className={s.benefitsStepBody}>
                  {i.description}
               </div>
            </div>

         ))}
      </div>
    </div>
  )
}
