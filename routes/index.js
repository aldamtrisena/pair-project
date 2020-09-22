const route = require("express").Router()
const routeUSer = require("./user")
const routeWarehouses = require("./warehouses")
const routeSales = require("./sales")


route.get("/", (req,res) => {
    res.render("home")
})

route.use("/user", routeUSer) 
route.use("/stocks", routeWarehouses)
route.use("/sales",routeSales)

module.exports = route