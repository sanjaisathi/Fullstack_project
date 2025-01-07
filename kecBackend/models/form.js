var mdb= require('mongoose')

var formSchema = mdb.Schema({
    name:String,
    phoneNumber:Number,
    email:String
})

var form_schema = mdb.model("forms",formSchema)
module.exports = form_schema