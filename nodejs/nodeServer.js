const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;

app.use("/", router);
app.use(express.static(__dirname + '/navBar'));

/* testing code*/

router.get('/dataaa', function (req, res, next) {
    console.log("app on default");
    res.write( "default call" );  
    res.end();
});

router.get('/sid',(req,res)=>{
    console.log("res  ",req.url);
    res.write('hey hi sid');
    res.end();
})

app.listen(port, () => console.log(`Apps are running on: http://localhost:${port}`));

