import { connect } from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "";

const dbConnect = () => {
    try {
        const conn = connect(MONGO_URL);
        console.log("Database connection succesfully!")
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect;
