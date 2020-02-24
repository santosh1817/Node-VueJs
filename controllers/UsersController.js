const express=require('express')
const router=express.Router()
const bcryptjs=require('bcryptjs')
const _ = require('lodash')
const {User}=require('../models/User')
const {authenticateUser} = require('../middlewares/authentication')


router.get('/',authenticateUser,function(req,res){
//    console.log('in')
    User.find()
    .then(function(users){
        res.send(users)
    })
    .catch(function(err){
        res.send(err)
    })

})

router.get('/:username',function(req,res){
    
//    console.log(req.params.username)
    User.findOne({'username':req.params.username})
    .then(function(users){
        res.send(users)
    })
    .catch(function(err){
        res.send(err)
    })
    
})



router.post('/register',function(req,res){
    const body=req.body
    const user=new User(body)

    user.save()
        .then(function(user){
            res.send(user)
        })
        .catch(function(err){
            res.send(err)
        })

})

// router.post('/login', function (req, res) {
//     const email = req.body.email
//     const password=req.body.password
// //    
//     User.findOne( {email:email,password:password} )
//         .then(function (user) {
//             if(!user){
//                 res.send({notice:'incorrect email/pass'})
//             }
//             else{
//                 res.send({user,notice:'Logged in successfully'})    
//             }    
//         })

//         .catch(function (err) {
//         //    res.send({err,notice:'incorrect email/pass'})
//             //console.log('error')
//            // res.send("hello")
//         })

// })

router.post('/login',function(req,res){
    const body=req.body
    // User.findOne({email:body.email})
    //     .then(function(user){
    //         if(!user){
    //             res.status('404').send('invalid email/password')
    //         }

    //         bcryptjs.compare(body.password,user.password)
    //         .then(function(result){
    //             if(result){
    //                 res.send({user,notice:'successfully logged in'})
    //             }else{
    //                 res.status('404').send('invalid email/password')
    //             }
    //         })
    //     })

    User.findByCredentials(body.email, body.password)
        .then(function (user) {
            return user.generateToken()
        })
        .then(function (token) {
        //    res.send({ token })
            res.setHeader('x-auth',token).send({})
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.get('/account', authenticateUser, function (req, res) {
    const { user } = req
    res.send(user)
})

router.delete('/logout', authenticateUser, function (req, res) {
//    console.log('request')
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
        .then(function () {
            res.send({ notice: 'successfully logged out' })
        })
        .catch(function (err) {
            res.send(err)
        })
})


router.delete('/delete',function(req,res){
    const email=req.body.email

    User.deleteOne({email:email})
        .then(function(user){
            res.send({user,notice:'this user deleted'})
        })
        .catch(function(){
            res.send({user,notice:'this user deleted'})
        })



})

router.put('/update/:username',function(req,res){
    
    //    console.log(req.params.username)
    const body = _.pick(req.body, ['username', 'email', 'password'])
        User.findOneAndUpdate({'username':req.params.username},body,{ new: true, runValidators: true })
        .then(function(users){
            res.send({users,notice:'this user got updated successfully'})
        })
        .catch(function(err){
            res.send(err)
        })
        
})
    


module.exports={
    usersRouter:router
}