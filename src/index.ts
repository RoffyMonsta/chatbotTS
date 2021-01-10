import App from './app';
require('dotenv').config()
const SERVER_PORT = process.env.SERVER_PORT || 3000;


async function main() {
  const app = new App(SERVER_PORT);
  await app.listen();
}

main();