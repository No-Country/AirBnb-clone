import * as dotenv from "dotenv";
dotenv.config();

const config = {
    origin:"http://localhost:3000",
    origin2:"http://localhost:3000",
    port: process.env.MONGODB_PORT,
    mongoURI: process.env.MONGODB_URI,
    mongoURI: process.env.MONGODB_URI,
    googleClientId: process.env.CLIENT_ID,
    googleClientSecret: process.env.CLIENT_SECRET,
    googleRedirectUri: process.env.CLIENT_URL,
    accessTokenMercadoPago: process.env.ACCESS_TOKEN
};
export default config;