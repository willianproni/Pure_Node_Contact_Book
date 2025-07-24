function bodyParse(request, callback) {
  body = "";

  request.on("data", (chunk) => {
    body += chunk;
  });

  request.on("end", () => {
    body = JSON.parse(body);

    request.body = body;

    callback();
  });
}

module.exports = bodyParse;
