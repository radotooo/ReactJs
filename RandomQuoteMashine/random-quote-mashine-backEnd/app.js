import express from "express"
import Quote from "./models/Quote.js"
import connectDB from "./config/db.js"

const app = express()
const PORT = process.env.PORT || 8000;



// Connect Database
connectDB();

//Middleware
app.use(express.json())


app.post('/', async (req, res) => {

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



app.get('/', async (req, res) => {
    try {
        var result = await Quote.aggregate([{ $sample: { size: 1 } }])
        res.send(result)
    } catch (error) {
        res.send(error.message)

    }
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})  