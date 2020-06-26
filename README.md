This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Built with

1. Node 12.18.1
2. Yarn 1.22.4
3. ReactJS
4. GitHub REST API v3
5. VS Code, ESLint and Prettier

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install the dependencies required for the project.

### `yarn start`

Runs the app

### `yarn test`

Runs the tests

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn lint`

Provides the lint warnings and errors.

### `yarn lint:fix`

Automatically fix the linting errors.

Note: Ensure yarn lint is run again to make sure all the errors are fixed.

### `yarn format`

Running this script will ensure all the files follow prettier rules.

Note: Instead of using configuration .prettierrc file, added config to package.json.

### Code Heirarchy

```
src
    | -> components
        | -> Home.js
        | -> SearchBar.js
        | -> Repositories.js
        | -> Repository.js
        | -> RepositoryHeader.js
| -> services
    | -> api.js
    | -> repositories.js
| -> helpers
    | -> btnHelper.js
| -> App.js

```

Note: Application code hierarchy

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Technical decisions

- Initial idea was to create UI responsive components using styled-components library and flexbox design. Investigation showed react-bootstrap provides the components i need out of the box. Trade off i took is a bigger bundle to time it takes to create css layout and components.
- Preferred axios due to ease of use and readability. It has comptability with most of the browser versions out there. One of the interesting features it provides is [cancelling requests using tokens](https://github.com/axios/axios#cancellation). I thought of using this feature if i fire the request to api onChange of the input. In the end i didn't as i triiger only one API request during the form submission.
- Initially thought of adding a routing functionality. Decided against the router as i requirement is around listing the repositories.

---

Developed by Pranava S Balugari. (Frontend assignment)
