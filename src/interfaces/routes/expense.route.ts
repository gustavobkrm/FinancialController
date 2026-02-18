import { Router } from "express";
import { Expense } from "../../domain/entities/expense.entity.js";
import { ExpenseController } from "../controllers/expense.controller.js";

const router = Router();
const controller = new ExpenseController();

router.post("/expenses", controller.createExpense.bind(controller));
router.put("/expenses/:id", controller.updateExpense.bind(controller));

export { router as expenseRoutes };
