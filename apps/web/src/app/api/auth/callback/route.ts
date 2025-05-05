import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { signInWithGithub } from '@/http/sign-in-with-github'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json(
      { message: 'Github OAuth  code was not found.' },
      { status: 400 },
    )
  }

  const { token } = await signInWithGithub({ code })

  const cookieStore = await cookies()
  cookieStore.set('token', token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7days
  })

  console.log('Original URL:', request.url)

  const redirectUrl = new URL(
    '/',
    'https://fictional-spork-49rq99pqx5vfjxqw-3000.app.github.dev',
  )
  return NextResponse.redirect(redirectUrl)
}
