# Om Prajapati Portfolio

A full-stack portfolio built with React, Express, and MongoDB. The project is designed to present work clearly, feel polished on every screen size, and handle contact submissions through a real backend instead of client-side hacks.

## Live Stack

- Frontend: React + Vite
- Backend: Express
- Database: MongoDB with Mongoose
- Deployment: Render Blueprint

## Highlights

- Responsive portfolio UI with a stronger visual system and motion-driven section reveals
- Backend-powered contact form with MongoDB persistence
- Input validation, basic rate limiting, and explicit CORS handling on the API
- Monorepo workspace structure for frontend and backend development
- Render-ready deployment configuration through `render.yaml`

## Project Structure

```text
frontend/   React portfolio application
backend/    Express API and MongoDB models
projectdocs/ implementation and deployment notes
render.yaml  Render Blueprint for frontend and backend deployment
```

## Local Development

1. Create a `.env` file in the repository root based on `.env.example`.
2. Set a valid `MONGODB_URI`.
3. Install dependencies:

```bash
npm install
```

4. Start the full stack:

```bash
npm run dev
```

Default local URLs:

- Frontend: `http://127.0.0.1:5173`
- Backend: `http://127.0.0.1:5000`

The frontend uses the Vite `/api` proxy locally, so you do not need `VITE_API_BASE_URL` for development.

## Validation

Build the frontend:

```bash
npm run build
```

Check backend health:

```bash
npm run health:backend
```

Expected response:

```json
{
  "status": "ok",
  "database": "connected"
}
```

## Contact API

The contact form submits to `POST /api/contact`.

The backend:

- validates and normalizes contact input
- rate limits repeated submissions
- stores messages in MongoDB

## Render Deployment

This repository is configured for Render using `render.yaml`.

Deployment model:

1. `frontend/` as a Static Site
2. `backend/` as a Web Service

Required Render environment variables:

- Backend:
  - `MONGODB_URI`
  - `CLIENT_ORIGIN`
- Frontend:
  - `VITE_API_BASE_URL`

## Notes

This repository contains project documentation in `projectdocs/` for implementation history and deployment tracking.
