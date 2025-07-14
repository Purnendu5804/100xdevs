const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user");
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api/user" , userRouter);

app.use(cors({origin : "http:localhost:5173"})) ;

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});
