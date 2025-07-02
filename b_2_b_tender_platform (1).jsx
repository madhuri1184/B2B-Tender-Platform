### Project Structure

```
b2b_tender_platform/
├── frontend/
│   ├── package.json
│   ├── README.md
│   ├── pages/
│   │   ├── index.tsx
│   │   └── dashboard.tsx
│   ├── components/
│   │   └── Navbar.tsx
│   └── utils/
│       └── supabase.ts
│
├── backend/
│   ├── package.json
│   ├── README.md
│   ├── index.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── company.js
│   │   ├── tender.js
│   │   └── application.js
│   └── middleware/
│       └── authMiddleware.js
│
├── README.md
├── architecture.md
├── database.sql
```

---

### Root `README.md`

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

## 🛠 Tech Stack
- Frontend: Next.js (TypeScript)
- Backend: Express.js
- Database: PostgreSQL
- Storage: Supabase

## 🚀 Deployment
- Frontend: Vercel
- Backend: Render/Heroku

## 📁 Project Structure
See architecture.md for detailed backend & API flow.
```

---

### `architecture.md`

```markdown
# Architecture Overview

## Authentication Flow
- User registers or logs in via email/password.
- Backend generates JWT tokens.
- Tokens are sent via headers to access protected API endpoints.

## API Modules
- `/auth`: Sign-up, Sign-in, JWT issuance
- `/company`: CRUD company profile, upload logo (via Supabase)
- `/tender`: CRUD tenders
- `/application`: Submit/view applications
- `/search`: Filter/search companies by name, industry, services

## Supabase Storage
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

### `frontend/README.md`

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

### `frontend/pages/index.tsx`

```tsx
export default function Home() {
  return (
    <div>
      <h1>Welcome to B2B Tender Platform</h1>
    </div>
  );
}
```

---

### `frontend/utils/supabase.ts`

```ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aeycabgegglqvyatzlny.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!
export const supabase = createClient(supabaseUrl, supabaseKey)
```

---

### `backend/package.json`

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
    "jsonwebtoken": "^9.0.0",
    "dotenv": "^16.0.3"
  }
}
```

---

### `backend/README.md`

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

### `backend/index.js`

```js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/company', require('./routes/company'));
app.use('/tender', require('./routes/tender'));
app.use('/application', require('./routes/application'));

app.listen(5000, () => console.log('Server running on port 5000'));
```

---

### `database.sql`

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

-- Companies table
CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  name TEXT,
  industry TEXT,
  description TEXT,
  logo_url TEXT
);

-- Tenders table
CREATE TABLE tenders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id),
  title TEXT,
  description TEXT,
  deadline DATE,
  budget NUMERIC
);

-- Applications table
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tender_id UUID REFERENCES tenders(id),
  company_id UUID REFERENCES companies(id),
  proposal TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---
