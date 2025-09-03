// const us = require('./user.js');

// us.registeruser();
// us.loginuser();

// const os = require('os');
// console.log(os.hostname());

// const fs = require('fs');
// fs.writeFile('sample.txt', 'This is a sample file', (err) => {
//    if (err) 
//     {
//         console.log("Error in creating the file.");
//         return;
//     } 
//     console.log('File created successfully.');
// });

// fs.readFile('sample.txt','utf8', (err, data) => {
//     if (err)
//     {
//         console.log("Error in reading the file.");
//         return;
//     }
//     console.log(data);
// });

const express = require('express');
const app = express();
const port = 3000;


app.listen(port, (err) => {
    if (err) 
    {
        console.log("Error in listening on port");
        return;
    }
    console.log(`Successfully listening on port ${port}`);
});


app.get("/", (req, res) => {
    res.send('Welcome to your first server');
});

app.get("/wish", (req, res) => {
    res.send('Good morning, everyone. Wishing you a wonderful day ahead!');
});
