const http = require("http");
const { URL } = require("url");
const routes = require("./routes");
const contacts = require("./mock/contacts");
const bodyParse = require("./helper/bodyParses");

const server = http.createServer((req, res) => {
  const parseUrl = new URL(`http://localhost:3000${req.url}`);
  req.query = Object.fromEntries(parseUrl.searchParams);
  let { pathname } = parseUrl;
  let id = "";

  const splitEndpoint = pathname.split("/").filter(Boolean);

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const route = routes.find(
    (route) => route.endpoint === pathname && route.method === req.method
  );

  if (route) {
    req.params = { id };

    res.send = (statusCode, body) => {
      res.writeHead(statusCode, { "Content-Type": "application/json" });
      res.end(JSON.stringify(body));
    };

    console.log(req.method);
    if (["POST", "PUT", "PATCH"].includes(req.method)) {
      bodyParse(req, () => route.handler(req, res));
      return;
    }

    route.handler(req, res);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(`404 Page Not found ${pathname}`);
});

server.listen(3000, console.log("🔥 Server start http://localhost:3000"));
