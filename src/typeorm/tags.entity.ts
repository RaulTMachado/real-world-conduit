import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn('uuid', {
    name: 'tag_id',
  })
  id: string;

  @Column({
    name: 'tag_name',
    nullable: false,
    default: '',
    type: 'varchar',
    length: 50,
  })
  name: string;

  @Column({
    name: 'tag_description',
    nullable: true,
    default: '',
    type: 'varchar',
    length: 150,
  })
  desripton: string;
}
