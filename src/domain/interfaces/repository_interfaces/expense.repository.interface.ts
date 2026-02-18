import type { Expense } from "../../entities/expense.entity.js";

export interface ExpenseRepositoryInterface {
  create(expense: Expense): Promise<any>;
  findAll(): Promise<Expense[]>;
  findById(id: number): Promise<Expense | null>;
  update(id: number, expense: Expense): Promise<Expense | null>;
  delete(id: number): Promise<void>;
}
