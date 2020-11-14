/*var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081);

function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to Dominos!");
    res.end();
  } else if (req.url === "/contact") {
    const data = {
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com"
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    //res.write('error');
    res.end();
  }
}

module.exports = httpServer;*/
const express = require('express');
const app = express();

//pipeline and middleware
app.use(express.json());

app.get('/welcome', (req, res) => {
  res.status(200);
  res.setHeader('content-type', 'text/plain');
    res.send("Welcome to Dominos");
});
app.get('/contact',(req,res)=>{
  const data={
phone: '18602100000',
email: 'guestcaredominos@jublfood.com'
};
  res.status(200);
  res.setHeader('content-type', 'application/json');
  res.send(data);
});
app.listen(8081);
module.exports = app;
