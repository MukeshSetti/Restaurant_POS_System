
const express = require("express");
const connectDB = require("./config/database");
const config=require("./config/config");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const app = express();
const PORT = config.port;

connectDB();

//Middlewares
app.use(cors({
  credentials: true,
  origin: ['http://localhost:5173']
}))
app.use(express.json()); //parse incoming requests in json format
app.use(cookieParser());


//root endpoint
app.get("/", (req, res) => {
  
  res.json({ message: "Hello from POS server" });
});

//other end points
app.use("/api/user", require("./routes/userRoute"))
app.use("/api/order", require("./routes/orderRoute"))
app.use("/api/table", require("./routes/tableRoute"))
app.use("/api/payment", require("./routes/paymentRoute"))
//Global Error Handler

app.use(globalErrorHandler)

//Server
app.listen(PORT, () => {
  console.log(`POS Server is listening on port ${PORT}`);
});

