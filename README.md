# docker-flask-react-client

Frontend client service for the [docker-flask-react](https://github.com/iyp-uk/docker-flask-react) project.

## Getting started

### Prerequisites

This project is a frontend for [docker-flask-react-users](https://github.com/iyp-uk/docker-flask-react-users) backend service, built on flask.

If you don't have it, go grab it.
 
### Run the users backend service
 
See instructions in [the ocker-flask-react-users project's readme](https://github.com/iyp-uk/docker-flask-react-users/blob/master/README.md).

### Run the front-end in docker

```console
$ docker build -t docker-flask-react-client .
$ docker run -p 3000:3000 -v $(pwd)/app:/usr/src/app --name react-client -e REACT_APP_USERS_SERVICE_URL=http://localhost:5000 docker-flask-react-client  
```
You can now browse http://localhost:3000 and see your app.

## Configure your IDE

If you have a modern IDE, such as Webstorm, you can configure the commands above so that you just have to click a button.
