import express, {Request, Response, NextFunction} from "express";

import usersRoute from "./routes/usersRoute";

const app = express();

app.use(usersRoute);

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({message: "okay"});
})

app.listen(3000, () => {
	console.log("running application in port 3000");
})