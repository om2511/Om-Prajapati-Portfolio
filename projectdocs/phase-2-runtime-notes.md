# Phase 2 Runtime Notes

## What Was Fixed

The frontend now uses a Vite development proxy for `/api` requests, so local development does not require a hardcoded frontend API base URL.

The backend now loads `.env` from the repository root robustly, binds to `127.0.0.1` by default, and exposes database state through `/api/health`.

The README now describes the actual monorepo instead of the legacy static site.

## What Was Verified

Frontend production build passed.

Backend startup was verified outside the sandbox on `127.0.0.1:5000`.

`GET /api/health` returned:

```json
{"status":"ok","database":"disconnected"}
```

`POST /api/contact` returned the expected message when MongoDB was not configured:

```json
{"message":"MongoDB is not connected. Set MONGODB_URI and start the backend with a reachable database."}
```

## Remaining Work

Create a real `.env` file in the repository root.

Provide a valid `MONGODB_URI`.

Run `npm run dev`.

Re-test `POST /api/contact` with MongoDB connected and confirm a `201` response.

## Deployment Limitation

The root `vercel.json` is still from the old static site path and should not be treated as the deployment definition for this full-stack setup.

Deployment should be decided explicitly instead of guessed. The likely clean options are separate frontend and backend deployments from the same repository, or a different full-stack host for the backend.
