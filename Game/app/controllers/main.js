
function index(req,res){
    res.render("main/index", {
        titulo: "Página Principal"
    })
}

function sobre(req,res){
    res.render("main/sobre", {
        titulo: "Vigilantes da Floresta",
    })
}

module.exports = {index, sobre}