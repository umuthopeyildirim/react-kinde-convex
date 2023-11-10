# Kinde Convex Custom Auth

This is a custom [Kinde](https://kinde.com/) auth for [Convex](https://www.convex.dev/).

## Setup

Get your Kinde credentials from the kinde application (make sure you created a React single page app) and paste it to env file.

```env
VITE_KINDE_CLIENT_ID=your_kinde_client_id
VITE_KINDE_DOMAIN=https://your_subdomain.kinde.com
VITE_KINDE_REDIRECT_URL=http://localhost:3000
VITE_KINDE_LOGOUT_URL=http://localhost:3000
VITE_KINDE_AUDIENCE="convex"

# Deployment used by `pnpm convex dev`
CONVEX_DEPLOYMENT=
VITE_CONVEX_URL=
```

## Usage

Open a terminal and run:

```bash
pnpm convex dev
```

Contunue with the instructions or check out this [guide](https://docs.convex.dev/quickstart/react).

Open another terminal and run:

```bash
pnpm start
```
