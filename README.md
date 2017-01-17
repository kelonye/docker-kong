# Kong, Koa demo app

```bash

make # run stack

docker-compose run --rm web env # copy WEB_PORT

api=WEB_PORT make add-api

make test-api

```

Result should be:

```
HTTP/1.1 200 OK
Date: Tue, 17 Jan 2017 11:17:57 GMT
Content-Type: text/plain; charset=utf-8
Content-Length: 12
Connection: keep-alive
x-request-id:
X-Kong-Upstream-Latency: 4
X-Kong-Proxy-Latency: 0
Via: kong/0.9.7

⌘ API ⌘
```
