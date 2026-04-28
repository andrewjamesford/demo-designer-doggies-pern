# Dependency Migration Review

## Plan

- [x] Inventory current client and server dependencies and identify latest npm versions.
- [x] Review the codebase for likely upgrade breakpoints and note required compatibility changes.
- [x] Upgrade dependencies in `client` and `server`, including lockfiles.
- [x] Run lint, tests, and build steps; fix regressions introduced by upgrades.
- [x] Summarize review findings, migration changes, and remaining risks.

## Review

- In `server/middleware/queryParamValidationMiddleware.js`, invalid query parameters still return HTTP 200 instead of a 4xx response. That is a behavior bug independent of the dependency migration.
- Server API tests are largely `test.todo(...)`, so the backend upgrade verification is weaker than the client verification.
- The client is now on Vite/Vitest instead of CRA/Jest, and the updated test run completes without the previous React `act(...)` warning noise.
