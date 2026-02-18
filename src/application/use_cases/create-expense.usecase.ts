import { Expense } from "../../domain/entities/expense.entity.js";
import type { ExpenseRepositoryInterface } from "../../domain/interfaces/repository_interfaces/expense.repository.interface.js";

export class CreateExpenseUseCase {
  constructor(private expenseRepository: ExpenseRepositoryInterface) {}

  async execute(data: {
    description: string;
    amount: number;
    date: Date;
  }): Promise<void> {
    const expenseData = new Expense(
      0,
      data.description,
      data.amount,
      data.date,
    );
    await this.expenseRepository.create(expenseData);
  }
}
