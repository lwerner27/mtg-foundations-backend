import express from "express"
import decks from "./decks/index.js"

const api = express.Router()

api.use("/decks", decks)

export default api