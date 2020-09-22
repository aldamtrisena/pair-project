const route = require("express").Router()
const express = require("express")
const SalesController = require("../controllers/salesController/salesController")

//public akses css
route.use(express.static("public"))
//from index
route.get("/", SalesController.inputSales)
route.post("/",SalesController.postSalesController)

module.exports = route