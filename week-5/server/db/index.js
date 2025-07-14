const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://purnendutiwari2004:sKBadUBSZSF0rbf9@cluster0.di26a.mongodb.net/")

const cardSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    } , 

    description : {
        type : String,
        required : true,
    } , 

    linkedinUsername : {
        type : String,
        required : true
    } ,

    twitterUsername : {
        type : String,
        required : true
    } , 

    interests : [
        {
            type : String,
            required : true,
        }
    ]
});

const Card = mongoose.model("Card" , cardSchema);

module.exports = {
    Card,
}