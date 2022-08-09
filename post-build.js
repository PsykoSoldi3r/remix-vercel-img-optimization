"use strict";

const fs = require("fs");

let rawdata = fs.readFileSync(".vercel/output/config.json");
let data = JSON.parse(rawdata);
console.log(data);
