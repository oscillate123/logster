# create your app-type.env file with variables for each environment

to re-use the logster-compose.yml files specified .env files. Create:

- logster/.env/.app.env
  - this file is used for storing environment variables for the application containers

- logster/.env/.db.env
  - this file is used for storing environment variables for the database containers
  - Link to why you need environment variables: [Mysql Docker Hub](https://hub.docker.com/_/mysql#Environment-Variables)
