import * as dotenv from "dotenv";
dotenv.config();

const config = {
    port: process.env.MONGODB_PORT,
    mongoURI: process.env.MONGODB_URI,
};

export default config;