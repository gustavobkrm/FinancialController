# 💰 Projeto Finanças - Software Architecture Study

A **Node.js + TypeScript** project designed for studying and implementing **software architecture best practices** in a real-world financial application context.

## 📚 Project Purpose

This project serves as a **learning repository** for understanding and applying:
- Clean Architecture principles
- SOLID principles
- Design Patterns (Repository, Use Case, Dependency Injection)
- Domain-Driven Design (DDD) concepts
- TypeScript best practices
- Enterprise-level code organization

## 🏗️ Architecture Overview

This project follows **Clean Architecture** with clear separation of concerns:

```
src/
├── domain/                    # Business logic (entities, interfaces, value objects)
│   ├── entities/             # Core business models
│   ├── interfaces/           # Repository interfaces & contracts
│   └── services/             # Domain services
├── application/              # Application logic (use cases)
│   └── use_cases/           # Business orchestration
├── infrastructure/           # External frameworks & tools
│   ├── database/            # Database configuration & ORM entities
│   └── repositories/        # Repository implementations
└── interfaces/              # Presentation layer
    └── controllers/         # API controllers
```

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Runtime** | Node.js |
| **Language** | TypeScript |
| **Framework** | Express.js |
| **Database** | Microsoft SQL Server |
| **ORM** | TypeORM |
| **Environment** | dotenv |

## 📋 Key Concepts Implemented

### Clean Architecture Layers

1. **Domain Layer** - Pure business logic, independent of frameworks
   - Entities: `Expense`
   - Interfaces: `ExpenseRepositoryInterface`

2. **Application Layer** - Use cases orchestrating domain logic
   - `CreateExpenseUseCase`
   - `UpdateExpenseUseCase`

3. **Infrastructure Layer** - Technical implementations
   - `ExpenseOrmRepository` - Repository pattern implementation
   - `ExpenseOrmEntity` - ORM mapping

4. **Interfaces Layer** - Entry points (Controllers, APIs)
   - `ExpenseController` - HTTP handlers

### Design Patterns Used

- **Repository Pattern** - Abstraction over data access
- **Use Case Pattern** - Encapsulation of business workflows
- **Dependency Injection** - Loose coupling between layers
- **Entity Mapping** - Domain entities separate from ORM entities

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Microsoft SQL Server

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd projeto_financas
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root:
```env
DB_HOST=your_server_address
DB_PORT=1433
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
```

4. Build the project:
```bash
npm run build
```

5. Start the server:
```bash
npm start
```

## 📝 TypeScript Configuration

The project uses strict TypeScript settings with decorator support for TypeORM:

- `strict: true` - Strict type checking
- `experimentalDecorators: true` - Support for decorators
- `emitDecoratorMetadata: true` - Metadata emission for decorators

## 🎓 Best Practices Demonstrated

### 1. Separation of Concerns
- Each layer has a single responsibility
- Domain logic is isolated from infrastructure

### 2. Dependency Injection
```typescript
const repository = new ExpenseOrmRepository(ormRepo);
const useCase = new CreateExpenseUseCase(repository);
```

### 3. Interface Segregation
- `ExpenseRepositoryInterface` defines contracts
- Implementations must adhere to interfaces

### 4. Type Safety
- Full TypeScript strict mode enabled
- No `any` types in domain logic

### 5. Environment Configuration
- Sensitive data in `.env` files
- `.gitignore` prevents accidental commits

## 📂 Project Structure Details

### Domain Layer
```typescript
// entities/expense.entity.ts
export class Expense {
  id: number;
  description: string;
  amount: number;
  date: Date;
}

// interfaces/repository_interfaces
export interface ExpenseRepositoryInterface {
  create(expense: Expense): Promise<Expense>;
  update(id: number, expense: Expense): Promise<Expense | null>;
}
```

### Application Layer
```typescript
// use_cases/create-expense.usecase.ts
export class CreateExpenseUseCase {
  constructor(private repository: ExpenseRepositoryInterface) {}
  
  async execute(expense: Expense): Promise<Expense> {
    // Business logic here
  }
}
```

### Infrastructure Layer
```typescript
// repositories/expense.orm.repository.ts
export class ExpenseOrmRepository implements ExpenseRepositoryInterface {
  async create(expense: Expense): Promise<Expense> {
    // Database implementation
  }
}
```

## 🔄 Data Flow

```
HTTP Request
    ↓
Controller (Interfaces Layer)
    ↓
Use Case (Application Layer)
    ↓
Repository Interface (Domain Layer)
    ↓
Repository Implementation (Infrastructure Layer)
    ↓
Database (TypeORM)
```

## 🧪 Testing Strategy

When implementing tests:
- **Unit Tests** - Test use cases with mocked repositories
- **Integration Tests** - Test repository implementations with real DB
- **E2E Tests** - Test complete workflows via HTTP

## 📚 Resources for Learning

- [Clean Architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Domain-Driven Design](https://www.domainlanguage.com/ddd/)
- [TypeORM Documentation](https://typeorm.io/)

## 📝 License

This is a study project for educational purposes.

## 🤝 Contributing

Feel free to fork, modify, and learn from this architecture. The goal is to understand and apply these patterns in your own projects.

---

**Last Updated:** February 17, 2026
