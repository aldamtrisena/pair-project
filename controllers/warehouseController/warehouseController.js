const {Warehouse} = require("../../models/index")

class WareHouseController {

    static readAllStock(req,res){
        Warehouse.findAll()
            .then(data => {
                // console.log(data)
                res.render("tablestocks", {data})
            })
            .catch(err =>{
                res.send("failed")
                console.log(err)
            })
    }

    static inputGetStock(req,res){
        res.render("addStock",)
    }

    static inputPostStock(req,res){
        const {sku,products_name,quantity,category,price}=req.body
        let value = {
            sku,
            products_name,
            quantity,
            category,
             price
        }
        Warehouse.create(value)
            .then(data =>{
                res.redirect("/stocks")
            })
            .catch(err => {
                console.log(err)
                res.redirect("failed")
            })

    }

    static updateGetStock(req,res){
        Warehouse.findByPk(req.params.id)
            .then(data =>{
                // console.log(data)
                res.render("updateStock", {data})
            })
            .catch(err => {
                res.send(err)
            })

    }

    static updatePostStock(req,res){
        const {sku,products_name,quantity,category,price}=req.body
        let value = {
            sku,
            products_name,
            quantity,
            category,
            price
        }
        Warehouse.update(value, {
            where : {
                id : +req.params.id
            }
        })
        .then(res.redirect("/stocks"))
        .catch(err => {
            res.send(err)
        })
    }

    static deleteStock(req,res){
        
        Warehouse.destroy({
            where:{
                id : req.params.id
            }
        })
        .then(res.redirect("/stocks"))
        .catch(err => {
          res.send(err)
            console.log(err)

        })
    }

    
}

module.exports = WareHouseController