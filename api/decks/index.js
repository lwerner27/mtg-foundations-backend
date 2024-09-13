import express from "express"
import prisma from "../../prisma/index.js"

const decks = express.Router()

decks.get("/", async (req, res) => {
    const decks = await prisma.deck.findMany()
    res.status(200).json({ decks, count: decks.length })
})

decks.post("/create", async (req, res) => {
    const deck = await prisma.deck.create({ data: req.body})
    res.status(201).json(deck)
})

export default decks