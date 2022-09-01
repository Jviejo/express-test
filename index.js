const express = require("express")

const app = express();

app.get("/", async (req, res)=>{
    res.send(new Date())
})

app.listen(4444)