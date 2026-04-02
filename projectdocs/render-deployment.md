# Render Deployment Plan

## Verified Platform Fit

Render can host both parts of this repository, but they should be deployed as two separate services from the same monorepo:

1. A Static Site for `frontend/`
2. A Web Service for `backend/`

This matches Render's current service model for static frontends and Node/Express apps, and Render supports monorepo root directories through `render.yaml`.

Sources used:

- Render Static Sites docs: https://render.com/docs/static-sites
- Render Web Services docs: https://render.com/docs/web-services
- Render Monorepo Support docs: https://render.com/docs/monorepo-support
- Render Blueprint YAML reference: https://render.com/docs/blueprint-spec

## Files Added

`render.yaml` was added at the repository root.

It defines:

- `om-portfolio-api` as a Node web service rooted at `backend/`
- `om-portfolio-frontend` as a static site rooted at `frontend/`

## Important Gotchas

The backend must bind to `0.0.0.0` on Render. The code now supports that automatically when `RENDER` is present or when `HOST` is explicitly set.

The frontend cannot use Render's private network host for browser API calls. It needs the backend's public Render URL.

The frontend static site service does not currently accept the `plan: free` setting in this Blueprint context for this workspace, so the static service intentionally omits `plan` and uses Render's default supported plan for that service type.

Because Render Blueprint interpolation does not provide a safe public browser URL for this static-to-web-service case, `VITE_API_BASE_URL` must be set manually in Render after the backend service URL is known.

For the same reason, `CLIENT_ORIGIN` must also be set manually on the backend to the frontend's final Render URL.

## Deployment Order

1. Push the repo with `render.yaml`.
2. Create the Blueprint on Render from the repository.
3. Let Render provision both services.
4. Open the backend service and copy its public Render URL.
5. Set `VITE_API_BASE_URL` on the frontend service to that backend URL.
6. Open the frontend service and copy its public Render URL.
7. Set `CLIENT_ORIGIN` on the backend service to that frontend URL.
8. Redeploy both services.
9. Test the frontend contact form against the deployed backend.

## What I Did Not Do

I did not hardcode any Render URL into the repository because that would be wrong before Render actually assigns the service URLs.

I did not fake a one-service deployment because Render's documented service model does not support treating this React static site plus Express backend as one native service without changing the architecture.
