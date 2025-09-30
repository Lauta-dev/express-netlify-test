import express, { Router } from "express";
import Serverless from "serverless-http";

const app = express();
const router = Router();

router.get("/", (req, res) => {
	res.json({
		hola: "mundo",
	});
});

router.use("/api/", router);

export const handler = Serverless(app);
