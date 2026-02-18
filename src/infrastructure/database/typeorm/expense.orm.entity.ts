import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("expenses")
export class ExpenseOrmEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  description?: string;

  @Column()
  amount?: number;

  @Column()
  date?: Date;
}
