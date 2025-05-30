const jwt = require ("jsonwebtoken")
const JWT_SECRET = "mysecretpassword"

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).json({
            message : "Token not found !"
        })
    }

    try {
        const tokenWords = token.split(" ");
        const jwtToken = tokenWords[1];

        const verifiedData = jwt.verify(jwtToken , JWT_SECRET);

        if(verifiedData.username) {
            next();
        } else {
            return res.status(403).json({
                message : "You are not authenticated"
            })
        }
    } catch (error) {
        return res.status(403).json({
            message : "Invalid Token"
        });
    }
}

module.exports = adminMiddleware;