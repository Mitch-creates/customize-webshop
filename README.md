# Chatati

The project was made with the following tools and techs:

- **Node.js** - JavaScript runtime environment
- **Docker** - Containerization platform
- **Docker Compose** - Multi-container Docker orchestration
- **Prisma** - Database ORM and migration tool
- **PostgreSQL** - Database (implied by Docker Compose usage)
- **Zod** - For form validation
- **next-intl** - Internationalization and localization
- **Better Auth** - Authentication solution

## Setup

### Prerequisites

- Node.js
- Docker
- Docker Compose

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd chatati
```

2. Install dependencies

```bash
npm install
```

3. Start the database with Docker. Make sure to first already launch Docker

```bash
docker-compose up -d
```

4. Run Prisma migrations

```bash
npx prisma migrate dev
```

5. Generate Prisma client

```bash
npx prisma generate
```

6. Start the development server

```bash
npm run dev
```

## Useful Commands

### Prisma

#### Full code to create a migration:

1. Stop Dev server with Ctrl + C
2. run either the following command to update

```bash
npx prisma migrate dev --name update_auth_schema
```

3. Or the following to completely reset the database

```bash
npx prisma migrate reset
```

4. Generate the Prisma Client.

```bash
npx prisma migrate reset
```

#### Other Prisma commands

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Reset database
npx prisma migrate reset

# View database in Prisma Studio
npx prisma studio
```

### Docker

```bash
# Start containers
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs

# Rebuild containers
docker-compose up --build
```
