const express = require('express');
const app =express();

const urlCheck = function(req,res,next){
    console.log("current url is ",req.originalUrl);
    next();
}

app.use(urlCheck)


app.get('/about',function(req,res){

    res.send("hello it is express app to learn/we are in about page")
});
app.get('/login',function(req,res){

    res.send("hello it is express app to learn/we are in login page");
});
app.get('/signin',function(req,res){

    res.send("hello it is express app to learn/we are in sign in page");
});
app.get('/',function(req,res){

    res.send("hello it is express app to learn");
});
app.post('/post',function(req,res){

    res.send("hello it is express app for post");
});

app.put('/post',function(req,res){

    res.send("hello it is express app for put");
});

app.delete('/post',function(req,res){

    res.send("hello it is express app for delete post");
});


app.listen(4500);