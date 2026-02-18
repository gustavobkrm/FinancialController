import express from "express";
import { expenseRoutes } from "../interfaces/routes/expense.route.js";
import { initializeDatabase } from "../infrastructure/database/db.js";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(expenseRoutes);

initializeDatabase()
  .then(() => {
    console.log("DB_HOST:", process.env.DB_HOST);
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch((error) => {
    console.log("DB_HOST:", process.env.DB_HOST);
    console.error("Erro ao iniciar o servidor:", error);
  });
