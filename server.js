const hbs = require("nodemailer-express-handlebars");
const cron = require("node-cron");

const nodemailer = require("nodemailer");
const path = require("path");

// initialize nodemailer
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lchetan2002@gmail.com",
    pass: "aaetqtzxtsnolkft",
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
  from: "<lchetan2002@gmail.com>", // sender address
  to: "satyasaikilaru.1419n@gmail.com ", // list of receivers
  subject: "Welcome to Heypm!",
  template: "email", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};
cron.schedule(" * * * * 1 * ", () => {
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      return console.log(err);
    }
    console.log("Message sent: " + info.response);
  });
});

// const ccron = require("node-cron");
// const ccron1 = require("node-cron");
// const ccron2 = require("node-cron");
// const ccron3 = require("node-cron");
// const ccron4 = require("node-cron");
// const ccron5 = require("node-cron");
// const ccron6 = require("node-cron");
// const ccron7 = require("node-cron");
// const ccron8 = require("node-cron");
/*
var mailOptions1 = {
  from: "<lchetan2002@gmail.com>", // sender address
  to: "web3pm@gmail.com , admin@web3pms.org", // list of receivers
  subject: "Welcome To Heypm.org",
  template: "index", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};

var mailOptions2 = {
  from: "<lchetan2002@gmail.com>", // sender address
  to: "web3pm@gmail.com , admin@web3pms.org", // list of receivers
  subject: "Welcome to Heypm Web!",
  template: "index1", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};
var mailOptions3 = {
  from: "<lchetan2002@gmail.com>", // sender address
  to: "web3pm@gmail.com , admin@web3pms.org", // list of receivers
  subject: "Welcome!",
  template: "index2", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};
var mailOptions4 = {
  from: "<lchetan2002@gmail.com>", // sender address
  to: "web3pm@gmail.com , admin@web3pms.org", // list of receivers
  subject: "Heypm!",
  template: "index3", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};
var mailOptions5 = {
  from: "<lchetan2002@gmail.com>", // sender address
  to: "web3pm@gmail.com , admin@web3pms.org", // list of receivers
  subject: "Greetings from Heypm!",
  template: "index4", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};
var mailOptions6 = {
  from: "<lchetan2002@gmail.com>", // sender address
  to: "web3pm@gmail.com , admin@web3pms.org", // list of receivers
  subject: "Greetings!",
  template: "index5", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};
var mailOptions7 = {
  from: "<lchetan2002@gmail.com>", // sender address
  to: "web3pm@gmail.com , admin@web3pms.org", // list of receivers
  subject: "Web3pms",
  template: "index6", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};
var mailOptions8 = {
  from: "<lchetan2002@gmail.com>", // sender address
  to: "web3pm@gmail.com , admin@web3pms.org", // list of receivers
  subject: "Welcome to Web3pms!",
  template: "index7", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};
var mailOptions9 = {
  from: "<lchetan2002@gmail.com>", // sender address
  to: "web3pm@gmail.com , admin@web3pms.org", // list of receivers
  subject: "Welcome to Heypm and Web3pms!",
  template: "index8", // the name of the template file i.e email.handlebars
  context: {
    name: "Adebola", // replace {{name}} with Adebola
    company: "My Company", // replace {{company}} with My Company
  },
};
*/
// trigger the sending of the E-mail



/*
ccron.schedule(" 11 22 * * * ", () => {
  transporter.sendMail(mailOptions1, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
});
ccron1.schedule(" 12 22 * * * ", () => {
  transporter.sendMail(mailOptions2, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
});
ccron2.schedule(" 16 22 * * * ", () => {
  transporter.sendMail(mailOptions3, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
});
ccron3.schedule(" 15 22 * * * ", () => {
  transporter.sendMail(mailOptions4, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
});
ccron4.schedule(" 17 22 * * * ", () => {
  transporter.sendMail(mailOptions5, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
});
ccron5.schedule(" 19 22 * * * ", () => {
  transporter.sendMail(mailOptions6, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
});
ccron6.schedule(" 21 22 * * * ", () => {
  transporter.sendMail(mailOptions7, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
});
ccron7.schedule(" 22 22 * * * ", () => {
  transporter.sendMail(mailOptions8, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
});
ccron8.schedule(' 24 22 * * * ', () =>{
    transporter.sendMail(mailOptions9, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
    });
*/
