FROM centos:7
MAINTAINER Marco Palladino, marco@mashape.com

ENV KONG_VERSION 0.9.7

RUN yum install -y wget https://cl.ly/193W0N1X2p0W/download/kong-0.10.0rc2fixssl.el7.noarch.rpm && \
    yum clean all

RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.1.3/dumb-init_1.1.3_amd64 && \
    chmod +x /usr/local/bin/dumb-init

COPY docker-entrypoint.sh /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 8000 8443 8001 7946
CMD ["kong", "start"]