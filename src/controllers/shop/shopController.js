const getShopView = (req, res) => {
    res.send("Mostrar vista de shop")
}

const getItemView = (req, res) => {
    res.send(`Mostrar vista de producto ${req.params.id}`)
}

const addToCart = (req, res) => {
    res.send(`Añadir producto ${req.params.id} al carrito`)
}

const getCartView = (req, res) => {
    res.send("Mostrar vista de carrito")
}

const CreatePurchase = (req, res) => {
    res.send("Confirmar compra")
}

module.exports = {
    getShopView,
    getItemView,
    addToCart,
    getCartView,
    CreatePurchase
}