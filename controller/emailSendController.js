import { EmailSendModel } from "../model/emailSend.js"

export class EmailSendController {
  static async create(req, res) {
    const sendEmail = await EmailSendModel.create({data: req.body})
    res.status(201).json(sendEmail)
  }
}
