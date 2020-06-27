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

For simplicity purposes used the following structure

```
src
    | -> components
        | -> Home.js
        | -> SearchBar.js
        | -> Repositories.js
        | -> Repository.js
        | -> RepositoryHeader.js
        | -> Error.js
| -> services
    | -> repositories.js
| -> helpers
    | -> btnHelper.js
| -> App.js

```

Another code structure that i would like to see is based on what API offers

For e.g. Search API offers below functions.

```
Search repositories
Search commits
Search code
Search issues and pull requests
Search users
Search topics
Search labels

```

So heirarchy structure could have been like below.

```
src
    | -> components
        |-> Search
            |-> Repository
                | -> Home.js
                | -> SearchBar.js
                | -> Repositories.js
                | -> Repository.js
                | -> RepositoryHeader.js
                | -> Error.js
            |-> Commit
                |-> Files related to this funciton
            |-> Code
                |-> Files related to this function
            |-> Issues
                |-> Files related to this function
            |-> etc...
| -> services
    | -> repositories.js
    | -> code.js
    | -> commits.js
    | -> etc...
| -> helpers
| -> App.js

```

Note: Application code hierarchy

### How to use

    Clone this repository
    $ git clone https://github.com/elitenomad/git-repos-search

    Go into the repository
    $ cd git-repos-search

    Install dependencies
    $ yarn install

    Run the app
    $ yarn start

    Run the test
    $ yarn test

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### Technical decisions

- The Search API has a custom rate limit. For requests using Basic Authentication, OAuth, or client ID and secret, we can make up to 30 requests per minute. For unauthenticated requests which is the case with the app, the rate limit allows you to make up to 10 requests per minute. (User gets 'API rate limit exceeded' error)
- Initial idea was to create UI responsive components using styled-components library and flexbox design. Investigation showed react-bootstrap provides the components i need out of the box. Trade off i took is a bigger bundle to time it takes to create css layout and components.
- Preferred axios due to ease of use and readability. It has comptability with most of the browser versions out there. One of the interesting features it provides is [cancelling requests using tokens](https://github.com/axios/axios#cancellation). I thought of using this feature if i fire the request to api onChange of the input. In the end i didn't as i triiger only one API request during the form submission.
- Initially thought of adding a routing functionality. Decided not to add the routing complexity as the requirement is to create an index page which lists the repositories.
- Added snapshot tests for the presentation components. My Preference is to add storybook snapshots for presentation components but didn't use the library in this project.
- Error component handles generic errors triggered through API (Server, client and rest). Didn't handle different kind of errors which api might throw based on error code.
- Added a simple pagination feature which have next and previous buttons. react-paginate library is a better choice to improve the pagination UI.
- Added react-axe to verify if there are any accessability issues with the project. Refactored code to fix below warnings
  - [Label for a form element](https://dequeuniversity.com/rules/axe/3.5/label?application=axeAPI)
  - [Page must contain Level-one heading](https://dequeuniversity.com/rules/axe/3.5/page-has-heading-one?application=axeAPI)
  - [Content should be inside landmark on page](https://dequeuniversity.com/rules/axe/3.5/landmark-one-main?application=axeAPI)
- One more thing :) Currenly there is no caching to the requests it would be better to cache the requests based on the user input text to LocalStorage. e.g say user typed 'GoLang' and we cache the response to Localstorage with key as GoLang. So next time if user searches for same text we try to retreive the results from cache instead of server.
- One more thing :) Currently Response has lots of data. out of which we use only 4 fields. It would be nice to implement something similar to what 'jq' does to filter out what we want from the response and keep passing around those fields in the app. Github GraphQL API solves this problem :) (I used github API V3 for this exercise)

---

Developed by Pranava S Balugari. (Frontend assignment)
