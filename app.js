const express = require('express');

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(process.env.PORT || 5000, () => {
    console.log("App is listening at port 80");
});

app.get("/",function(req,res){
    res.send("invalid report ID");
})
app.get("/reportId=MQEC8253_472104521", function (req, res) {
    console.log('anu cert scanned');
    res.download("public/ftth.pdf");
});

app.get("/reportId=MQEC8253_472106429", function (req, res) {
    console.log('thaatha cert scanned');
    res.download("public/ftth.pdf");
});

