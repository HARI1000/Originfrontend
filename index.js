const express = require("express")
const app =express()
const PORT=process.env.PORT ||3001
const mongoose =require("mongoose");
const cors=require('cors');
require('dotenv').config();
const FeedbackModel=require('./models/feedback')
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGODB_URI||process.env.MONGO_PASSWORD)
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
app.get("/getfeedback",(req,res)=>{
    FeedbackModel.find({},(err,result)=>  {
        if(err)
        {res.json(err)
        }
        else
        {res.json(result)

        }
    });
})
app.post("/addfeedback",async(req,res)=>{
    const feedback=req.body;
    const newFeedback= new FeedbackModel(feedback);
    await newFeedback.save();
    res.json(feedback);
})

if(process.env.NODE_ENV==='production')
{
app.use(express.static('client/build'))
}
app.listen(PORT,()=>{
    console.log("Server runs in port 3001");
}); 