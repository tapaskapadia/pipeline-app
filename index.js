var express = require('express')
var morgan = require('morgan');
var http = require('http')
var app = express()
var os = require('os');
var concat = require('concat-stream');
var port = process.env.PORT || 3000

app.set('json spaces', 2);
app.use(express.static('public',{index:false,extensions:['jpg']}));
app.use(morgan('combined'));
app.use(function(req, res, next){
  req.pipe(concat(function(data){
    req.body = data.toString('utf8');
    next();
  }));
});

app.all('/echo', (req, res) => {
  const echo = {
    path: req.path,
    headers: req.headers,
    method: req.method,
    body: req.body,
    cookies: req.cookies,
    fresh: req.fresh,
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    protocol: req.protocol,
    query: req.query,
    subdomains: req.subdomains,
    xhr: req.xhr,
    os: {
      hostname: os.hostname()
    }
  };
  res.json(echo);
});

app.get('/', (req, res) => {
    res.send("UP")
});

http.createServer(app).listen(port,() => console.log(`App listening on port ${port}!`));

module.exports = app;