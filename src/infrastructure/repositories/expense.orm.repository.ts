import type { Repository } from "typeorm";
import { ExpenseOrmEntity } from "../database/typeorm/expense.orm.entity.js";
import { Expense } from "../../domain/entities/expense.entity.js";

export class ExpenseOrmRepository {
  constructor(private readonly ormRepository: Repository<ExpenseOrmEntity>) {}

  async create(expense: Expense): Promise<void> {
    const ormEntity = this.toOrmEntity(expense);
    await this.ormRepository.save(ormEntity);
  }
  async findAll(): Promise<Expense[]> {
    const ormEntities = await this.ormRepository.find();
    return ormEntities.map((entity) => this.toDomainEntity(entity));
  }
  async findById(id: number): Promise<Expense | null> {
    const ormEntity = await this.ormRepository.findOneBy({ id });
    return ormEntity ? this.toDomainEntity(ormEntity) : null;
  }
  async update(id: number, expense: Expense): Promise<Expense | null> {
    const ormEntity = this.toOrmEntity(expense);
    ormEntity.id = id;
    const updatedOrmEntity = await this.ormRepository.save(ormEntity);
    return this.toDomainEntity(updatedOrmEntity);
  }
  async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
  private toOrmEntity(expense: Expense): ExpenseOrmEntity {
    const ormEntity = new ExpenseOrmEntity();
    ormEntity.description = expense._description || "";
    ormEntity.amount = expense._amount || 0;
    ormEntity.date = expense._date || new Date();
    return ormEntity;
  }
  private toDomainEntity(ormEntity: ExpenseOrmEntity): Expense {
    return new Expense(
      ormEntity.id || 0,
      ormEntity.description || "",
      ormEntity.amount || 0,
      ormEntity.date || new Date(),
    );
  }
}
