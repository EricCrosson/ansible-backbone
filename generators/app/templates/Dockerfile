FROM hamroctopus/ansible:1.0.0
MAINTAINER <%= name %> <<%= email %>>

ENV DEBIAN_FRONTEND=noninteractive

RUN mkdir -p ansible
COPY site.yml /ansible/site.yml
COPY defaults /ansible/defaults
COPY tasks /ansible/tasks
COPY vars /ansible/vars

ARG PLATFORM

RUN apt-get update \
&& ansible-playbook -i localhost, \
-e "platform=${PLATFORM} skip_tools=true" /ansible/site.yml \
&& rm -rf /ansible \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*

ENTRYPOINT []

ARG VERSION
ARG RELEASE_DATE

LABEL vendor="<%= name %>" \
version="${VERSION}" \
release_date="${RELEASE_DATE}"
