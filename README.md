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

## Setup dev environment for logster

### Dependencies

- Docker
- Docker Compose
- node.js

### Clone the repository

```PowerShell
git clone <url or ssh>
e.g. git clone git@github.com:oscillate123/logster.git
```

### Node install

```PowerShell
npm install
```

If you want to run the node server from your environment you can install the node modules etc. But the point of Docker here is so you only need to run the node server inside of the docker container.

### Docker Compose

```PowerShell
docker-compose --file logster-compose.yml up --build
```

The docker compose file will build the `Dockerfile` in the repository. The final output of this command should look similar to this:

```Log
logster-database_1  | 2021-12-15T20:41:01.430664Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.0.27'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL.
logster-app_1       |
logster-app_1       | > logster@1.0.0 start
logster-app_1       | > node src/index.js
logster-app_1       |
logster-app_1       | Running app on 3000
```

- logster-app_1 is the web application (node.js container)
- logster-database_1 is the database application (mysql container)

### Verify

Windows PowerShell

```PowerShell
curl http://localhost:3000 -UseBasicParsing
```

Bash

```bash
curl http://localhost:3000
```

Or open `http://localhost:3000` in a browser

### Visual Studio Code Extensions

Export list of installed extensions

```Shell
# Windows
code --list-extensions | % { "code --install-extension $_" }
# Unix
code --list-extensions | xargs -L 1 echo code --install-extension
```

Generated list from my VS Code

```Shell
code --install-extension christian-kohler.npm-intellisense # npm syntax
code --install-extension christian-kohler.path-intellisense # path syntax
code --install-extension DavidAnson.vscode-markdownlint # markdown linter
code --install-extension dbaeumer.vscode-eslint # ESLint for JavaScript
code --install-extension eg2.vscode-npm-script # npm support
code --install-extension mikestead.dotenv # dotenv styling
code --install-extension ms-azuretools.vscode-docker # docker support
code --install-extension ms-python.python # python support
code --install-extension ms-python.vscode-pylance # python syntax
code --install-extension ms-vscode-remote.remote-containers # container support
code --install-extension ms-vscode.powershell # powershell support
code --install-extension PKief.material-icon-theme # icon theme styling
```

## Other Tools / Misc

- `https://ecotrust-canada.github.io/markdown-toc/`
