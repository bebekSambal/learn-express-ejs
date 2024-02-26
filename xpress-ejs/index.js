const path = require('path');
const express = require('express');
const app = express();
const port = 8080;
app.set('view engine', 'ejs'); //require ejs langsung ke express beda dg module yg lain

app.set('views', path.join(__dirname, '/views'));
console.log(path.join(__dirname, '/views'));
 app.get('/',(req,res)=>{ //set route ke root
     res.render('home')
 });

 app.use(express.static('public'));
 app.use(express.static(path.join(__dirname, '/public')));
 app.get('/rand',(req,res)=>{ //set route ke /rand
    const num = Math.floor(Math.random()*10)+2;
     res.render('random', {num});
 });

app.listen(port,()=>{
    console.log('listening on port htp://localhost:8080');
});