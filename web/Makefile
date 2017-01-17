default:
	@NODE_PATH=$NODE_PATH:lib:/tmp/node_modules NODE_ENV='development' /tmp/node_modules/.bin/supervisor -q -w lib -e 'js' -x node bin/run | /tmp/node_modules/.bin/bunyan -o short

.PHONY: default
