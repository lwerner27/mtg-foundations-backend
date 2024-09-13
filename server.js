import express from "express"
import api from "./api/index.js"

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.use("/api", api)
app.get("*", (req, res) => {
    res.status(404).end()
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})