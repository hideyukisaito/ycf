import { rest } from 'msw'

export const handlers = [
  rest.post('/inquiry', (req, res, ctx) => {
    console.log('Request body:', req.body)

    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json({
        status: 'OK',
      })
    )
  })
]
