const hbs = require("nodemailer-express-handlebars");
const cron = require("node-cron");

const nodemailer = require("nodemailer");
const path = require("path");

// initialize nodemailer
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "usermailid",
    pass: "pass",
  },
});

// point to the template folder
const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./views/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views/"),
};

// use a template file with nodemailer
transporter.use("compile", hbs(handlebarOptions));

var mailOptions = {
  from: "sender user name", // sender address
  to: "reciever user name ", // list of receivers
  subject: "Welcome to Heypm!",
  template: "email", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};
cron.schedule(" * * * * * * ", () => {
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      return console.log(err);
    }
    console.log("Message sent: " + info.response);
  });
});

