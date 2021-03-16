const express = require("express");
var app = express();

var domain = function(req, res) {
 if (req.hostname == "bots.rovelstars.ga"){
  res.set("location", `https://discord.rovelstars.com${req.path}`);
  res.status(301).send();
}
 if (req.hostname == "rovelstars.ga"){
  res.set("location", `https://docs.rovelstars.com${req.path}`);
  res.status(301).send();
}
 if (req.hostname == "paste.rovelstars.ga"){
 res.set("location", `https://paste.rovelstars.com${req.path}`);
 res.status(301).send();
}
 if(req.hostname=="api.rovelstars.ga"){
  res.set("location", `https://api.rovelstars.com${req.path}`);
  res.status(301).send();
}
 if(req.hostname=="blog.rovelstars.ga"){
  res.set("location", `https://blog.rovelstars.com${req.path}`);
  res.status(301).send();
}
 else{
  res.status(404).send("Are you the one that was lost in space?");
 }
}
app.use(domain);

app.listen(process.env.PORT);
console.log("Listening on port "+process.env.PORT);