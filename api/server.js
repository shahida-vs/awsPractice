const express = require('express');
const app = express();

app.listen(3006, () => console.log('Server Started'));

getCurrentTimeFromStamp = (timestamp) => {
    return new Date(parseInt(timestamp, 10))
};
const isoToUnix = (d) => {
    console.log("date", d);
    return Date.parse(d)
}
app.get('/ec2-user/awsPractice/api/:date?', (req, res) => {
    let unix_stamp = '';
    let string_date = '';
    const urlDate = req.params.date;
    if (urlDate) {
        if (isNaN(urlDate)) {
            const isValid = new Date(urlDate);
            if (isValid.getTime() === isValid.getTime()) {
                unix_stamp = isoToUnix(urlDate);
                string_date = (new Date(urlDate));
                res.send(`{ "unix" : "${unix_stamp}" , "utc" : "${string_date}" }`);
            } else {
                res.send({ "Error": "Invalid Date" });
            }
        }
        else {
            const isValid = new Date(parseInt(urlDate));
            if ((isValid).getTime() === (isValid).getTime()) {
                string_date = getCurrentTimeFromStamp(urlDate);
                unix_stamp = urlDate;
                res.send(`{ "unix" : "${unix_stamp}" , "utc" : "${string_date}" }`);

            } else {
                res.send({ "Error": "Invalid Date" });
            }
        }

    }
    else {
        string_date = (new Date());
        unix_stamp = Date.parse(string_date);
        res.send(`{ "unix" : "${unix_stamp}" , "utc" : "${string_date}" }`);
    }
})