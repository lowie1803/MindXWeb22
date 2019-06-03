const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/ask', (req, res) => {
    res.sendFile(__dirname + '/views/ask.html');
})

app.get('/info', (req, res) =>{
    res.sendFile(__dirname + '/views/info.html');
})
const questionList = [];
app.post('/addquestion', (req, res) =>{
    const fileData = fs.readFileSync('question.txt', {encoding: 'utf-8'});
    let questionList = [];
    if (fileData){
        questionList = JSON.parse(fileData);
    }
    console.log(req.body);
    
    const question = {
        id: questionList.length,
        yes: 0,
        no: 0,
        content: req.body.question
    }
    questionList.push(question);
    fs.writeFileSync('question.txt', JSON.stringify(questionList));
    res.redirect('/');
})

app.post('/answer', (req, res) => {
    res.redirect('/');
})

app.use('/public', express.static('public'))



//http://localhost:8888
const port = 8888;
app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log("Server successfully started!");
})