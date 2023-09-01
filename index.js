import express, { json } from "express";
import { emailSendRouter } from "./routes/EmailSend.js";
import { corsMiddleware } from "./middleware/cors.js";

const app = express();
app.use(json());
app.disable("x-powered-by");
app.use(corsMiddleware());
app.use(express.urlencoded( { extended: false } )); 
app.use("/send-email", emailSendRouter);

const PORT = process.env.PORT ?? 4245;

app.listen(PORT, () => {
  console.log(`El puerto ${PORT} se levanto`);
});
