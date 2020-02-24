const mongoose=require('mongoose')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
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
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ], 
    roles:{
        type:[String],
        default:'user'

    },
    allowAccess:{
        type:Boolean,
        default:true
    }
})



// userSchema.statics.findByCredentials = function (email, password) {
//     const User = this
//     User.findOne({ email })
//         .then(function (user) {
//             console.log('in hello i m ')
//             res.send(user)

//         })
//         .catch(function (err) {
//             return Promise.reject(err)
//             // return new Promise(function(resolve, reject){
//             //  reject(err) 
//             // })
//         })
// }

userSchema.statics.findByCredentials = function (email, password) {
    const User = this
    return User.findOne({ email })
        .then(function (user) {
            if (!user) {
                return Promise.reject({ errors: 'invalid email / password' })
            }

            return bcryptjs.compare(password, user.password)
                .then(function (result) {
                    if (result) {
                        return Promise.resolve(user)
                        // return new Promise(function(resolve, reject){
                        //     resolve(user)
                        // })
                    } else {
                        return Promise.reject({ errors: 'invalid email / password' })
                    }
                })
        })
        .catch(function (err) {
            return Promise.reject(err)
            // return new Promise(function(resolve, reject){
            //  reject(err) 
            // })
        })
}

userSchema.methods.generateToken = function () {
    const user = this
//    console.log('in gen token')
    const tokenData = {
        _id: user._id,
        username: user.username,
        createdAt: Number(new Date())
    }

    const token = jwt.sign(tokenData, 'jwt@123')
 //   console.log(token)
    user.tokens.push({
        token
    })
//    console.log(user.tokens)
    return user.save()
        .then(function (user) {
            console.log('inside user save')
            return Promise.resolve(token)
        })
        .catch(function (err) {
            console.log('promise reject')
            return Promise.reject(err)
        })
}


userSchema.pre('save',function(next){
    const user=this
    if (user.isNew) {
    bcryptjs.genSalt(10)
        .then(function(salt){
            bcryptjs.hash(user.password,salt)
                .then(function(encryptedPassword){
                    user.password=encryptedPassword
                    next()
                })
        })
    }else{
        next()
    }
})

userSchema.statics.findByToken = function (token) {
    const User = this
    let tokenData
    try {
        tokenData = jwt.verify(token, 'jwt@123')
    } catch (err) {
        return Promise.reject(err)
    }

    return User.findOne({
        _id: tokenData._id,
        'tokens.token': token
    })
}


const User=mongoose.model('User',userSchema)



module.exports={
    User
}