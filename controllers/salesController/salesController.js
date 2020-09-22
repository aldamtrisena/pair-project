const {Warehouse, Sales} = require("../../models/index")

class SalesController {

    static inputSales(req,res){
        let query = req.query.input
        let data = []
        let sales =[]
        Warehouse.findAll()
        .then(result => {
            result = result.map(el => {
            data.push(el)
            })               
            res.render("Sales", {data,sales}) 
        if(query){
        Warehouse.findByPk(query)
            .then(salesInput => {
               
             sales.push(salesInput)
             console.log(sales)
             res.render("Sales" ,{data,sales})            
            })    
        }
        }) 
    }

    static postSalesController(req,res){

    }
}

module.exports = SalesController