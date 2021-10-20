# Broccoli & Co UI

The Web-facing UI for Broccoli & Co.

## Deployments

<!-- prettier-ignore -->
| name | branch | deploys on | status | url |
| ---- | ------ | ---------- | ------ | --- |
| `storybook` | `develop` | merge only | [![Netlify Status](https://api.netlify.com/api/v1/badges/9417c3e0-071d-4b88-b170-2c4bfd466f18/deploy-status)](https://broccoliproject-storybook.netlify.app) | [`broccoliproject-storybook.netlify.app`](https://broccoliproject-storybook.netlify.app) |
| `develop` | `develop` | PRs and merge | | |
| `production` | `production` | merge only | [![Netlify Status](https://api.netlify.com/api/v1/badges/e7635c8d-ef00-428b-bbd6-8a56870ba1e8/deploy-status)](https://broccoliproject.netlify.app/) | [`broccoliproject.netlify.app/`](https://broccoliproject.netlify.app/) |

### Prerequisites

- [NodeJS](https://nodejs.org), version `14.16.0` (I use [`nvm`](https://github.com/creationix/nvm) to manage Node versions — `brew install nvm`.) - Does not quite work with Node 15 yet or NPM 7.
- [npm](https://www.npmjs.com), version `6.x` This is installed with NodeJS on mac and linux systems by default.

### Install dependencies

```sh
npm ci
```

#### Directory Structur

Your folder hierarchy will be something like this:

```bass
.                                       // Project folder.
├── public                              // All public static assets go here.
│   ├── fonts                           // Fonts' files.
│   └── ...
├── src                                 // Main source code directory.
│   ├── App.js                          // Main App component.
│   ├── index.js                        // React application boot.
│   ├── components                      // All React Components go in here.
│   │   ├── Button                      // Button component.
│   │   │   └── __snapshots__           // Snapshot of Unit test.
│   │   │   └── Button.spec.js          // Button unit test file.
│   │   │   └── index.js
│   │   └── ...
│   ├── context                         // All context go here.
│   │   └── modalContext.js
|   ├── features                        // All features go in here.
│   |   └── api.js                      // Api helper utility.
│   ├── hooks                           // React hooks folder.
│   │   └── useModal.js                 // Hook for modal.
│   ├── pages                           // App pages folder.
│   │   └── Main.js                     // Main page.
│   ├── stories                         // Storybook folder.
│   │   ├── assets                      // Default assets for the Storybook.
│   │   └── components                  // All storybook components go in here.
│   │       └── Button.stories.js
│   │       └── ...
│   ├── theme                           // App theme folder.
│   │   ├── buttons.js                  // Button styles and size variants for the theme.
│   │   ├── global.js                   // Global styles.
│   │   └── index.js                    // Project theme coinfiguration.
│   └── utils                           // Utility functions used in the project.
│       ├── dates.js                    // Date helper utility.
│       └── test-wrapper.js             // Testing utility helper.
├── .prettierrc                         // Prettier configuration.
├── package.json                        // Project dependencies.
└── README.md                           // Documentation for project.
```

### Run the app in development mode

```sh
npm run start
```

Open [localhost:3000](http://localhost:3000) to view it in the browser.

The site will reload if you make edits. You will also see any lint errors in the console.

### Run the unit tests

```sh
npm run test
```

Launches the test runner in interactive watch mode.

- See [create-react-app/docs/running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Storybook

```sh
npm run storybook
```

Open [localhost:6006](http://localhost:6006) to view it in the browser.

The site will reload if you make edits. You will also see any lint errors in the console.

- See [storybook.js.org](https://storybook.js.org) for more information.

## Contributing

Please see the [contributing notes](CONTRIBUTING.md).
