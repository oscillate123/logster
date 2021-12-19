# logster

- [logster](#logster)
  * [Setup dev environment for logster](#setup-dev-environment-for-logster)
    + [Dependencies](#dependencies)
    + [Clone the repository](#clone-the-repository)
    + [Node install](#node-install)
    + [create your .env files](#create-your-env-files)
    + [Docker Compose](#docker-compose)
    + [Verify](#verify)
    + [Visual Studio Code Extensions](#visual-studio-code-extensions)
  * [How Logster handles its database](#how-logster-handles-its-database)
    + [Sequelize](#sequelize)
  * [Other Tools / Misc / Sources](#other-tools---misc---sources)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Setup dev environment for logster

### Dependencies

- Docker
- Docker Compose
- node.js
  - Optional, node.js will run in the containers. The only thing you need to do is to be able to change files related to node.js.
    - i.e. `package.json`

### Clone the repository

```PowerShell
git clone <url or ssh>
e.g. git clone git@github.com:oscillate123/logster.git
```

### Node install

```PowerShell
npm install
```

If you want to run the node server from your environment you can install the node modules etc. But the point of Docker here is so you only need to run the node server inside of the docker container. So npm and node.js is not required on your system. Since it will be available in the docker container.

### create your .env files

Env files are environment configurations in file format. They are used by Docker-Compose for setting environment variables in the containers on start-up.
In order to use logster-compose.yml, you need to create:

- logster/.env/.db.env
  - this file is used for storing environment variables for the database container and the node.js container.
  - Link to why you need environment variables: [Mysql Docker Hub](https://hub.docker.com/_/mysql#Environment-Variables)
    - i.e., check the environment variables used in `logster/src/db/config/config.js`

.db.env example:

```bash
MYSQL_ROOT_PASSWORD=SuperSecret1234
MYSQL_DATABASE=database_dev
MYSQL_USER=dragonslayer2000
MYSQL_PASSWORD=Rockyou!
```

### Docker Compose

```PowerShell
docker-compose --file logster-compose.yml up --build
# docker-compose --file logster-compose.yml up --build -d
# -d is used for "detached mode", meaning it will run in the background
```

The docker compose file will build the `Dockerfile` in the repository.

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

Exported list of installed extensions

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

## How Logster handles its database

### Sequelize

Link to [Sequelize](https://sequelize.org)
Logster uses Sequelize to handle its database "state". So tables, configs, databases, etc, are defined as code and created on startup by Logster, if it doesn't exist.

- Connection to the database is stored in "config"
- The table structure is defined in the "models"
- The version handling between database and table structures are stored in "migrations"
- Example input data for each table is stored in "seeders"

- `sequelize-cli` is a nice tool to do database operations such as generating a model (aka table)
- `npx sequelize`
  - `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`
    - [Sequelize docs](https://sequelize.org/v5/manual/migrations.html#creating-first-model--and-migration-)

## Other Tools / Misc / Sources

- `https://ecotrust-canada.github.io/markdown-toc/`
- [Sequelize](https://sequelize.org/master/manual/migrations.html#installing-the-cli)
- [Bezkoder.com Blog on: node-js-express-sequelize-mysql](https://www.bezkoder.com/node-js-express-sequelize-mysql/)
- [Bezkoder.com Github on: node-js-express-sequelize-mysql](https://github.com/bezkoder/nodejs-express-sequelize-mysql)
