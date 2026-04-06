import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 8000;
const DBURL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(DBURL);
    console.log("connected with database");
  } catch (error) {
    console.log(error, "failed to connect with database");
  }
};

app.listen(PORT, (req, res) => {
  console.log(`server is running on port: ${PORT}`);
  connectDB();
});
