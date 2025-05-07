import { getCookie } from 'cookies-next'
import ky from 'ky'

export const api = ky.create({
  prefixUrl: 'https://fictional-spork-49rq99pqx5vfjxqw-3333.app.github.dev',
  hooks: {
    beforeRequest: [
      async (request) => {
        let token: string | undefined

        if (typeof window === 'undefined') {
          // Server-side
          const { cookies } = await import('next/headers')
          const serverCookies = await cookies()
          token = serverCookies.get('token')?.value
        } else {
          // Client-side
          token = getCookie('token') as string | undefined
        }

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
  },
})
