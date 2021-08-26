const express = require('express');

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(80, () => {
    console.log("App is listening at port 80");
});

app.get("/reportId=MQEC8253_472104521", function (req, res) {
    res.download("public/ftth.pdf");
});

