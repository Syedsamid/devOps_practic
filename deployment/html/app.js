import express from "express"
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = 6091;
const app = express();

app.use(express.static(path.join(__dirname)))

app.get("/sam",(req,res)=>{
    try {
        res.status(200).json({message:"YAAA I am samid"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,"build","index.html"))
})

app.listen(PORT,()=>{
    console.log(`Server is Runngin at Port no ${PORT}`);
})