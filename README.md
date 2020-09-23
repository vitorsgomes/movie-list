## Access it in "production"

The application is being deployed using [vercel](https://vercel.com/) and can be accessed [here](https://movie-list-pi.vercel.app/).

## Needed configuration

The [omdb API](https://www.omdbapi.com/) is being used to fetch movies' information. OMDB only allow authenticated requests to their API. Because of that a key must be sent on the query params of the request.

Create a `.env` file in the root folder and add the following env variables:

- `REACT_APP_API_KEY`, it will inject the key on the calls to omdb API.
- `REACT_APP_API_URL`, the URL to the omdb API.

An example of the needed `.env` file is the [`.env.test`](.env.test).

## Available Scripts

In the project directory, you can run:

- `yarn build`: build the prod version of application
- `yarn start`: run the application in dev mode
- `yarn test`: run unit, integration and regression tests
- `yarn test:unit`: run unit tests
- `yarn test:unit:watch`: run unit tests in watch mode
- `yarn test:integration`: run integration tests with cypress
- `yarn test:regression`: run visual regression tests with cypress

## Future Improvements & known issues

- Add a loading state to movie list and details page
- Add throttling to `search` and `load more` buttons
- The application should check if the movie has a poster before rendering it
- Only deploy application if the pipeline pass
