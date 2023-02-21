import express from "express";
import mongoose from "mongoose";
import { router } from './routes/userRouter.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/myDb', { 
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
});

db.on('connected', function() {
  console.log('Connected to MongoDB');
});

app.use('/', router)

app.listen(5000, function() {
  console.log('Example app listening on port 5000!');
});
