const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome");
    return;
  }
  if (req.url === "/about") {
    res.end("welcome to the about page");
    return;
  }
  res.end(`
        <h1>oops</h1>
        <p>we can't find the page</p>
        <a href="/">Go Home</a>`);
});
server.listen(5000);
