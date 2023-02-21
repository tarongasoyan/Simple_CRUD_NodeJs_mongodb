import { findUsers, addUser, dellposts, updateposts, gettcontent } from "../service/user.js";


export async function getposts(req, res) {
    console.log(req.body);
    const posts = await findUsers();
    res.send( posts);
};

export async function addPost(req, res) {
    const newPost = await addUser(req.body);
    res.send(newPost);
};

export async function delposts(req, res) {
    res.send(dellposts(req.params.id));
}

export async function updateddUser(req, res) {
    const updtated =  await updateposts(req.params.id, req.body);
    res.send({
        message: updtated
    });
} 

export async function getcontentt(req, res) {
    const getcont = await gettcontent(req.params.id);
    console.log(getcont, "CONTROLLER");
    if (getcont) {
        res.send({
            getcont
        });
    } else {
        const newPost = await addUser({ name: req.params.id });
        res.send({
            newPost
        })
    }
}

