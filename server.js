var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var verifier = require("email-verify");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

// this uses the module called email-verify to validate true email through SMTP checking
app.post("/verify", function(req, res){
    //set a flag
    var isValid = true;

    //if the email isn't valid, isValid will be false
    verifier.verify(req.body.email, function(err, info){
        if( err ){
            console.log(err);
            console.log("called error");
            isValid = false;
        }
        else {
            isValid = false;
            console.log("Successes (T/F): " + info.success);
            console.log("Info: " + info.info);
        }
    });
    res.json({isValid: isValid});
});


var port = process.env.PORT || 4000;

app.listen(port, function(){
    console.log("Atlas Medical Service Listening on " + port + "!");
});

