import type { IExpense } from "../interfaces/expense.interface.js";

export class Expense implements IExpense {
  constructor(
    public id: number,
    public _description: string,
    public _amount: number,
    public _date: Date,
  ) {}

  get amount(): number {
    return this._amount || 0;
  }
  updateAmount(newAmount: number): void {
    this._amount = newAmount;
  }

  get description(): string {
    return this._description || "";
  }
  updateDescription(newDescription: string): void {
    this._description = newDescription;
  }

  get date(): Date {
    return this._date || new Date();
  }
  updateDate(newDate: Date): void {
    this._date = newDate;
  }
}
