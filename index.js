const express = require("express");
var app = express();

var domain = function(req, res) {
 if (req.hostname == "bots.rovelstars.ga") res.redirect(301, `https://discord.rovelstars.com${req.path}`);

 if (req.hostname == "rovelstars.ga") res.redirect(301, `https://docs.rovelstars.com${req.path}`);

 if (req.hostname == "paste.rovelstars.ga") res.redirect(301, `https://paste.rovelstars.com${req.path}`);

 if(req.hostname=="api.rovelstars.ga") res.redirect(301, `https://api.rovelstars.com${req.path}`);

 if(req.hostname=="blog.rovelstars.ga") res.redirect(301, `https://blog.rovelstars.com${req.path}`);

 else{
  res.send(404, "Are you the one that was lost in space?");
 }
}
app.use(domain);

app.listen(process.env.PORT);
console.log("Listening on port "+process.env.PORT);