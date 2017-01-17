import koa from 'koa'
import middlewares from 'middlewares'
import { createLogger } from 'bunyan'

// logger

const log = createLogger({
  name: 'app',
  stream: process.stdout,
  level: 'info',
})

// app

const app = koa()

// mount

for (let m of middlewares()){
  app.use(m)
}

// bind

const PORT = process.env.PORT

app.listen(PORT)
log.info({port: PORT}, 'started app')
