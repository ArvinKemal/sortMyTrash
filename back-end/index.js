
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT
const authRoutes = require('./routers/auth')

app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/auth", authRoutes)

app.get('api/auth/register', function (req, res) {
  res.send('test')
})

app.listen(port, () => {
  console.log(`listening in localhost port: ${port}`)
})