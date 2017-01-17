PROJECT=kong-sample-app

default:
	@docker-compose -p $(PROJECT) up

build:
	@docker-compose -p $(PROJECT) build

add-api:
	@curl -i -X POST \
  --url http://localhost:8001/apis/ \
  --data 'name=api' \
  --data 'upstream_url=$(api)' \
  --data 'request_host=api.com'

test-api:
	@curl -i -X GET \
  --url http://localhost:8000/ \
  --header 'Host: api.com'

.PHONY: build default
