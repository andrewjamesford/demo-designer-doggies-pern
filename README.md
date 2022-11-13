# Designer Doggies

## ![Home page of designer dogs](designer-doggies.png)

## Getting Started

**To run the app:**

```zsh
docker-compose up --build
```

**To run the server-side tests:**

```zsh
docker-compose -f docker-compose.test.yml up --build
```

<sup>Note: You will notices that some of the tests will fail. This is intentional.</sup>

**To run the client-side tests:**

```zsh
cd client
npm install
npm test
```

---

## Debugging with VS Code integration

We need to ensure the JavaScript Debugger plugin is installed.

[JavaScript Debugger](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug)

---

## Jest test runner integration with VS Code

To enable the VS Code integration with the Jest test runner open the Client folder directly for the project. The default configuration will work this way with the locally installed node modules.

Also ensure you have the Jest test runner plugin installed. [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

---
