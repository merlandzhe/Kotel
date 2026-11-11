# НАДО

Marketplace built around buyer requests: buyers describe what they need, sellers respond with offers, and buyers compare options.

## Stack
- Next.js 15 / React 19 / TypeScript
- Tailwind CSS
- Supabase (planned: Auth, Postgres, Storage, Realtime)
- Vercel deployment

## Getting started
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Current status
The first commit contains the responsive Russian landing page and visual demo data. Authentication, request publishing, seller offers, messaging, moderation, and database policies are not connected yet.

## Environment
Supabase public URL and anon key will be added after the project schema and access policies are prepared. Never commit service-role keys.