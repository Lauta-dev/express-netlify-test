import express, { Router } from "express";

const app = express();
const router = Router();

router.get("/", (req, res) => {
	res.json({
		hola: "mundo",
	});
});

router.use("/api/", router);
