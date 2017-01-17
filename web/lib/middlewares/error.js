/**
  * Module dependencies.
  */
import bunyan from 'bunyan'

// logger

const log = bunyan.createLogger({
  name: 'error',
  stream: process.stdout,
  level: 'error',
})

export default function *(next) {

  try {
    yield next
  } catch (err) {
    log.error(err.stack)
    this.status = err.status || 500
    this.body = err.message
    // this.app.emit('error', err, this)
  }

}
