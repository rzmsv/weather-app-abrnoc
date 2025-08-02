import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id !: number;

  @Column({ unique: true })
  email !: string;

  @Column({ nullable: true })
  name!: string

  @Column({ nullable: true })
  lastName!: string

  @Column()
  password!: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt !: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt !: Date
}