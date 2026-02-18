USE finance_db;
GO

CREATE TABLE Expenses (
    id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    amount DECIMAL(10,2) NOT NULL,
    description NVARCHAR(255) NOT NULL,
    date DATETIME2 NOT NULL,
    created_at DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    updated_at DATETIME2 NULL
);
GO

CREATE TRIGGER trg_UpdateExpensesUpdatedAt
ON Expenses
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Expenses
    SET updated_at = SYSDATETIME()
    FROM Expenses e
    INNER JOIN inserted i ON e.id = i.id;
END;
GO