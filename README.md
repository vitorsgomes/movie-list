This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Needed configuration

The [ombd API](http://www.omdbapi.com/) is being used to fetch movies' information. OMDB only allow authenticated requests to their API. Because of that a key must be sent on the query params of the request.

Create a `.env` file in the root folder and add your APP key in the variable `REACT_APP_API_KEY=`. It will inject the key on the calls to ombd API.

## Available Scripts

In the project directory, you can run:

- `npm build`: build the prod version of application
- `npm start`: run the application in dev mode
- `npm run test`: run unit and integration tests
- `npm run test:unit`: run unit tests
- `npm run test:unit:watch`: run unit tests in watch mode
- `npm run test:integration`: run integration tests with cypress
