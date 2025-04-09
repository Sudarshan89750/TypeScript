import "reflect-metadata"; // We need this in order to use @Decorators

import config from "./config";
import express from "express";
import order from "./api/routes/order.route";
import Logger from "./loaders/logger";

async function startServer() {
  const app = express();

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require("./loaders").default({ expressApp: app });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/orders", order);
  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
