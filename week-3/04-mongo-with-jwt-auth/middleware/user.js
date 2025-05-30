const jwt = require("jsonwebtoken");
const JWT_SECRET = "mysecretpassword";


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if(!token) {
        return res.status(404).json({
            message : "Token not found!"
        });
    }
     
    try {
        const tokenWords = token.split(" ");
        const jwtToken = tokenWords[1];

        const verifiedData = jwt.verify(jwtToken , JWT_SECRET);

        if(verifiedData.username) {
            req.username = verifiedData.username;
            next();
        } else {
            return res.status(403).json({
                message : "You are authenticated"
            });
        }
    } catch (error) {
        return res.status(403).json({
            message : "Invalid token"
        });
    }

}

module.exports = userMiddleware;