# Phase 5 Security Cleanup

## Goal

Reduce obvious merge-time security and hygiene risks before the branch is merged.

## Changes

`.codex` is now ignored at the repository level and should be removed from Git tracking.

The contact API now validates trimmed input, checks email structure, enforces field length limits, and applies a simple in-memory rate limit.

The backend CORS configuration now supports explicit comma-separated origins and rejects unknown origins unless `*` is intentionally configured.

## Remaining Manual Step

Because `.codex` has already been committed, it must be removed from Git tracking with:

```bash
git rm --cached .codex
```

Then commit and push that cleanup.
