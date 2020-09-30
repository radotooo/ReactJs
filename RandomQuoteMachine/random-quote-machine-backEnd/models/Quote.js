import mongoose from "mongoose";

const quoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 150
    },
    author: {
        type: String,
        required: true,
        max: 50
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Quote = mongoose.model("quote", quoteSchema)

export default Quote;