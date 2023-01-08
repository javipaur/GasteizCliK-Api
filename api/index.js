import { Hono } from 'hono'
import leaderboard from '../db/leaderboard.json'
import farmaciasGuardia from '../db/farmaciasGuardia.json'

const app = new Hono()

app.get('/', (ctx) => {
  return ctx.json([
    {
      endopint: '/leaderboard',
      description: 'Returns the leaderboard'
    },
    {
      endopint: '/farmaciasGuardia',
      description: 'Returns the farmaciasGuardia'
    }
  ])
})
app.get('/leaderboard', (ctx) => {
  return ctx.json(leaderboard)
})

app.get('/farmaciasGuardia', (ctx) => {
  return ctx.json(farmaciasGuardia)
})

export default app
