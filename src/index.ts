import express, {Request, Response, NextFunction} from "express";

import usersRoute from "./routes/usersRoute";


//configurações
const app = express();

app.use(express.json());

app.use(usersRoute);


//rotas
app.get("/status", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({message: "okay"});
});


//inicialização na porta 3000
app.listen(3000, () => {
	console.log("running application in port 3000");
});