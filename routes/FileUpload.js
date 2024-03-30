const express=require('express');
const router=express.Router();

const{localFileUpload,imageUpload,videoUpload}=require('../controllers/fileUpload')

router.post('/localFileUpload',localFileUpload)
router.post('/imageFileUpload',imageUpload)
router.post('/videoFileUpload',videoUpload)
module.exports=router