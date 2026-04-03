# Portfolio Monorepo

This repository contains the active React frontend and Express backend for Om Prajapati's portfolio, plus the archived static implementation preserved in `legacy-static/`.

## Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: Express
- Database: MongoDB with Mongoose for contact messages
- Workspace: npm workspaces at the repository root

## Structure

```text
frontend/      React portfolio application
backend/       Express API and MongoDB models
legacy-static/ archived HTML/CSS/JS portfolio
projectdocs/   migration notes and implementation tracking
render.yaml    Render Blueprint for deploying frontend and backend on Render
```

## Local Development

1. Create a `.env` file in the repository root based on `.env.example`.
2. Set a valid `MONGODB_URI` if you want contact submissions to persist.
3. Make sure MongoDB is actually reachable on that URI before starting the backend.
4. Install dependencies:

```bash
npm install
```

5. Start frontend and backend together:

```bash
npm run dev
```

Frontend runs on `http://127.0.0.1:5173`.

Backend runs on `http://127.0.0.1:5000`.

The frontend uses the Vite dev proxy for `/api`, so you do not need `VITE_API_BASE_URL` for local development.

## Validation

Build the frontend:

```bash
npm run build
```

Check backend health after it starts:

```bash
npm run health:backend
```

Expected health response shape:

```json
{
  "status": "ok",
  "database": "connected"
}
```

If MongoDB is not configured, the backend still starts, but `/api/contact` returns a `503` until a database connection is available.

## Contact Flow

The contact form submits to `POST /api/contact`.

Messages are stored through the `Contact` Mongoose model when MongoDB is connected.

## Render Deployment

This repository includes a Render Blueprint in `render.yaml`.

The intended deployment model is:

1. `frontend/` as a Render Static Site
2. `backend/` as a Render Web Service

Important environment variables:

- Backend: `MONGODB_URI`
- Backend: `CLIENT_ORIGIN`
- Frontend: `VITE_API_BASE_URL`

Use the public backend URL as `VITE_API_BASE_URL` and the public frontend URL as `CLIENT_ORIGIN` after Render creates both services.
