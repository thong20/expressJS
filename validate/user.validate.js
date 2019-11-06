module.exports.postCreate = function(req, res, next){
    var errorsArr = [];
    if(!req.body.name) errorsArr.push("Name is required");
    if(!req.body.phone) errorsArr.push("Phone is required");
    if(errorsArr.length){
        res.render("./create/create.pug",
            {
                errors: errorsArr,
                value: req.body 
            }
        );
        console.log(errors);
        return;
    }
    next();
}