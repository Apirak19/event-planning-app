const dayjs = require('dayjs')
const express = require('express')
const app = express()

app.get("/", (req, res) => {
   res.end("Homepage")
})

app.get("/hello", (req, res) => {
   res.end("helloooooo")
})

app.listen(5000, () => {
   console.log("server started on 5000");
})