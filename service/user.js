import mongoose from "mongoose";
import User from "../model/userModel.js";

export async function findUsers() {
    try {
        const users = await User.find(); 
        console.log(users,'asdasdadasd');
        return users;   
    } catch (err) {
        return err
    }    
}

export async function addUser(data) {
    console.log(data,"DATA");
    const newUser = new User({ 
        name: data.name,
        content: data.content
    });
    await newUser.save();
    return newUser;
}

export async function dellposts(id) {
   const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
}

export async function updateposts(id, data) {
    const updatedUser = await User.findByIdAndUpdate(id, data);
    return updatedUser;
}

export async function gettcontent(id) {
    const getted = await User.findOne({ name: id });
    console.log(getted, 'SERVICE');
    if (getted?.content) {
        return getted.content; 
    } 
    return getted;
}