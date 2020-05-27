const http = require('http')
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // writeHead 优先级高于setHeader，并且writeHead只能用一次;
    res.end(`
<html>
    <head>
        <style>
            #container {
                display: flex;
                width: 800px;
                background-color: rgb(0, 255, 0);
            }
            .item-1 {
                width: 200px;
                height: 100px;
                align-self: center;
                background-color: rgb(255, 0, 0);
            }
            .item-2 {
                flex: 1;
                height: 200px;
                background-color: rgb(255, 255, 0);
            }
        </style>
    </head>
    <body>
        <div id="container">
            <div class="item-1"></div>
            <div class="item-2"></div>
        </div>
    </body>
</html>
`);
})
server.listen(8088);