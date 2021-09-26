const express = require("express");
const app = express();

//security,performance,edge cases
//CRUD -> POST,GET,PUT,DELETE

app.get("/", (req, res) => {
  res.sendStatus(200); //updated succesfully
  res.send();
  // res.status(200).send("Hello");
});
app.post("/", (req, res) => {
  res.send("Hello Post");
});
app.put("/", (req, res) => {
  res.send("Hello Put");
});
app.delete("/", (req, res) => {
  // res.sendStatus(200);
  res.send("Hello Delete");
});

// WE can send anything so for minimum purpose we we use  res.json for json files only
// http response status codes
// 200:-Ok,201 :- For Created , 400:- Bad Request, 500:-Internal Server Error

//https:localhost:5000/products?limit=50&q="something"
app.get("/products", (req, res) => {
  res.send(req.query); //return all query coming from the given url
  // res.send(req.query.q);
});

//encodeURIComponent

////////////////////////////Conditions////////////////////

app.get("/ab?cd", (req, res) => {
  res.send("abcd");
});

app.get("abc+de", (req, res) => {
  res.send('ab(no limit on c)de"');
});
app.get("/xy*ab", (req, res) => {
  res.send("xy(anything in between)ab");
});

app.get(/k/, (req, res) => {
  res.send("use of regex starting with k");
});

app.get("/user/:userid/student/:studentid", (req, res) => {
  res.send(req.params); // http://localhost:5000/user/6/student/1
});

app.listen(3000);
