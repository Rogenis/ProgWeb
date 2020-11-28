
const express = require("express")
const handlebars = require("express-handlebars")
const logger = require("morgan")
const router = require("./config/routes")
const app = express()

app.use("/img", express.static(`${__dirname}/public/img`))

app.engine("handlebars", handlebars())
app.set("view engine", "handlebars")
app.set("views", `${__dirname}/app/views`)

app.use(logger("combined"))
app.use(router)

app.listen(3000, function(){
    console.log("Running Port 3000")
})