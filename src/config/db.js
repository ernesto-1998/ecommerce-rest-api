import { connect } from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "";
const MONGO_USER = process.env.MONGO_USER || "";
const MONGO_PASS = process.env.MONGO_PASS || "";
const MONGO_DB = process.env.MONGO_DB || "";

const config = {
    useNewUrlParser: true,
    user: MONGO_USER,
    pass: MONGO_PASS,
    dbName: MONGO_DB
}

const dbConnect = async () => {
    try {
        const conn = await connect(MONGO_URL, config);
        console.log("Database connection succesfully!")
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect;
