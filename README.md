# SEAN Stack for API-based apps

SEAN stands for Sequelize, ExpressJS, AngularJS and NodeJS.

- For NodeJS >= 6.0 only.
- Easily configurable via environment variables (or using [dotenv](https://github.com/motdotla/dotenv))
- Uses cluster for taking advantage of multi-core systems
- Lean clean separation from front-end.
- [JSON Web Tokens](https://jwt.io/) available for API authentication
- Mocha + Chai HTTP for automated API testing and TDD.
- [Sequelize](http://sequelizejs.com/) as ORM for supporting several RDBMS dialects.

## Configuration

The stack can be configured using the a few environment variables. In the event that modifying environment variables is difficult (such as on Windows), `dotenv` is enabled and you can create a `.env` file on the application root and place the variables in the file.

| Variable | Type | Default | Description |
| --- | --- | --- | --- |
| `NODE_ENV` | String | `'development'` | Description of the current runtime environment. On production, it should be set to `'production'` instead. |
| `PORT` | Integer, 0 - 65535 | 3000 | The port number that the web server should listen to for incoming requests. |
| `DB_SYNC` | Boolean | `false` | Whether Sequelize should synchronize models to database before starting the application. |
| `DB_NAME` | String | `null` | The name of the database. |
| `DB_USER` | String | `null` | The username for the database connection. |
| `DB_PASS` | String | `null` | The password for the database connection. |
| `DB_CONFIG` | JSON String | `null` | The configuration object accepted by Sequelize. You can configure what flavour of database to use in this parameter. |
| `LOG_FORMAT` | String | `'dev'` | The log format to print using Morgan for HTTP requests and responses. See https://github.com/expressjs/morgan |
| `LOG_SILENT` | Boolean | `false` | Whether request logs should be printed. |
| `HTTPS_ENABLE_REDIRECT` | Boolean | `false` | Whether switch the protocol for HTTPS if the current traffic is on HTTP.
| `SINGLE_THREAD` | Boolean | `false` | Whether or not to use a single thread. |

## License
Code released licensed under MIT License.
