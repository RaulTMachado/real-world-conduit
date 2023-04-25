import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid', {
    name: 'profile_id',
  })
  id: string;
  @Column('uuid', {
    name: 'profile_user_id',
    nullable: false,
    unique: true,
  })
  userId: string;
}
