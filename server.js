const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

// Define routes
app.get('/findSummation', (req, res) => {
    let num = req.query.num;
    let sum = 0;
    for(let i = 0; i <= num; i++){
        sum += i;
    }
    res.send({result: sum});
});

app.post('/uppercaseFirstandLast', (req, res) => {
    let str = req.body.str;
    let first = str.charAt(0).toUpperCase();
    let last = str.charAt(str.length - 1).toUpperCase();
    res.send({result: first + str.slice(1, str.length - 1) + last});
});

app.post('/findAverageAndMedian', (req, res) => {
    let arr = req.body.arr;
    let sum = 0;
    let median = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let average = sum / arr.length;
    if(arr.length % 2 == 0){
        median = (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
    } else {
        median = arr[Math.floor(arr.length / 2)];
    }
    res.send({average: average, median: median});
});

app.post('/find4Digits', (req, res) => {
    let arr = req.body.arr;
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toString().length == 4){
            result.push(arr[i]);
        }
    }
    res.send({result: result});
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
