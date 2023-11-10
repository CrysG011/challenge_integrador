const express = require("express")
const router = express.Router()
const controller = require("../../controllers/admin/productsController.js")

router.get("/", controller.getProductListView)

router.get("/create", controller.getCreateProductView);

router.post("/create", controller.createProduct); 

router.get("/edit/:id", controller.getEditProductView);

router.put("/edit/:id", controller.editProduct);

router.delete("/delete/:id", controller.deleteProduct);


module.exports = router