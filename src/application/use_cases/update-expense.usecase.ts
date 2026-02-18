import { Expense } from "../../domain/entities/expense.entity.js";
import type { ExpenseRepositoryInterface } from "../../domain/interfaces/repository_interfaces/expense.repository.interface.js";

export class UpdateExpenseUseCase {
  constructor(private expenseRepository: ExpenseRepositoryInterface) {}

  async execute(data: {
    id: number;
    description?: string;
    amount?: number;
    date?: Date;
  }): Promise<void> {
    const existingExpense = await this.expenseRepository.findById(data.id);
    if (!existingExpense) {
      throw new Error("Expense not found");
    }
    if (data.description !== undefined) {
      existingExpense.updateDescription(data.description);
    }
    if (data.amount !== undefined) {
      existingExpense.updateAmount(data.amount);
    }
    if (data.date !== undefined) {
      existingExpense.updateDate(data.date);
    }

    await this.expenseRepository.update(existingExpense.id, existingExpense);
  }
}
