import app from "@/app";
import { logger } from "@utils/logger";
import { NODE_ENV, PORT } from "@config";
import validateEnv from "@utils/validateEnv";
validateEnv();
import routes from "./routes";
import connectDatabase from "@/databases/index";

const version = "/v1"
routes.forEach(( route ) => {
  const path = version + route.path;
  app.use(path, route.func);
});

connectDatabase();
app.listen(PORT, () => {
  logger.info(`======= ENV: ${NODE_ENV} =======`);
  logger.info(`🚀 App listening on the port http://localhost:${PORT}`);
});
