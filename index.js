import express from "express";
import cors from "cors";
import 'dotenv/config'

const app = express();
app.use(cors());
// app.use(express.json())

app.listen('5002', () => console.log('listening on port 5002')) 

app.get('/', (req, res) => { 
    res.send('You did it! 🥳'); 
  });
