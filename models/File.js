const mongoose = require('mongoose');
const nodemailer= require('nodemailer');
const fileSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
    },
    tags:{
        type: String,
    },
    email:
    {
        type: String,
    }
});
fileSchema.post('save',async function(doc)
{
    try
    {
      console.log('doc',doc);
      let transporter=nodemailer.createTransport({
       host:process.env.MAIL_HOST,
       auth:
       {
        user: process.env.MAIL_USER,
        pass:process.env.MAIL_PASS,
       }
      })
      let info=await transporter.sendMail({
        to:doc.email,
        subject:'New File uploaded on cloudinary',
        html:`<h1>Hello Ji File Uploaded</h1>`,
      })
      console.log(info)
    }catch(e)
    {
      console.error(e)
    }
})
const File=mongoose.model('File',fileSchema);
module.exports=File;