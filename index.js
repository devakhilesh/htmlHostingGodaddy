const express = require("express")
const cors = require("cors")

const app = express()

const path = require("path")
const fs = require("fs")

app.use(cors())
  
//to show
app.get("/img",async (req, res)=>{
    return res.sendFile(path.join(__dirname, "image.png"))
}) 

// use to download 
app.get("/pdf",async (req, res)=>{
    return res.sendFile(path.join(__dirname, "ZBET2024.pdf"))
})

app.get("/",async (req, res)=>{
    return res.sendFile(path.join(__dirname, "update.html"))
})


 
const port = 3001
app.listen(port, ()=>{
    console.log("app is running on port 3001")
})

