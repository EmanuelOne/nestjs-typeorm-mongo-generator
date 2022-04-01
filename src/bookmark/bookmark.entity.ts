import { User } from './../user/user.entity';
import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Bookmark {
  @ObjectIdColumn()
  _id?: ObjectID;
  @ManyToOne(() => User, (user) => user._id)
  author: User;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  url: string;
  @Column()
  tags: string;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
