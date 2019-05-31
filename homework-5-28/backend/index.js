const express = require('express');

const app = express();

app.get('/', (request, response) =>{
    // response.send("Hello World!");

    response.sendFile("E:/Code log/Techkids/web-22/html and css/index.html"); 
})

app.get('/style.css', function(req, res) {
    res.sendFile("E:/Code log/Techkids/web-22/html and css/style.css");
});

app.get("/about", function(request, response){
    response.sendFile("E:/Code log/Techkids/web-22/html and css/homework1/biography.html")
})

app.get("/about/bio.css", function(request, response){
    response.sendFile("E:/Code log/Techkids/web-22/html and css/homework1/bio.css")
})


// app.get('/', )

const port = 6969;
app.listen(port, function(err){
    if(err) console.log(err);
    else console.log("Server successfully started!");
})