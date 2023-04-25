import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid', {
    name: 'users_id',
  })
  id: string;

  @Column({
    name: 'users_login',
    nullable: false,
    unique: true,
    type: 'varchar',
    length: 50,
  })
  login: string;

  @Column({
    name: 'users_password',
    nullable: false,
    unique: true,
    type: 'varchar',
    length: 50,
  })
  password: string;

  @Column({
    name: 'users_token',
    nullable: false,
    unique: true,
    type: 'varchar',
    length: 50,
  })
  token: string;
}
