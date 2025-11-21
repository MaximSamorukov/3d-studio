import { getMaterialsDataSource } from '@/shared/common/db/materials';
import { MaterialsEntity } from '@/entities/materials';
import s from './style.module.scss';

export default async function Plastics() {
  const dbMaterials = await getMaterialsDataSource();
  const repository = dbMaterials.getRepository(MaterialsEntity);
  const result = await repository.find();
  const plastics = result.map((i) => i.name);
  return (
    <div className={s.container}>
      {plastics.map((i) => (
        <div key={i} className={s.item}>
          {i}
        </div>
      ))}
    </div>
  );
}
