const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "jade");
app.set("views", path.join(_dirname));
