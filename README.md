# B2B-Tender-Platform
# 🏗️ B2B Tender Management Platform

A minimal viable full-stack web application that enables companies to manage and apply for tenders. Built as part of a Full-Stack Developer Internship task.

---

## 🚀 Live Demo

- 🔗 **Frontend (Vercel):** [https://b2b-tender-platform.vercel.app](https://b2b-tender-platform.vercel.app)
- 🔗 **GitHub Repo:** [GitHub Link](https://github.com/madhuri1184/B2B-Tender-Platform)

---

## ✨ Features

- 🔐 **Authentication:** Sign up / Sign in using email & password (JWT-based).
- 🏢 **Company Profile:** Create, update, and manage company metadata with logo/image support via Supabase.
- 📜 **Tender Management:** Companies can publish tenders with deadlines and budgets.
- 📥 **Applications:** Submit proposals for tenders.
- 🔍 **Search:** Server-side search for companies by name, industry, or services.
- 🌐 **Deployment:** Fully deployed frontend and backend with real-time interaction.

---

## 🧰 Tech Stack

| Layer        | Tech Used             |
|--------------|------------------------|
| Frontend     | Next.js (TypeScript)   |
| Backend      | Express.js (JavaScript)|
| Database     | PostgreSQL             |
| Storage      | Supabase Storage       |
| Auth         | JWT                    |
| Deployment   | Vercel (Frontend) & Render/Heroku (Backend) |

---

## 📁 Project Structure

```bash
b2b_tender_platform/
├── frontend/               # Next.js Frontend
│   ├── pages/
│   ├── components/
│   └── utils/
│
├── backend/                # Express.js Backend
│   ├── routes/
│   └── middleware/
│
├── database.sql            # SQL schema
├── architecture.md         # API & flow architecture
└── README.md               # You’re reading it!
