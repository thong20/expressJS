var db = require('../db.js');

var products = db.get('products').value();
module.exports.products = function(req, res){
    var page = req.query.page || 1; // n
    var perPage = 8;// x

    var start = (page - 1) * perPage;
    var end = page * perPage;
    res.render('./products/products.pug',
        {products: products.slice(start, end)}
    );
}





