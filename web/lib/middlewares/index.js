import bodyParser from 'koa-bodyparser'
import error from './error'
import logger from './logger'
import home from './home'

export default function*(){

  yield error
  yield logger
  yield bodyParser()
  yield home

}
