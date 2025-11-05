# Chatati

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
