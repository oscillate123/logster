# logster


## Setup dev environment for logster

### Dependencies
* Docker
* Docker Compose
* node.js


### Clone the repository
```
git clone <url or ssh>
e.g. git clone git@github.com:oscillate123/logster.git
```


### Node install
```
npm install
```
If you want to run the node server from your environment you can install the node modules etc. But the point of Docker here is so you only need to run the node server inside of the docker container.


### Docker Compose
```
docker-compose --file logster-compose.yml up --build
```
The docker compose file will build the `Dockerfile` in the repository. The final output of this command should look similar to this:

```
logster-database_1  | 2021-12-15T20:41:01.430664Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.0.27'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL.
logster-app_1       |
logster-app_1       | > logster@1.0.0 start
logster-app_1       | > node src/index.js
logster-app_1       |
logster-app_1       | Running app on 3000
```
* logster-app_1 is the web application (node.js container)
* logster-database_1 is the database application (mysql container)

### Verify
Windows PowerShell
```
curl http://localhost:3000 -UseBasicParsing
```
Bash
```
curl http://localhost:3000
```
Or open http://localhost:3000 in a browser