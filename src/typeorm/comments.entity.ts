import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn('uuid', {
    name: 'comments_id',
  })
  id: string;

  @Column('uuid', {
    name: 'comments_users_author',
    nullable: false,
    unique: true,
  })
  authorId: string;

  @Column('uuid', {
    name: 'comments_article_id',
    nullable: false,
    unique: true,
  })
  articleId: string;

  @Column('varchar', {
    name: 'comments_body',
    nullable: false,
    length: 500,
  })
  body: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
