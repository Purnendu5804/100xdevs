const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mysecretpassword";


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const newUser = await User.create({
        username : req.body.username,
        password : req.body.password,
    });

    if(!newUser) {
        return res.status(500).json({
            message : "User already exists !"
        });
    } else {
        await newUser.save();
        return res.status(200).json({
            message : "User created successfully !"
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const userExists = await User.findOne({
        username : req.body.username,
        password : req.body.password
    });

    if(!userExists) {
        return res.status(404).json({
            message : "User doesn't exists !"
        })
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

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})
        .then((course) => {
            return res.status(200).json(course);
        })
        .catch((error) => {
            return res.status(500).json({
                message : "Something went wrong !",
                error
            })
        
        })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const user = await User.updateOne({
        username : req.username
    }, {
        $push : {
            purchasedCourses : req.params.courseId
        }
    });
    return res.status(200).json({
        message : "Course purchased successfully !"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.username
    });
    const courses = await Course.find({
        _id : {
            $in : user.purchasedCourses,
        }
    });

    if(!courses) {
        return res.status(500).json({
            message : "No Courses found !"
        });
    } else {
        return res.status(200).json({
            courses : courses
        })
    }
});

module.exports = router