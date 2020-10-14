const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;

app.use("/", router);


app.use(express.static(__dirname + '/navBar'));

/* testing code*/

router.get('/nodeapp',(req,res)=>{
    console.log("res  ",req.url);
    res.write('hey hi Welcome to node appliation');
    res.end();
})

app.listen(port, () => console.log(`Apps are running on: http://localhost:${port}`));

