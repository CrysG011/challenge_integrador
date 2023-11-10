const express = require("express")
const router = express.Router()

router.get("/", (get, res) => {
    res.send("Listado de productos")
})

router.get("/create", (req, res) => {
    res.send("Obtener vista de crear producto");
});

router.post("/create", (req, res) => {
    res.send("Crear producto");
});

router.get("/edit/:id", (req, res) => {
    res.send(`Obtener vista de modificar producto ${req.params.id}`);
});

router.put("/edit/:id", (req, res) => {
    res.send(`Buscar y modificar el producto ${req.params.id}`);
    console.log(req.params, req.body);
});

router.delete("/delete/:id", (req, res) => {
    res.send(`Buscar y eliminar el producto ${req.params.id}`);
    console.log(req.params);
});


module.exports = router