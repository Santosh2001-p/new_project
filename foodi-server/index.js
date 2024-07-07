const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./api/db")
require("dotenv").config();
const port = process.env.PORT || 5000;
db.connectDB();

const stripe = require("stripe")(process.env.PAYMENT_SECRET_KEY);
const jwt = require('jsonwebtoken');

// middleware
app.use(cors());
app.use(express.json());


mongoose
  .connect(
    `mongodb+srv://santosh:12345@cluster0.h61u02m.mongodb.net/foodi-project?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(console.log("Mongodb connected successfully!"))
  .catch((error) => console.log("Error connecting to MongoDB: " + error));




// jwt authentication

// jwt related api
app.post("/jwt", async (req, res) => {
  const user = req.body;
  // console.log(user)
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res.send({ token });
});



// import routes
const menuRoutes = require("./api/routes/menuRoutes");
const cartsRoutes = require("./api/routes/cartRoutes");


const usersRoutes = require("./api/routes/userRoutes");

const feedbackRoutes = require("./api/routes/feedbackRouter");


const paymentRoutes = require("./api/routes/paymentRoutes");
const adminStats = require('./api/routes/adminStats');
const orderStats = require('./api/routes/orderStats')

app.use("/menu", menuRoutes);

app.use("/fee", feedbackRoutes);
app.use("/carts", cartsRoutes);


//
app.use("/users", usersRoutes)

app.use("/feedbacks", feedbackRoutes);

app.use("/payments", paymentRoutes);
app.use('/admin-stats', adminStats);
app.use('/order-stats', orderStats);

//feedback
app.use('/api', require("./api/routes/CreateUser"));


//create address
app.use('/api', require("./api/routes/CreateAddress"));

//retrive address
//app.use('/api', require("./api/routes/retriveAddress"));


app.get('/retrive_address', async (req, res) => {
  const Appliedjobdata = await db.getuser();
  res.json(Appliedjobdata);
});



// payment methods routes
const verifyToken = require('./api/middlewares/verifyToken')

app.post("/create-payment-intent", verifyToken, async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);
  // console.log(amount);

  // Create a PaymentIntent 
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});



app.get("/", (req, res) => {
  res.send("Foodi Server is Running!");
});

app.listen(port, () => {
  console.log("hiii")
  console.log(`Example app listening on port ${port}`);
});
