import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./routes/index.js";

const app = express();

const corsOptions ={
  origin:'https://frontend-six-inky.vercel.app/', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json({ limit: '70mb' }));
app.use(express.urlencoded({ limit: '70mb', extended: true }));

app.use('/api', router);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connect to MongoDB successfully!!!");
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

