const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.headers)
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // writeHead 优先级高于setHeader，并且writeHead只能用一次;
    res.end(
`<html maaa=a >
<head>
    <style>
body div #myid{
    width:100px;
    height: 100px;
    background-color: #ff5000;
}
    </style>
</head>
<body>
    <div id="myid">
    </div>
</body>
</html>`);
});
server.listen(8088)
