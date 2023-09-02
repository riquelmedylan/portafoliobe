import { Router } from "express";
import { EmailSendController } from "../controller/emailSendController.js";

export const emailSendRouter = Router();

emailSendRouter.post("/", EmailSendController.create);
