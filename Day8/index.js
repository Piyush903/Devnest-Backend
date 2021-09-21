const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// app.get('/', (req, res, next) => {
//     console.log("In first");
//     if (req.query.admin === 'true') {
//         next()
//     }
//     else {
//         res.status(400).send("should be admin");
//     }

// }, (req, res) => {
//     res.status(200)
//     res.json(req.query)
// })

const checkAdmin = (req, res, next) => {
  if (req.query.admin == "true") {
    next();
  } else {
    res.status(400).send("must be admin");
  }
};

const sendData = (req, res) => {
  res.json(req.query);
  // console.log("is admin");
};
// app.use(checkAdmin);
app.get("/", sendData);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log("req.body->", req.body);
  res.json({ text: req.body });
});

app.listen(5000);
