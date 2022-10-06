import express, {Request, Response, NextFunction, urlencoded} from "express";

import usersRoute from "./routes/usersRoute";

import statusRoute from "./routes/statusRoute";


//configurações
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(usersRoute);

app.use(statusRoute);


//inicialização na porta 3000
app.listen(3000, () => {
	console.log("running application in port 3000");
});