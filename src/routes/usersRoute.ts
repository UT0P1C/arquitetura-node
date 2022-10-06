import { NextFunction, Request, Response, Router } from "express";

const usersRoute = Router();


//ROTAS

//rota de Read
usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
	const users = {
		userName: "esq1z0"
	};

	res.status(200).json(users);
});

//rota de Read por ID
usersRoute.get("/users/:uuid", (req: Request<{ uuid: String}>, res: Response, next: NextFunction) => {
	const uuid = req.params.uuid;
	
	res.status(200).json({uuid});
});

//rota de Create
usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
	console.log(req.body);

	const user = req.body;

	res.status(201).send(user);
});

//metodo PUT para Update

usersRoute.put("/users/:uuid", (req: Request<{ uuid: String}>, res: Response, next: NextFunction) => {
	const uuid = req.params.uuid;

	const modifiedUser = req.body;

	modifiedUser.uuid = uuid;

	res.status(200).json({modifiedUser})
});


//metodo DELETE para Delete

usersRoute.delete("/users/:uuid", (req: Request<{uuid: String}>, res: Response, next: NextFunction) => {
	const uuid = req.params.uuid;

	res.status(200).json({message: "usuário deletado com sucesso"});
});



export default usersRoute;