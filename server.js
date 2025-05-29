console.log("Web server started");
const express = require('express');
const app = express();
const http = require('http');

//1: Kirish code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session
//3:Views code
app.set('views', 'views');
app.set('view engine', 'ejs');

//4: Routing code
app.get('/hello', function (req, res){
    res.end(`<h1 style = "background: green">Hello World</h1>`);
});

app.get('/gifts', function (req, res) {
        res.end(`<h1 style = "background: yellow">You are onpage of gifts.</h1>`);
    });

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});