import express from "express";
import path from "path";
import { fileURLToPath } from "url"; //new line

const __filename = fileURLToPath(import.meta.url); //new line
const __dirname = path.dirname(__filename); //new line

const app = express();
const PORT = 3002;

app.use(express.static(path.join(__dirname, "build"))); //new line

app.get("/samid", (req, res) => {
  try {
    res.status(200).json({ message: "Express Apis" });
  } catch (error) {
    res.status(500).json({ message: error.response.data });
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port no ${PORT}`);
});
