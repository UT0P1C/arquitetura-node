import { NextFunction, Request, Response, Router } from "express";

const statusRoute = Router();

//rota de status

statusRoute.get("/status", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({message: "okay"});
});

export default statusRoute;
