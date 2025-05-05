'use server'

import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  const githubSignInURL = new URL('login/oauth/authorize', 'https://github.com')

  githubSignInURL.searchParams.set('client_id', 'Ov23liCvSeXJrWHTAC0d')
  githubSignInURL.searchParams.set(
    'redirect_uri',
    'https://next-saas-rbac-web-vt3e.vercel.app/api/auth/callback',
  )
  githubSignInURL.searchParams.set('scope', 'user')

  redirect(githubSignInURL.toString())
}
