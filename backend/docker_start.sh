docker run -it --rm --name my-running-script -e LANG=C.UTF-8 -v "$PWD":/backend -w /backend -p 3002:3002 she bundle exec rails server -p 3002 -b '0.0.0.0'
