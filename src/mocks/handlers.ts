import { rest } from 'msw'

export const handlers = [
  rest.post('/inquiry', (req, res, ctx) => {
    console.log('Received POST request:', req.body)

    return res(
      ctx.delay(2000 + Math.round(Math.random() * 2000)),
      ctx.status(200),
      ctx.json({
        status: 'OK',
        data: req.body,
      })
    )
  })
]
