const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("Obtener vista de login");
});

router.post("/login", (req, res) => {
    res.send("Verificar login");
});

router.get("/register", (req, res) => {
    res.send("Obtener vista de registro");
});

router.post("/register", (req, res) => {
    res.send("Comprobar registro");
});

router.get("/logout", (req, res) => {
    res.send("Logout")
})

module.exports = router