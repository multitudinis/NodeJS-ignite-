import "reflect-metadata"
import Express, { NextFunction, Request, Response } from "express";
import "express-async-errors"
import swaggerUI from "swagger-ui-express"
import "./database"
import "./shared/container"
import { router } from "./routes";
import swaggerFile from "./swagger.json"
import { AppError } from "./errors/appError";

const app = Express()
app.use(Express.json())

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(router)

app.use((
    err: Error, request: Request, response: Response, next: NextFunction
) => {
    if (err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(9999, () => console.log("Server is running!"))