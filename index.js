const express = require("express");
var app = express();

var domain = function(req, res) {
 if (req.hostname == "bots.rovelstars.ga") res.redirect(`https://discord.rovelstars.com${req.path}`);

 if (req.hostname == "rovelstars.ga") res.redirect(`https://docs.rovelstars.com${req.path}`);

 if (req.hostname == "paste.rovelstars.ga") res.redirect(`https://paste.rovelstars.com${req.path}`);

 if(req.hostname=="api.rovelstars.ga") res.redirect(`https://api.rovelstars.com${req.path}`);

 if(req.hostname=="blog.rovelstars.ga") res.redirect(`https://blog.rovelstars.com${req.path}`);

 else{
  res.send("Are you the one that was lost in space?");
 }
}
app.use(domain);

app.listen(process.env.PORT);
console.log("Listening on port "+process.env.PORT);