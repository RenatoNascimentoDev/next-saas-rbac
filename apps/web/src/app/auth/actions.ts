'use server'

import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  const githubSignInURL = new URL('login/oauth/authorize', 'https://github.com')

  githubSignInURL.searchParams.set('client_id', 'Ov23liTyQqR9lxGE62bG')
  githubSignInURL.searchParams.set(
    'redirect_uri',
    'https://fictional-spork-49rq99pqx5vfjxqw-3000.app.github.dev/api/auth/callback'
  )
  githubSignInURL.searchParams.set('scope', 'user')

  redirect(githubSignInURL.toString())
}
