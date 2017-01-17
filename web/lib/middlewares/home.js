/**
  * Module dependencies.
  */
import route from 'koa-route'


export default route.get('*', function*(){
  this.body = '⌘ API ⌘\n'
})
