const random = require('alphanumeric');
const express = require('express');
const bcrypt = require('bcrypt');
const Auth = require('../model/Author.model');

const app = express.Router();
const saltRounds = 10;
app.get('/user/login', async(req, res) =>{ 
    try{
    const auth = await Auth.find({email:req.body.email});
    if(auth.length===0){
        res.send('user not found');
    }
    if(auth.status === 0){
        res.send('you donnot have access please contact admin');
    }
    const result = await bcrypt.compare(req.body.password, auth[0].password);
    if(auth){
       if(result){
        const id = random(16);
        res.send(id);
       }
       else{
        res.send({msg: 'password not correct'});
       }
    }
    }
    catch(e){
        return e;
    }
});

app.post('/user/register', async(req, res) =>{
    try{
        async function passwordHash(){ bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, async function(err, hash) {
                req.body.password = hash;
                const authors = await Auth.create(req.body);
                res.send(authors);
            });
        });}
        await passwordHash();    
    }
    catch(e){
        return e;
    }
});

app.post('/admin/login', async(req, res) =>{ 
    try{
         if(req.body.user == 'admin'&& req.body.password == 'supersecret'){
        const id = random(16);
        res.send(id);
       }
    else{
        res.send('Unauthorised user');
    }
    }
    catch(e){
        return e;
    }
});

app.get('/admin/get-users', async(req, res) =>{ 
    try{
        const auth = await Auth.find().limit(20);
        res.send(auth);
    }
    catch(e){
        return e;
    }
});

app.get('/admin/get-user/:id', async(req, res) =>{ 
    try{
        const auth = await Auth.findById(req.params.id);
        res.send(auth);
    }
    catch(e){
        return e;
    }
});


app.patch('/admin/update-user/:id', async(req, res) =>{ 
    try{
        const auth = await Auth.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.send(auth);
    }
    catch(e){
        return e;
    }
});


module.exports = app;
