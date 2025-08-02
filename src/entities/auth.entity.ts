import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id !: number;

  @Column()
  mobile !: string;

  @Column()
  name !: string

  @Column('float')
  lastName !: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt !: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt !: Date
}