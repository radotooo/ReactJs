import mongoose from "mongoose";
import config from "config";
const db = config.get("mongoURL");

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
}

export default connectDB; 