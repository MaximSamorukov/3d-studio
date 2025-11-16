import 'server-only';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'master_users' })
export class MasterUserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', nullable: true })
  name!: string | null;

  @Column({ type: 'varchar', nullable: true, unique: true })
  email!: string | null;

  @Column({ name: 'email_verified', type: 'varchar', nullable: true })
  emailVerified!: string | null;

  @Column({ type: 'varchar', nullable: true })
  image!: string | null;

  @Column({ type: 'varchar', nullable: false })
  password!: string;
}
