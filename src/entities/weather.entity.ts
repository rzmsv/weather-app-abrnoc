import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";

@Entity()
export class Weather {

  @PrimaryGeneratedColumn()
  id !: number;

  @Column()
  cityName !: string;

  @Column()
  country !: string

  @Column('float')
  temperature !: number

  @Column()
  description !: string

  @Column()
  humidity !: number

  @Column('float')
  windSpeed !: number

  @Column({ type: 'timestamp' })
  fetchedAt !: Date

  @Column({ type: 'timestamp' })
  createdAt !: Date

  @Column({ type: 'timestamp' })
  updatedAt !: Date
}