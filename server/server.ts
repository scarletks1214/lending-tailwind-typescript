import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { getRates } from "./routes/rates";
import { joinWaitlisted } from "./routes/waitlisted";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/rates", getRates);
app.post("/api/wailtlist/join", joinWaitlisted);

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
