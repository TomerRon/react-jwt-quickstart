# react-jwt-quickstart

This repository contains boilerplate code to get started on a full-stack web application built with Express, React, PostgreSQL, Passport and JSON Web Token.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Clone this repository:

```
git clone https://github.com/TomerRon/react-jwt-quickstart
cd react-jwt-quickstart
```

Install the required node modules:

```
npm i
```

### Setting it up

Create a file called `.env` in the root folder and set your environment variables:

```
$ touch .env
```

```
# .env: (you should generate your own keys)

JWT_SECRET=abcdef12345678
SESSION_SECRET=zyxwvuts87654321
```

Configure the database:

```
# /config/config.json:

"development": {
    "username": "your_db_username",
    "password": "your_db_password",
    "database": "your_db_name",
    "host": "localhost",
    "dialect": "postgres",
    "logging": false
}
```

Finally, run the database migrations:

```
$ node_modules/.bin/sequelize db:migrate
```

### Running the tests

```
$ npm test
```

### Running the app

In a terminal window, run `webpack` to compile the React app. `webpack` in watch mode will recompile your React app whenever it changes:

```
$ webpack
```

In another terminal window, run `npm start` to start the Express server. `nodemon` will recompile the Express app whenever it changes:

```
$ npm start
```

## Built With

* [Node.js](https://nodejs.org)
* [Webpack](https://webpack.js.org/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org//)
* [Sequelize](https://github.com/sequelize/sequelize) + [Sequelize CLI](https://github.com/sequelize/cli) + PostgreSQL
* [Passport](http://www.passportjs.org/) authentication
* [Mocha](https://mochajs.org/) / [Chai](http://www.chaijs.com/) tests

## File structure

```bash
├── client              # React app
│   └── src
│       ├── components          # Presentational components
│       ├── containers          # Container components
│       ├── modules
│       │   └── Auth.js             # Authentication module
│       ├── app.jsx             # React app entry point
│       └── routes.js           # React Router routes
├── config
│   └── config.json         # database configuration
├── migrations          # database migrations
├── models              # model definitions for Sequelize
├── server              # Express API and authentication
├── test                # Mocha tests
├── .env                # environment variables
├── LICENSE.md
├── README.md
├── index.js            # Express app entry point
├── package.json
└── webpack.config.js   # Webpack configuration
```

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
