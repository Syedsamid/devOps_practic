import express from "express";
import path from "path";  // new line
import { fileURLToPath } from "url"; // new line


const __filename = fileURLToPath(import.meta.url); // new line
const __dirname = path.dirname(__filename); // new line

const  PORT  = 3002;
const app = express()

app.use(express.static(path.join(__dirname, "build"))); // new line

app.get("/samid",(req,res)=>{
    try {
        res.status(200).json({message:"hello samid"})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });


app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})