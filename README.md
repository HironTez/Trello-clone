<p align="center">
    <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# RS School REST service

## Compare express and fastify
⠀            |Meaning                           | Express                             | Fastify
------------ |--------------------------------- | ----------------------------------- | -------------
Requests     | [total, rate, throughput]        | 500, 100%                           | 500, 100%
Duration     | [total, attack, wait]            | 10s.                                | 10s.
Mean response| [sec]                            | 31.47s.                             | 21.32s.
Latencies    | [min, mean, max]                 | 9ms., 1672.7ms., 6311ms.            | 9ms., 1689.3ms., 6556ms.
Success      | [ratio]                          | 500                                 | 500
Status Codes | [code:count]                     | `200`: 300, `201`: 100, `204`: 100  | `200`: 300, `201`: 100, `204`: 100

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
