FROM ruby:2.4
RUN apt-get update -qq && apt-get install -y build-essential libmysqlclient-dev
RUN mkdir /backend
WORKDIR /backend
ADD Gemfile /backend/Gemfile
ADD Gemfile.lock /backend/Gemfile.lock
RUN bundle install
ADD . /backend
EXPOSE 3002
