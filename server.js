console.log("Web server started");
const express = require('express');
const app = express();
const http = require('http');
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", function (err, data) {
    if (err) {
        console.log("Error reading user data:", err);
    } else {
        user = JSON.parse(data);
        console.log("User data loaded successfully:", user);
    }
});

//1: Kirish code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session
//3:Views code
app.set('views', 'views2');
app.set('view engine', 'ejs');

//4: Routing code
// app.get('/hello', function (req, res){

//     res.end(`<h1 style = "background: green">Hello World</h1>`);
// });

// app.get('/gifts', function (req, res) {
//         res.end(`<h1 style = "background: yellow">You are onpage of gifts.</h1>`);
//     });
app.post("/create-item", function (req, res) {
    console.log(req);
    res.json({test:"succes"});
});

app.get("/", function (req,res) {
      res.render("harid2");
});

app.get("/author", function (req,res) {
      res.render("author", {user: user});
});



const server = http.createServer(app);
let PORT = 3001;
server.listen(PORT, function () {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//5: Error handling code
