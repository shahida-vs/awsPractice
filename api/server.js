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
    if (req.params.date) {
        if (isNaN(req.params.date)) {
            const isVAlid = new Date(req.params.date);
            if (isVAlid.getTime() === isVAlid.getTime()) {

                unix_stamp = isoToUnix(req.params.date);
                string_date = (new Date(req.params.date));
                res.send(`{ "unix" : "${unix_stamp}" , "utc" : "${string_date}" }`);
            } else {
                res.send({ "Error": "Invalid Date" });
            }
        }
        else {
            const isVAlid = new Date(parseInt(req.params.date));
            if ((isVAlid).getTime() === (isVAlid).getTime()) {
                string_date = getCurrentTimeFromStamp(req.params.date);
                unix_stamp = req.params.date;
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