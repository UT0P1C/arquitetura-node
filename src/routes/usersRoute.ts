import { NextFunction, Request, Response, Router } from "express";

const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
	const users = {
		userName: "esq1z0"
	};

	res.status(200).json(users);
});


export default usersRoute;