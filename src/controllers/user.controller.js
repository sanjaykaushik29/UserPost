const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secretKey = process.env.JWT_SECRET_KEY

exports.create = async (req, res) => {
    try {
        const { username, email, password, role } = req.body
        console.log(req.body);
        if (!(username && email && role && password)) {
            return res.status(400).send("All input is required");
        }
        console.log(email, password);
        
        const oldUser = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        console.log("oldUser",oldUser);
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        const payload = { username, email, role }
        console.log(payload);
        let verified = null
        if(role.toString().toLowerCase() == 'seller'){
            verified = true
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("verified", verified);
        const user = await User.create({ ...payload,isVerified : verified, password: hashedPassword });
        console.log("user", user.user);
        const jwtToken = jwt.sign({ userId: user.id }, secretKey)
        user.token = jwtToken
        await user.save()
        return res.send({ "message": "data save sucessfully", result: user,password:password,token: jwtToken }).status(200)
    } catch {
        return res.status(500).send({ error: 'Error registering user' });
    }
}

exports.login = async (req, res) => {
    try {
        console.log(req.body);
        const {email, password } = req.body
        if ( !email) {
            res.status(400).send({ msg: "Username and Email is required." })
        }
        const user = await User.findOne({ where: { email } })
        if (!user) {
            res.status(401).send({ error: "Unauthorized User" })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).send({ error: "Invalid Password"})
        }
        res.send({ token: user,password:password}).status(200);

    } catch (error) {
        res.send({ error: 'Error logging in user' }).status(500);
    }
}

exports.get_users = async (req, res) => {
    console.log(req.url);
    try {
        const result = await User.findAll()
        res.send({ msg: "data fetched!!", count: result.length, result }).status(200)
    } catch {
        res.status(500).send({ error: "internal server error" });
    }
}