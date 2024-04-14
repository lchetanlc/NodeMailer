const nodemailer = require('nodemailer');
const transpoter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user:"lchetan2002@gmail.com",
        pass:"aaetqtzxtsnolkft",
    }
});

const options = {
    from: "lchetan2002@gamil.com",
    to: "satyasaikilaru.1419n@gmail.com",
    subject: "NodeMailer",
    text:"Successful"
};

transpoter.sendMail(options,function(err,info){
    if(err){
        console.log(err);
        return;
    }
    console.log("sent"+info.response);
});