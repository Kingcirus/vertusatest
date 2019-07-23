const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken');

const {registerValidation, loginValidation} = require('../validation');

router.post('/register', async (req, res) => {
    //Validation
    const { error } = registerValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    //Checking if the user already in DB
    const emailExists = await User.findOne({
        email:req.body.email
    });
    if(emailExists){
        return res.status(400).send('Email already exists');
    }

    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.send({ user:user._id} );
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/login', async (req,res) => {
    //Validation
    const { error } = loginValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    //Checking if the user already exists
    const user = await User.findOne({
        email:req.body.email
    });
    if(!user){
        return res.status(400).send('Email or password is wrong');
    }
    //If password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);

    if(!validPass){
        return res.status(400).send('Email or password is wrong!');
    }

    //Create and assign a token
    const token = jwt.sign({__id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({token,userid:user._id});
});

router.get('/delete/:id', async (req, res, next) => {
    const id = req.params.id;
    
    await User.findByIdAndDelete(id, (err)=>{
        if(err){
            console.log('Error deleting');
            console.log(err)
        }else{
            console.log('Deleted user!');
        }

    });
    res.send('User deleted!');
});

router.post('/update/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    const {email, name, password} = req.body;
    const updatedUser = {};
    if(email){
        updatedUser.email = email;
    }

    if(name){
        updatedUser.name = name;
        
    }

    if(password){
        //Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        updatedUser.password = hashedPassword;
    }

    const updateUser = await User.updateOne({_id:id}, updatedUser);
    if(!updateUser){
        return res.status(400).send('Error updating!');
    }

    return res.status(200).send('data updated');
    
});

//Get all users
router.get('/get-users', verify, async (req, res) => {
    
    const users = await User.find();

    res.status(200).json({users:users});
    
});

//Get user by id
router.get('/get-user/:id', verify, async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);

    res.status(200).json({user:user});
    
});
module.exports = router;