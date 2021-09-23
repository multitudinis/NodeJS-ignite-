import Express, { request, response }  from "express";
import { router } from "./routes";

const app = Express()
app.use(Express.json())

app.use(router)

app.listen(9999, () => console.log("Server is running!"))