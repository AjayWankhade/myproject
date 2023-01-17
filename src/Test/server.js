const express=require('express')
const app=require();

const mongoose=require('mongoose'); 
const { string } = require('yup');
mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true});

mongoose.connection
.once("open",()=> {
    console.log('Connetced')
})
.on("error",(error)=>{
    console.log("Your  error",error)
});


const newSchema=new mongoose.Schema({
name:String,
age:Number,
})

const newModel=new mongoose.model("collection",newSchema);

const data=new newModel({name:'Ajay',age:'24'});
data.save();

app.listen(5000,()=>{console.log('connection listening on 5000')})
