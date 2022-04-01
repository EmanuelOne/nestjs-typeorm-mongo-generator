import { Bookmark } from './../bookmark/bookmark.entity';
import { IsEmail, IsPhoneNumber } from 'class-validator';
import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  Unique,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  @ObjectIdColumn()
  _id?: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  @Column({ unique: true })
  @IsEmail()
  email: string;
  @Column()
  password: string;
  @Column()
  @IsPhoneNumber('NG')
  phone: string;
  @OneToMany(() => Bookmark, (bookmark) => bookmark.author)
  bookmarks?: Bookmark[];
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt?: Date;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt?: Date;
}
