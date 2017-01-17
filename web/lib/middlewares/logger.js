import { createLogger } from 'bunyan'

const log = createLogger({
  name: 'request',
})

export default function*(next) {

  const id = this.request.get('x-request-id')
  const opts = {
    method: this.method,
    path: this.path,
  }

  for (let k in this.query){
    if (this.query.hasOwnProperty(k)){
      if (-1 === ['token'].indexOf(k)){
        opts[`q_${k}`] = this.query[k]
      }
    }
  }

  this.set('x-request-id', id)

  this.logc = log.child(opts)
  const time = process.hrtime()

  this.logc.info('<--')

  yield *next

  const diff = process.hrtime(time)
  this.logc.info({duration: diff[0] * 1e3 + diff[1] * 1e-6}, '-->')

}
