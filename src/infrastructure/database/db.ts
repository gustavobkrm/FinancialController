import { DataSource } from "typeorm";
import { ExpenseOrmEntity } from "./typeorm/expense.orm.entity.js";
import * as dotenv from "dotenv";
import "reflect-metadata";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mssql",
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT)!,
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  entities: [ExpenseOrmEntity],
  synchronize: false,
  logging: false,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
  extra: {
    trustServerCertificate: true,
  },
});

export const initializeDatabase = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Error during database initialization:", error);
    throw error;
  }
};

export const closeDatabaseConnection = async (): Promise<void> => {
  try {
    await AppDataSource.destroy();
    console.log("Database connection closed successfully.");
  } catch (error) {
    console.error("Error during database connection closure:", error);
    throw error;
  }
};
