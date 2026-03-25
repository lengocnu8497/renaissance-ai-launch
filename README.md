# Rena Aesthetic Lab — Launch Site

Waitlist and pre-order landing page for [Rena Aesthetic Lab](https://renaesthetic.com), an AI-powered cosmetic procedure concierge. Collecting founding member pre-orders at 20% off — payment is charged immediately at checkout, no trial period.

## Stack

- **Frontend** — Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion
- **Backend** — Supabase (Postgres + Edge Functions)
- **Payments** — Stripe Checkout (subscription mode, immediate charge, no trial)
- **Testing** — Vitest + React Testing Library (components), Deno test (edge functions)

## Prerequisites

- Node.js 18+ and npm
- [Deno](https://deno.land) (for edge function tests only) — `brew install deno`
- [Supabase CLI](https://supabase.com/docs/guides/cli) (for deploying edge functions) — `brew install supabase/tap/supabase`

## Local development

```sh
# 1. Install dependencies
npm install

# 2. Copy env vars (fill in your Supabase credentials)
cp .env.example .env

# 3. Start the dev server
npm run dev
# → http://localhost:5173
```

### Environment variables

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/publishable key |

The `STRIPE_SECRET_KEY` lives as a Supabase Edge Function secret — it is **never** in `.env`.

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at http://localhost:5173 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run component tests (Vitest, single run) |
| `npm run test:watch` | Run component tests in watch mode |
| `npm run test:coverage` | Run component tests with coverage report |
| `npm run test:edge` | Run edge function unit tests (requires Deno) |
| `npm run test:e2e` | Run Stripe integration tests against test API (requires Deno + test key) |

## Testing

### Component tests

Uses Vitest + React Testing Library. No external services needed.

```sh
npm test
```

Tests live in `src/components/__tests__/`. Currently covers:
- `PricingSection` — rendering, happy paths, loading state, error handling

### Edge function unit tests

Mocks the Stripe client — no network calls, no API key needed.

```sh
npm run test:edge
```

### Stripe E2E integration tests

Hits the real Stripe test API. Creates actual checkout sessions (no charges in test mode).

```sh
STRIPE_SECRET_KEY=sk_test_... npm run test:e2e
```

Requires a **test mode** key (`sk_test_...`). The suite will refuse to run with a live key.
Sessions created can be inspected at https://dashboard.stripe.com/test/checkout/sessions.

## Supabase edge functions

### Deploy

```sh
# Deploy a single function
supabase functions deploy create-checkout --project-ref gqporfhogzyqgsxincbx
supabase functions deploy stripe-webhook --project-ref gqporfhogzyqgsxincbx
```

### Set secrets

```sh
supabase secrets set STRIPE_SECRET_KEY=sk_test_... --project-ref gqporfhogzyqgsxincbx
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_... --project-ref gqporfhogzyqgsxincbx
```

### Functions

| Function | Auth | Description |
|---|---|---|
| `create-checkout` | None | Creates a Stripe Checkout session for the chosen founding member plan |
| `stripe-webhook` | Stripe signature | Handles `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted` — writes to `preorders` table |

## Going to production (test → live keys)

### 1. Create live webhook in Stripe Dashboard

Go to **Developers → Webhooks → Add endpoint** and configure:

- **URL:** `https://gqporfhogzyqgsxincbx.supabase.co/functions/v1/stripe-webhook`
- **Events to listen for:**
  - `checkout.session.completed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`

Copy the `whsec_` signing secret shown after creation — you'll need it in step 3.

### 2. Recreate the 3 plans in live mode

The price IDs in `supabase/functions/create-checkout/index.ts` (`FOUNDING_PRICES`) are test-mode prices and won't work in live mode. In the Stripe Dashboard, switch to **Live mode** and recreate the Silver, Gold, and Annual subscription prices. Then update the file:

```ts
// supabase/functions/create-checkout/index.ts
export const FOUNDING_PRICES: Record<string, { priceId: string; name: string }> = {
  silver: { priceId: "price_live_SILVER_ID", name: "Silver Founding Member" },
  gold:   { priceId: "price_live_GOLD_ID",   name: "Gold Founding Member"   },
  annual: { priceId: "price_live_ANNUAL_ID", name: "Annual Founding Member" },
};
```

### 3. Swap secrets and redeploy

```sh
supabase secrets set \
  STRIPE_SECRET_KEY=sk_live_YOUR_KEY_HERE \
  STRIPE_WEBHOOK_SECRET=whsec_YOUR_PROD_SECRET_HERE \
  --project-ref gqporfhogzyqgsxincbx

supabase functions deploy create-checkout --project-ref gqporfhogzyqgsxincbx
supabase functions deploy stripe-webhook --project-ref gqporfhogzyqgsxincbx
```

> **Note:** The `VITE_SUPABASE_PUBLISHABLE_KEY` in `.env` must be the **legacy anon JWT key** (starts with `eyJ`), not the `sb_publishable_` format key. The edge function gateway requires a valid JWT for authorization.

## Deployment

The frontend is a static Vite build — deploy `dist/` to any static host (Vercel, Netlify, etc.).

```sh
npm run build
# deploy dist/ to your host
```
