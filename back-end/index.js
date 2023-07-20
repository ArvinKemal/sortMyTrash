
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const multer = require('multer')
const path = require('path')
const port = process.env.PORT
const authRoutes = require('./routers/auth')
const edukasiRoutes = require('./routers/edukasi')
const pengaduanRoutes = require('./routers/pengaduan')


const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' || 
    file.mimetype === 'image/jpg' || 
    file.mimetype === 'image/jpeg'
    ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
  
}

app.use(cors())
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'))


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
app.use("/api", edukasiRoutes)
app.use("/api", pengaduanRoutes)

app.get('/register', function (req, res) {
  res.send('test')
})

app.listen(port, () => {
  console.log(`listening in localhost port: ${port}`)
})