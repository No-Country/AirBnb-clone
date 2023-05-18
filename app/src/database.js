import "dotenv/config";
import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.MongoURI)
  console.log("Nueva conexion realizada con MongoDB Atlas");
} catch (error) {
  console.log("Se ha generado un error: " + error);
}