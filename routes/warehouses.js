const route = require("express").Router()
const express = require("express")
const WareHouseController = require("../controllers/warehouseController/warehouseController")


//akkses css in public folder
route.use(express.static("public"))
//home stoks to see stock
route.get("/",WareHouseController.readAllStock)
//to add stok
route.get("/add-stocks",WareHouseController.inputGetStock)
route.post("/add-stocks/",WareHouseController.inputPostStock)
route.get("/update/:id",WareHouseController.updateGetStock)
route.post("/update/:id", WareHouseController.updatePostStock)
route.get("/delete/:id", WareHouseController.deleteStock)

module.exports = route
