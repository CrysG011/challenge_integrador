const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Mostrar vista de shop")
})

router.get("/item/:id", (req, res) => {
    res.send(`Mostrar vista de producto ${req.params.id}`)
})

router.post("/item/:id/add", (req, res) => {
    res.send(`Añadir producto ${req.params.id} al carrito`)
})

router.get("/cart", (req, res) => {
    res.send("Mostrar vista de carrito")
})

router.post("/cart", (req, res) => {
    res.send("Confirmar compra")
})
module.exports = router 