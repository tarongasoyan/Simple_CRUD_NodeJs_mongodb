import {Schema, model} from "mongoose";

const UserSchema = new Schema({
    name: String,
    content: String
  });

export default model('User', UserSchema)