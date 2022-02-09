const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
const path=require('path');
const hbs=require('hbs')

//using middleware
app.set("view engine","hbs");
const template_path=path.join(__dirname,'./templates/views')
app.set("views",template_path)
//static w
app.use(express.static(path.join(__dirname,'../public')))
const partials_path=path.join(__dirname,'./templates/partials')

hbs.registerPartials(partials_path);




//routing
app.get('/',(req,res)=>{
    res.render(`index.hbs`);
})

app.get('/about',(req,res)=>{
    res.render(`about.hbs`);
})

app.get('/weather',(req,res)=>{
    res.render(`weather.hbs`)
})
//operator
app.get('*',(req,res)=>{
    res.render(`404error.hbs`,{
        errormsg:'Oops page not found'
    })
 
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})