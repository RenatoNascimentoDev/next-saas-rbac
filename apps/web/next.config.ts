import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'https://shiny-capybara-xq4rqqg95jgfpgrx-3000.app.github.dev/auth/sign-in',
      ],
    },
  },
}

export default nextConfig
