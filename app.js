const express = require("express")
const app = express()
const PORT = 3000
const path = require("path");


const mainRouter = require("./routes/main")

app.use("/", mainRouter)
app.use(express.static(path.join(__dirname,"public")))


app.listen(3000, ()=>{
    console.log(`Online in http://localhost:${PORT}`)
})