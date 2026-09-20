# MFP Iselto

Commercial website for multifunctionals, printers and document solutions.

Built with Next.js, React, TypeScript, Prisma and PostgreSQL, deployed on Vercel.

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
Set `DATABASE_URL` in Vercel for persistent lead storage. The public build does not require a live database connection at build time.