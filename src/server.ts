import "reflect-metadata"
import Express from "express";
import swaggerUI from "swagger-ui-express"
import "./database"
import "./shared/container"
import { router } from "./routes";
import swaggerFile from "./swagger.json"

const app = Express()
app.use(Express.json())

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(router)

app.listen(9999, () => console.log("Server is running!"))