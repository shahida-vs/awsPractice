const express = require('express');
const app = express();

app.listen(3006,()=>console.log('Server Started'));

getCurrentTimeFromStamp = (timestamp) => {
   return new Date(parseInt(timestamp,10))
};
const isoToUnix = (d) => {
    console.log("date",d);
        return Date.parse(d)
}
app.get('/ec2-user/awsPractice/api/:date?',  (req, res) => {
    let unix_stamp = '';
    let string_date = '';
    if(req.params.date){
        console.log("entered",(req.params.date) == 'NaN');
        
        //console.log("came",new Date(req.params.date));
        
      //if(new Date(req.params.date) != 'Invalid Date'){  
          if(isNaN(req.params.date)){
              console.log("here it is");
              
              unix_stamp = isoToUnix(req.params.date);
            string_date = req.params.date;
          }
          else{
              console.log("no here");
              
              string_date = getCurrentTimeFromStamp(req.params.date);
              unix_stamp = req.params.date;
          }
      //}
    }
    else {
        string_date = (new Date());
        unix_stamp = Date.parse(string_date);
    }
    //const dt1 = isoToUnix(req.params.date);
    res.send(`{ "unix" : ${unix_stamp} , "utc" : ${string_date}`);
 })