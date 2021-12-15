# logster

- [logster](#logster)
    + [Setup dev environment for logster](#setup-dev-environment-for-logster)
      - [Dependencies](#dependencies)
      - [Clone the repository](#clone-the-repository)
      - [Node install](#node-install)
      - [Docker Compose](#docker-compose)
      - [Verify](#verify)
      - [Visual Studio Code Extensions](#visual-studio-code-extensions)
    + [Other Tools / Misc](#other-tools---misc)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>



### Setup dev environment for logster


#### Dependencies
* Docker
* Docker Compose
* node.js



#### Clone the repository
```
git clone <url or ssh>
e.g. git clone git@github.com:oscillate123/logster.git
```



#### Node install
```
npm install
```
If you want to run the node server from your environment you can install the node modules etc. But the point of Docker here is so you only need to run the node server inside of the docker container.



#### Docker Compose
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



#### Verify
Windows PowerShell
```
curl http://localhost:3000 -UseBasicParsing
```
Bash
```
curl http://localhost:3000
```
Or open http://localhost:3000 in a browser



#### Visual Studio Code Extensions
Export list of installed extensions
```
# Windows
code --list-extensions | % { "code --install-extension $_" }
# Unix
code --list-extensions | xargs -L 1 echo code --install-extension
```
Generated list from my VS Code
```
code --install-extension christian-kohler.npm-intellisense
code --install-extension christian-kohler.path-intellisense
code --install-extension DavidAnson.vscode-markdownlint
code --install-extension eg2.vscode-npm-script
code --install-extension mikestead.dotenv
code --install-extension ms-azuretools.vscode-docker
code --install-extension ms-python.python
code --install-extension ms-python.vscode-pylance
code --install-extension ms-vscode-remote.remote-containers
code --install-extension ms-vscode.powershell
code --install-extension PKief.material-icon-theme
```
I will most likely add ESLint for JavaScript linting, but haven't implemented that, yet.



### Other Tools / Misc
- https://ecotrust-canada.github.io/markdown-toc/
