import { emailTransport } from "../middleware/emailTransport.js";

export class EmailSendModel {
  static async create({ data }) {
    const transporter = emailTransport();
    const { from, subject, text } = data;
    const mail = {
      from: `"Contacto" <${from}>`,
      to: "riquelmedylan0@gmail.com",
      cc: [from],
      subject: subject,
      text: text,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
    return data;
  }
}
