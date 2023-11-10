const getProductListView = (get, res) => {
    res.send("Listado de productos")
}

const getCreateProductView = (req, res) => {
    res.send("Obtener vista de crear producto");
}

const createProduct = (req, res) => {
    res.send("Crear producto");
}

const getEditProductView = (req, res) => {
    res.send(`Obtener vista de modificar producto ${req.params.id}`);
}

const editProduct = (req, res) => {
    res.send(`Buscar y modificar el producto ${req.params.id}`);
    console.log(req.params, req.body);
}

const deleteProduct = (req, res) => {
    res.send(`Buscar y eliminar el producto ${req.params.id}`);
    console.log(req.params);
}

module.exports = {
    getCreateProductView,
    createProduct,
    getProductListView,
    getEditProductView,
    editProduct,
    deleteProduct
}; 