import { CreateExpenseUseCase } from "../../application/use_cases/create-expense.usecase.js";
import { AppDataSource } from "../../infrastructure/database/db.js";
import { ExpenseOrmRepository } from "../../infrastructure/repositories/expense.orm.repository.js";
import { ExpenseOrmEntity } from "../../infrastructure/database/typeorm/expense.orm.entity.js";
import type { Request, Response } from "express";
import { UpdateExpenseUseCase } from "../../application/use_cases/update-expense.usecase.js";

export class ExpenseController {
  async createExpense(req: Request, res: Response): Promise<Response> {
    const ormRepo = AppDataSource.getRepository(ExpenseOrmEntity);
    const repository = new ExpenseOrmRepository(ormRepo);
    const useCase = new CreateExpenseUseCase(repository);

    await useCase.execute(req.body);
    return res.status(201).json({ message: "Despesa criada com sucesso" });
  }

  async updateExpense(req: Request, res: Response): Promise<Response> {
    const ormRepo = AppDataSource.getRepository(ExpenseOrmEntity);
    const repository = new ExpenseOrmRepository(ormRepo);
    const useCase = new UpdateExpenseUseCase(repository);

    await useCase.execute(req.body);
    return res.status(200).json({ message: "Despesa atualizada com sucesso" });
  }
}
