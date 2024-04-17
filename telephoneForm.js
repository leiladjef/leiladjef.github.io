const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/telephoneForm.html');
});

app.post('/checkPhoneNumber', (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const phoneNumberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (phoneNumberRegex.test(phoneNumber)) {
        res.send(`<h2>Phone Number Validation</h2><p>The phone number ${phoneNumber} is correct.</p>`);
    } else {
        res.send(`<h2>Phone Number Validation</h2><p>The phone number ${phoneNumber} is incorrect. Please enter it in the format ddd-ddd-dddd.</p>`);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
