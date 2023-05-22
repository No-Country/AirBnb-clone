import * as dotenv from "dotenv";
dotenv.config();

const config = {
    origin:"http://localhost:3000",
    port: process.env.PORT,
    mongoURI: process.env.MONGODB_URI,
    googleClientId: process.env.CLIENT_ID,
    googleClientSecret: process.env.CLIENT_SECRET,
    googleRedirectUri: process.env.CLIENT_URL,
};
export default config;