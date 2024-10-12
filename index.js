const express = require("express");
const app = express();
const path = require("path");
const { data,allCourses } = require("./data/data");
// engine = require('ejs-mate'),

// app.engine('ejs', engine);
// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"view"));


const engine = require("ejs-mate");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));
app.engine("ejs",engine);
app.use(express.static(path.join(__dirname,"/Public")));

// app.use(express.static("Public"));
// app.set(express.static(path.join(__dirname,"Public")));

// app.use(express.static(path.join(__dirname,"/Public")));  



app.get("/home",(req,res)=>{
    res.render("home.ejs",{allCourses});
});

app.get("/home/:id",(req,res)=>{
   let course = req.params.id;
   const object = allCourses.find(obj => obj.sName === course);    
   res.render("course.ejs",{object});


})
app.get("/aboutCollege",(req,res)=>{
     res.render("aboutCollege.ejs",{data});
});

app.get("/aboutCollege/:id",(req,res)=>{
   let clg = req.params.id;
     
    const object = data.find(obj => obj.sName === clg);  
   res.render("college.ejs",{object});

})

app.get("/aboutUs",(req,res)=>{
    res.render("aboutUs.ejs");
});

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});

app.listen(8080,()=>{
    console.log("hogya");
});

 