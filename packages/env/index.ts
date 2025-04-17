import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SERVER_PORT: z.coerce.number().default(3333),
    DATABASE_URL: z.string().url(),

    JWT_SECRET: z.string(),

    GITHUB_OAUTH_CLEINT_ID: z.string(),
    GITHUB_OAUTH_CLEINT_SECRET: z.string(),
    GITHUB_OAUTH_CLEINT_REDIRECT_URI: z.string().url(),
  },
  client: {},
  shared: {},
  runtimeEnv: {
    SERVER_PORT: process.env.SERVER_PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    GITHUB_OAUTH_CLEINT_ID: process.env.GITHUB_OAUTH_CLEINT_ID,
    GITHUB_OAUTH_CLEINT_SECRET: process.env.GITHUB_OAUTH_CLEINT_SECRET,
    GITHUB_OAUTH_CLEINT_REDIRECT_URI:
      process.env.GITHUB_OAUTH_CLEINT_REDIRECT_URI,
  },
  emptyStringAsUndefined: true,
})
