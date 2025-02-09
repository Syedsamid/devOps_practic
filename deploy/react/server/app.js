import express from "express"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PORT = 9087;
const app = express();

app.use(express.static(path.join(__dirname, "dist")));


app.get("/samid",(req,res)=>{
    try {
        res.status(200).json({message: "Nice to meet you"})
    } catch (error) {
        res.status(500).json({message:error.response.data})
    }
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "indexedDB.html"));
  });

app.listen(PORT,()=>{
    console.log(`Port is running at ${PORT}`);
})