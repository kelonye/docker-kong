FROM node:5.9.1

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/project && cp -a /tmp/node_modules /opt/project

WORKDIR /opt/project
