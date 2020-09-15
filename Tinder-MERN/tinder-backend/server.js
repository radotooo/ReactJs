import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import Cards from "./dbCards.js"
import connectionString from "./dbAccess.js"

// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_string = connectionString
// Middlewares

app.use(express.json()) // this needet or express will not recognise json
app.use(cors())

// Db config
mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
// API Endpoints
app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;
    console.log(req);
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get("/tinder/cards", (req, res) => {

    Cards.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})


// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))          