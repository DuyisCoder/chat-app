const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.json({ msg: 'Hello GUYs' });
// });
// Routes
app.use(express.json());
app.use('/api',require('./routes/authRouter'))


const URI = process.env.MONGOOSE_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
  }
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is running on port', port);
});
