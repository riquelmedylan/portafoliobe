import { Router } from "express";
import { EmailSendController } from "../controller/EmailSendController.js";

export const emailSendRouter = Router();

emailSendRouter.post("/", EmailSendController.create);
