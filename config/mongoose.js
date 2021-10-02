const mongoose = require("mongoose") ;
mongoose.connect('mongodb://localhost:27017/csvDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection ;
db.on("error", (err)=>
{
    if(err)
    {
        console.log("there was an error connecting to THE DATABASE")
    }
});
db.once("open" , ()=>
{
    console.log("connected successfully to database")
}) ;