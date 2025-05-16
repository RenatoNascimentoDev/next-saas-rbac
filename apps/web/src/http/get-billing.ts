import { api } from './api-client'

interface GetBillingResponse {
  billing: {
    projects: {
      amount: number
      unit: number
      price: number
    }
    seats: {
      amount: number
      unit: number
      price: number
    }
    total: number
  }
}

export async function getBilling(org: string) {
  const result = await api
    .get(`organizations/${org}/billing`, {
      next: {
        tags: ['organization'],
      },
    })
    .json<GetBillingResponse>()

  return result
}
