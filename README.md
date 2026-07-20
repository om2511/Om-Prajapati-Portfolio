# Om Prajapati Portfolio

This repository contains the active React frontend and Express backend for Om Prajapati's portfolio, plus the archived static implementation preserved in `legacy-static/`.

## Stack

- Frontend: React + Vite + Tailwind CSS
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

If MongoDB is not configured, the backend still starts, but `/api/contact` returns a `503` until a database connection is available.

## Contact Flow

The contact form submits to `POST /api/contact`.

Messages are stored through the `Contact` Mongoose model when MongoDB is connected.

## Render Deployment

This repository includes a Render Blueprint in `render.yaml`.

The intended deployment model is:

Required Render environment variables:

Important environment variables:

- Backend: `MONGODB_URI`
- Backend: `CLIENT_ORIGIN`
- Frontend: `VITE_API_BASE_URL`

Use the public backend URL as `VITE_API_BASE_URL` and the public frontend URL as `CLIENT_ORIGIN` after Render creates both services.
