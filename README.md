# 📦 Payload CMS Setup – Milestone Learning

This project provides the CMS backend for the Flexforce.ai frontend onboarding assignment using Payload CMS [CMS APP LINK](https://milestone-cms.payloadcms.app/).

---

## 🧰 Tech Stack

| Tool        | Purpose                   |
| ----------- | ------------------------- |
| Payload CMS | Headless CMS Backend      |
| MongoDB     | Database                  |
| Vercel      | Deployment (for frontend) |

---

## 🏗️ Project Structure

- `collections/` – Custom CMS collections (e.g., Users, Media, LearningSupport, Testimonials, Articles, FAQs)
- `payload.config.ts` – Payload config file with schema registration and plugin setup
- `env` – Required `.env` file to run the CMS locally

---

## 📦 Collections Setup

Here are the collections structured for this project:

1. **Users** – Authentication and session control
2. **Media** – File uploads (icons, images)
3. **Learning Support** – Stage-based cards (elementary to graduate school)
4. **Testimonials** – User feedback with image, name, role, and quote
5. **Articles** – Educational posts with image, title, tags, and author
6. **FAQs** – Ordered question-answer content with sortable field

Each collection is public-readable (`read: () => true`) and optimized for CMS management via Payload admin panel.

---

## 🧪 Assignment Context

This CMS project supports the [Flexforce.ai onboarding task](https://www.figma.com/design/NDMyowvjfJqmcSFl7EfMUb/MLD_Test?node-id=2002-1492):

- Designed to power dynamic content in a pixel-perfect React/Next.js frontend
- Enables real-time content edits and media handling
- Used for login/signup using Payload's built-in Users collection

---

## 🧪 Required `.env` Configuration

Create a `.env` file at the root of your CMS project with the following content:

```
PAYLOAD_SECRET=some-random-secret-key
DATABASE_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/milestone
```

- Replace `some-random-secret-key` with a secure secret.
- Replace the `DATABASE_URI` with your actual MongoDB connection string.

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

The admin dashboard will be available at `http://localhost:3000/admin`.

---

## 🚫 Notes

- To allow signup via frontend, ensure the `users` collection allows public POST access (`create` access).
- Logout requires a valid session token (`withCredentials: true` on frontend).
- Use CORS settings to permit requests from local and deployed frontend URLs.

---

## ✅ Submission Requirements Recap

| Task                   | Status                             |
| ---------------------- | ---------------------------------- |
| CMS schema setup       | ✅ Complete                        |
| Content population     | ✅ Done                            |
| Public access (read)   | ✅ Enabled                         |
| Signup/Login endpoints | ✅ Supported with Users collection |
| Deployed CMS           | ✅ Payload Cloud                   |

---
