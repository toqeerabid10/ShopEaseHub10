const userModel = require('../models/usermodel.js');
const { hashPassword, comparePassword } = require('../helpers/authhelper.js'); // Destructure the functions
const JWT = require('jsonwebtoken');

const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        // Validations
        if (!name) return res.send({ message: "Name is Required" });
        if (!email) return res.send({ message: "Email is Required" });
        if (!password) return res.send({ message: "Password is Required" });
        if (!phone) return res.send({ message: "Phone no is Required" });
        if (!address) return res.send({ message: "Address is Required" });

        // Check user
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Registered, please login",
            });
        }

        // Register user
        const hashedPassword = await hashPassword(password);

        // Save user
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
        }).save();

        res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error,
        });
    }
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
            });
        }

        // Check user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered",
            });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            });
        }

        // Token
        const token = await JWT.sign({ _id: user._id }, 'ecommerce', {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "Login successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
};

const testController=(req,res)=>{
    res.send('protected route')
}

module.exports = {
    registerController,
    loginController,
    testController
};


