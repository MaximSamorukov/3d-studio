import { Benefits, MakeOrder, MakeOrderButton } from '@/widgets/3dPrinting';
import Plastics from '@/features/Plastics';
import { OrderForm } from '@/shared/common/OrderForm';
import s from './style.module.scss';

export const Printing3D = () => {
  return (
    <div className={s.pageContainer}>
      <div className={s.pageMainLabelContainer}>
        <div className={s.pageMainLabel}>3D-печать</div>
        <div className={s.pageSubLabelOne}>инженерных и декоративных</div>
        <div className={s.pageSubLabelTwo}>изделий из пластика</div>
      </div>
      <Plastics />
      <Benefits />
      <MakeOrderButton />
      <MakeOrder />
      <OrderForm />
    </div>
  );
};
