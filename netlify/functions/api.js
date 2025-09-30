import express, { Router } from "express";
import Serverless from "serverless-http";
import { data } from "./data.js";

const app = express();
const router = Router();

router.get("/", (req, res) => {
	res.json(data);
});

router.get("/hello", (req, res) => {
	res.send("Hello World!");
});

app.use("/api/", router);

export const handler = Serverless(app);
