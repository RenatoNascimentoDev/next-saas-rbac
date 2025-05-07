import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectUrl =
    'https://fictional-spork-49rq99pqx5vfjxqw-3000.app.github.dev'

  ;(await cookies()).delete('token')

  return NextResponse.redirect(redirectUrl)
}
