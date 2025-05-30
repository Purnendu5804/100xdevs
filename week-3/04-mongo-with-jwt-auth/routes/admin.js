const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db")
const jwt = require ("jsonwebtoken")
const JWT_SECRET = "mysecretpassword"

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const newAdmin = await Admin.create({
        username : req.body.username,
        password : req.body.password
    });

    if(!newAdmin) {
        return res.status(500).json({
            message : "Error signing up Admin !"
        });
    } else {
        await newAdmin.save();
        return res.status(200).json({
            message : "Admin created successfully!"
        });
    }

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const adminExists = await Admin.findOne({
        username : req.body.username,
        password : req.body.password,
    }) ; 

    if(!admimExists) {
        return res.status(400).json({
            message : "Admin doesn't exists !"
        });
    } else {
        const token = jwt.sign({
            username : req.body.username,
            password : req.body.password
        } , JWT_SECRET);
        return res.status(200).json({
            token : token
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const course = await Course.create({
        title : req.body.title,
        description : req.body.description,
        price : req.body.price,
        imageLink : req.body.imageLink
    });

    if(!course) {
        return res.status(500).json({
            message : "Error created course!"
        })
    } else {
        return res.status(200).json({
            message : "Course created successfully!",
            courseId : course._id,
        });
    }
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
        .then((course) => {
            return res.status(200).json(course);
            })
            .catch((error) => {
                return res.status(500).json({
                    message : "Something went wrong !",
                    error,
                });
            });
 });


module.exports = router;