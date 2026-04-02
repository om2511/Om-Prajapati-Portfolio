# Portfolio Monorepo

This repository now contains two parallel implementations:

1. The archived static portfolio in `legacy-static/`.
2. The new React frontend and Express backend migration in `frontend/` and `backend/`.

The active application path is the React plus Express workspace.

## Stack

- Frontend: React + Vite
- Backend: Express
- Database: MongoDB with Mongoose for contact messages
- Workspace: npm workspaces at the repository root

## Structure

```text
frontend/   React portfolio application
backend/    Express API and MongoDB models
legacy-static/ archived HTML/CSS/JS portfolio
projectdocs/ migration notes and implementation tracking
render.yaml  Render Blueprint for deploying frontend and backend on Render
```

## Local Development

1. Create a `.env` file in the repository root based on `.env.example`.
2. Set a valid `MONGODB_URI` if you want contact submissions to persist.
3. Make sure a MongoDB server is actually running on that URI before starting the backend.
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

If `MONGODB_URI` points to `mongodb://localhost:27017/portfolio` but MongoDB is not running locally, backend startup fails with `ECONNREFUSED 127.0.0.1:27017`.

## Contact Flow

The old client-side EmailJS flow is not used in the new React app.

The new contact form submits to `POST /api/contact`.

Messages are stored through the `Contact` Mongoose model when MongoDB is connected.

## Current Limitation

There is no active root deployment configuration for the new full-stack setup yet.

The old static `vercel.json` was archived with the legacy site because reusing it for the React plus Express stack would be incorrect.

Deployment still needs an explicit hosting decision instead of a guessed configuration.

## Render Deployment

This repository now includes a Render Blueprint in `render.yaml`.

The intended Render model is:

1. `frontend/` as a Render Static Site
2. `backend/` as a Render Web Service

Important:

- The backend needs a real `MONGODB_URI`.
- The frontend needs `VITE_API_BASE_URL` set to the backend's public Render URL.
- The backend needs `CLIENT_ORIGIN` set to the frontend's public Render URL.

Those two public URLs must be filled in after Render creates the services, because they are not known ahead of time.
