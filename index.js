const express = require("express")

const app = express();
app.use(express.static('public'))

app.get("/api", async (req, res)=>{
    res.send(new Date())
})
app.get("/", async (req, res)=>{
    res.send(new Date())
})

const port = process.env.PORT || 8080
app.listen(port)