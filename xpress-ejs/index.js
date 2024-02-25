const express = require('express');
const app = express();
const port = 8080;

app.listen(port,()=>{
    app.set('view engine', 'ejs'); //require ejs langsung ke express beda dg module yg lain

    app.get('/',(req,res)=>{ //set route ke root
        res.render('home')
    })
    console.log('listening on port htp://localhost:8080');
})