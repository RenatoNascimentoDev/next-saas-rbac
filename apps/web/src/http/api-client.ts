import ky from 'ky'

export const api = ky.create({
  prefixUrl: 'https://shiny-capybara-xq4rqqg95jgfpgrx-3333.app.github.dev',
})
