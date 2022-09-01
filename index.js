const express = require("express")

const app = express();
app.use(express.static('public'))

app.get("/api", async (req, res)=>{
    res.send(new Date())
})

app.listen(4444)