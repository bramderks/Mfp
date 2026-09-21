# MFP Iselto

Commercial website for multifunctionals, printers and document solutions.

Built with Next.js, React and TypeScript, with Neon PostgreSQL for lead storage and deployed on Vercel.

## Public routes
- `/`
- `/producten`
- `/producten/[slug]`
- `/oplossingen`
- `/diensten`
- `/downloads`
- `/offerte`
- `/contact`

## Environment
Set `DATABASE_URL` and `RESEND_API_KEY` in Vercel for persistent lead storage and email notifications. The public build does not require a live database connection at build time.
