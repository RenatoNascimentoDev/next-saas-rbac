'use server'

import { redirect } from 'next/navigation'

export async function signInWithEmailAndPassword(
  prevState: any,
  data: FormData
) {
  const res = await fetch(
    'https://shiny-capybara-xq4rqqg95jgfpgrx-3000.app.github.dev'
  )
  const json = await res.json()

  if (!res.ok) {
    return { message: 'Please enter a valid email' }
  }

  redirect('/auth/sig-in')
}
