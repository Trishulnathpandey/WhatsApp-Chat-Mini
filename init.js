const mongoose=require("mongoose");
const Chat = require("./models/chat.js");
main()
.then(()=>{
    console.log("connection successful");
})

.catch((err) => console.log(err));
async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

}

let allChats1= [
    {
        from : "nehA",
        to : "preeti",
        msg :"send me notes for the exam",
        created_at:new Date(),
    },

    {
        from : "rohit",
        to : "mohit",
        msg :"teach  me JS callbacks",
        created_at:new Date(),
    },
    {
        from : "abhishek",
        to : "siddhartha",
        msg :"all the best!",
        created_at:new Date(),
    },
    {
        from : "Anjali ",
        to : "sidd",
        msg :"I hate you ",
        created_at: new Date(),
    },
    {
        from: "abhi",
        to: "omkar",
        msg: "Love you bro",
        created_at: new Date(),
    },

];


Chat.insertMany(allChats1);

