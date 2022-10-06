import express, {Request, Response, NextFunction} from "express";

const app = express();

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({message: "okay"});
})

app.listen(3000, () => {
	console.log("running application in port 3000");
})