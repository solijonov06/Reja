const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString =

"mongodb+srv://Tony:Mrsolijonov_06@cluster0.gs9zifq.mongodb.net/";

mongodb.MongoClient.connect(
    connectionString, 
    {
         useNewUrlParser: true, 
        useUnifiedTopology: true
    },
        (err, client)=>{
            if (err) console.log("ERROR on connection to MongoDB");
            else{
                console.log("Connected to MongoDB");
                const db = client.db("Reja"); 
                module.exports = db;

                const app = require('./app.js');
                const server = http.createServer(app);
                let PORT = 3000;
                server.listen(PORT, function () {
                console.log(`Server is running on http://localhost:${PORT} `);
                });
            }
        });


                                                                               