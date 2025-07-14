const { Router } = require("express");
const { Card } = require("../db/index.js");

const router = Router();


router.post("/card" , async(req ,res) => {
    const card = await Card.create({
        name : req.body.name,
        description : req.body.description,
        linkedinUsername : req.body.linkedinUsername,
        twitterUsername : req.body.twitterUsername,
        interests : req.body.interests

    });

    if(!card) {
        return res.status(500).json({
            message : "Error creating card !",
        });
    } else {
        return res.status(200).json({
            message : "Card created Successfully !",
            cardId : card._id,
        })
    }
});

router.get("/cards" , async(req ,res) => {
    const cards = await Card.find({});

    if(!cards) {
        return res.status(404).json({
            message:"No Cards found!",
        });
    } else {
        return res.status(200).json(cards);
    }
})

module.exports = router;