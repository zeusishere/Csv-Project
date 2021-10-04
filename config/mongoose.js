
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/csvDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
// mongoose.connect('mongodb+srv://shubham:2424554@cluster0.e6nsv.mongodb.net/CvsDb?retryWrites=true&w=majority')

const db = mongoose.connection;
db.on("error",  console.error.bind(console,"connection error :cannot connect to the db"));
db.once("open", () => {
  console.log("connected successfully to database")
});