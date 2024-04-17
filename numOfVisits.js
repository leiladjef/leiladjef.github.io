const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    let visits = req.cookies.visits || 0;
    visits++;

    // Update cookie with current number of visits
    res.cookie('visits', visits, { maxAge: 900000, httpOnly: true });

    // Get the timestamp of  last visit
    let lastVisit = req.cookies.lastVisit || new Date().toString();
    res.cookie('lastVisit', new Date().toString(), { maxAge: 900000, httpOnly: true });

    // Format the last visit timestamp
    let formattedLastVisit = new Date(lastVisit).toString();


    let message = "";
    if (visits === 1) {
        message = `Welcome to my webpage! It is your first time that you are here.`;
    } else {
        message = `Hello, this is the ${visits} time that you are visiting my webpage.`;
        message += ` Last time you visited my webpage on: ${formattedLastVisit}`;
    }

    res.send(message);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
