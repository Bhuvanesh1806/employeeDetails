const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser:true})
const db = mongoose.connection;
db.on("open", () =>{
    console.log("Connected to DB");
});


let port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port : ${port}`);
});

