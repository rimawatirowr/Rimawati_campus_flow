const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const safeUrl = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(ROOT, safeUrl === '/' ? 'index.html' : safeUrl);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const codeHtml = path.join(filePath, 'code.html');
    const indexHtml = path.join(filePath, 'index.html');
    filePath = fs.existsSync(codeHtml) ? codeHtml : indexHtml;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found: ' + safeUrl);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`CampusFlow Server berjalan di http://localhost:${PORT}`);
  console.log(`Halaman Login Utama: http://localhost:${PORT}/stitch_campusflow_academic_design_system/login_campusflow_2/code.html`);
});

