# Kinde Convex Custom Auth

Currently not working, but it's a start. 😄

This is a custom kinde auth for [Convex](https://www.convex.dev/).

## Setup

Get your Kinde credentials from the kinde application (make sure you created a React single page app) and paste it to env file.

```env
VITE_KINDE_CLIENT_ID=your_kinde_client_id
VITE_KINDE_DOMAIN=https://your_subdomain.kinde.com
VITE_KINDE_REDIRECT_URL=http://localhost:3000
VITE_KINDE_LOGOUT_URL=http://localhost:3000

# Deployment used by `pnpm convex dev`
CONVEX_DEPLOYMENT=
VITE_CONVEX_URL=
```

## Usage

Open a terminal and run:

```bash
pnpm convex dev
```

Open another terminal and run:

```bash
pnpm start
```

## Curent Issues

```json
{
  "type": "AuthError",
  "error": "No auth provider found matching the given token",
  "baseVersion": 0
}
```
