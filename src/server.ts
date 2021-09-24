import Express, { request, response }  from "express";
import swaggerUI from "swagger-ui-express"
import swaggerFile from "./swagger.json"
import { router } from "./routes";

const app = Express()
app.use(Express.json())

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(router)

app.listen(9999, () => console.log("Server is running!"))