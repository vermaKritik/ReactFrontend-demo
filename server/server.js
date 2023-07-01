const express = require("express");

const app = express();

// JSON Parser
app.use(express.json());

// Serving static files
app.use(express.static(`${__dirname}/public`));
// app.use(express.static(`${__dirname}/build`));

// Routes
app.get("/", (req, res) => {
  console.log(req);
  res.send("hello");
  //     res.sendFile('build/index.html', { root: __dirname });
});

app.get("/json", (req, res) => {
  console.log(req);
  res.json({ msg: "hello" });
  //     res.sendFile('build/index.html', { root: __dirname });
});

app.get("/api/data", (req, res) => {
  console.log(req);
  res.json({ msg: "hello" });
  //     res.sendFile('build/index.html', { root: __dirname });
});

app.all("*", (req, res, next) => {
  console.log("page not found");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server is running on ${port} .......`);
});
