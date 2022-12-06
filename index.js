const  express = require('express');
const request= require('request-promise');

const app = express();
const PORT=process.env.PORT || 5000;

app.use(express.json());

app.get('/',(req,res) => { 
res.send("OUR SERVER IS RUNNING");
});


app.listen(PORT,() =>console.log("server is running on port ${PORT}"));

//use the files from public folder 
app.use(express.static('public'));



