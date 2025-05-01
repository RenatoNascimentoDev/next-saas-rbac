import ky from 'ky'

export const api = ky.create({
  prefixUrl: 'https://fictional-spork-49rq99pqx5vfjxqw-3333.app.github.dev',
})
