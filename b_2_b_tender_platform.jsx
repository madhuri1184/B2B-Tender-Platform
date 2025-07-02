###  Project Structure

```
 b2b_tender_platform
├── frontend
│   ├── package.json
│   ├── README.md
│   ├── .env.example
│   └── (Your Next.js files go here)
│
├── backend
│   ├── package.json
│   ├── README.md
│   ├── .env.example
│   ├── index.js
│   └── (Your Express.js routes go here)
│
├── README.md
├── architecture.md
└── database.sql
```

---

###  Root `README.md`

```markdown
# B2B Tender Management Platform

A full-stack platform for businesses to manage and apply for tenders.

## 🔧 Features
- Company Registration & Profile Management
- Tender Creation and Applications
- Search by Name, Industry, or Services
- JWT Authentication
- Image Upload via Supabase
- PostgreSQL as DB

##  Tech Stack
- Frontend: Next.js (TypeScript)
- Backend: Express.js
- Database: PostgreSQL
- Storage: Supabase

##  Deployment
- Frontend: Vercel
- Backend: Render/Heroku

## Project Structure
See architecture.md for detailed backend & API flow.
```

---

###  `architecture.md`

```markdown
# Architecture Overview

##  Authentication Flow
- User registers or logs in via email/password.
- Backend generates JWT tokens.
- Tokens are sent via headers to access protected API endpoints.

##  API Modules
- `/auth`: Sign-up, Sign-in, JWT issuance
- `/company`: CRUD company profile, upload logo (via Supabase)
- `/tender`: CRUD tenders
- `/application`: Submit/view applications
- `/search`: Filter/search companies by name, industry, services

##  Supabase Storage
- Bucket: `company-logos`
- Upload: logo image via signed URL or direct SDK
- Retrieve: Public URLs from Supabase Storage API
```

---

### `frontend/package.json`

```json
{
  "name": "frontend",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  }
}
```

---

###  `frontend/.env.example`
```
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

###  `frontend/README.md`

```markdown
# Frontend - Next.js (TypeScript)

## Setup Instructions

```bash
cd frontend
npm install
npm run dev
```

### Features:
- Company dashboard
- Tender list UI
- Form validations (client-side)
```

---

###  `backend/package.json`

```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "jsonwebtoken": "^9.0.0"
  }
}
```

---

###  `backend/.env.example`
```
SUPABASE_URL=https://your-supabase-url.supabase.co
SUPABASE_SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:password@host:port/dbname
JWT_SECRET=your-jwt-secret
```

---

###  `backend/index.js`
```js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('B2B Tender Platform API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

---

###  `backend/README.md`

```markdown
# Backend - Express.js

## Setup Instructions

```bash
cd backend
npm install
npm start
```

### Routes Overview:
- /auth
- /company
- /tender
- /application
- /search

### Notes:
- Ensure PostgreSQL DB is running
- Use `.env` for DB credentials and Supabase keys
```

---

### `database.sql`

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(100),
  industry VARCHAR(100),
  description TEXT,
  logo_url TEXT
);

CREATE TABLE tenders (
  id SERIAL PRIMARY KEY,
  company_id INTEGER REFERENCES companies(id),
  title VARCHAR(150),
  description TEXT,
  deadline DATE,
  budget NUMERIC
);

CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  tender_id INTEGER REFERENCES tenders(id),
  company_id INTEGER REFERENCES companies(id),
  proposal TEXT
);
```

---
