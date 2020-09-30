import express from "express"
import Quote from "./models/Quote.js"
import connectDB from "./config/db.js"

import cors from "cors"

const app = express()
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

//Middleware
app.use(cors())
app.use(express.json())

app.post('/api', async (req, res) => {
    const { title, author } = req.body
    try {
        const quote = new Quote({
            title,
            author
        })
        await quote.save();
        res.send("user register")
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/api', async (req, res) => {
    try {
        var result = await Quote.aggregate([{ $sample: { size: 1 } }])
        res.send(result)
        console.log(result);
    } catch (error) {
        res.send(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
}) 