const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const path = require("path");
const creds = require("./creds");
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// app.get("*", (request, response) => {
//   response.sendFile(path.join(__dirname, "client/public", "index.html"));
// });

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
        <h3> Contact Details </h3>
        <ul>
        <li>Name: ${req.body.name} </li>
        <li>Email: ${req.body.email} </li>
        </ul>
        <h3> Message </h3> 
        <p> ${req.body.message} </p>
        `;

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 587,
      auth: {
        user: creds.USER,
        pass: creds.PASS
      }
    });

    let mailOptions = {
      from: "test@testaccount.com",
      to: "zetta.little96@ethereal.email",
      replyTo: "test@testaccount.com",
      subject: "New Message",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message sent: %s", info.message);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
