const express = require("express") ;
const app = express() ;
const port = 8000 ;
app.use("/", require("./routes"))
app.listen(port , (err)=>
{
    if(err)
        console.log("there was an error in starting the server");
    console.log("server is running fine ") ;
})