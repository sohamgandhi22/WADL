const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 3000;
const publicDirectory = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = `${publicDirectory}${parsedUrl.pathname}`;
    
    // If root request, serve index.html
    if (pathname === `${publicDirectory}/`) {
        pathname = `${publicDirectory}/index.html`;
    }

    // Get the file extension
    const ext = path.parse(pathname).ext;

    // Mime types
    const mimeType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon'
    };

    fs.exists(pathname, function (exist) {
        if (!exist) {
            res.statusCode = 404;
            res.end(`File ${pathname} not found!`);
            return;
        }

        // Read file and serve it
        fs.readFile(pathname, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end(`Error getting the file: ${err}.`);
            } else {
                res.setHeader('Content-type', mimeType[ext] || 'text/plain');
                res.end(data);
            }
        });
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
