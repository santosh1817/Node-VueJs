const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        minlength:5
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:128
    },
    roles:{
        type:[String],
        default:'user'

    },
    allowAccess:{
        type:Boolean,
        default:true
    }
})



userSchema.statics.findByCredentials = function (email, password) {
    const User = this
    User.findOne({ email })
        .then(function (user) {
            console.log('in hello i m ')
            res.send(user)

        })
        .catch(function (err) {
            return Promise.reject(err)
            // return new Promise(function(resolve, reject){
            //  reject(err) 
            // })
        })
}

const User=mongoose.model('User',userSchema)



module.exports={
    User
}