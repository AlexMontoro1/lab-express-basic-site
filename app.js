// Lab

const express = require("express")
const app = express()


app.use( express.static("public"))

app.get("/home", (req, res) => {

    res.sendFile(__dirname + "/views/index.html")


})

app.get("/home/:link", (req, res) => {

    if (req.params.link === __dirname + "/views/about.html") {
        res.sendFile(__dirname + "/views/about.html")
    }
})




const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  