import express, { json } from "express";
import { EmailSendRouter } from "./routes/emailSend.js";
import { corsMiddleware } from "./middleware/cors.js";

const app = express();
app.use(json());
app.disable("x-powered-by");
app.use(corsMiddleware());
app.use(express.urlencoded( { extended: false } )); 
app.use("/send-email", EmailSendRouter);

const PORT = process.env.PORT ?? 4245;

app.listen(PORT, () => {
  console.log(`El puerto ${PORT} se levanto`);
});
