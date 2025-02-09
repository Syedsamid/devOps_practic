import express from "express"
import path from "path";
import { fileURLToPath } from "url"; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 


const PORT = 5008;
const app = express();

app.use(express.static(path.join(__dirname, "build"))); 


app.get("/sam",(req,res)=>{
    try {
        res.status(200).json({message: "What are you doing"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "indexedDB.html"));
  });

app.listen(PORT,()=>{
    console.log(`Server is running at port number ${PORT}`);
})