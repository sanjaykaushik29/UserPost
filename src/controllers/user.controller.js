const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secretKey = process.env.JWT_SECRET_KEY

exports.create = async (req, res) => {
    try {

        const { username, email, password, roll } = req.body
        if (!(username && email)) {
            res.status(400).send("All input is required");
        }
        const oldUser = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        const payload = { username, email, roll }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ ...payload, password: hashedPassword });
        const jwtToken = jwt.sign({ userId: user.id }, secretKey)
        res.send({ "message": "data save sucessfully", result: user, token: jwtToken })
    } catch {
        res.status(500).json({ error: 'Error registering user' });
    }
}

exports.login = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username && !email) {
            res.status(400).json({ msg: "Username and Email is required." })
        }
        const user = await User.findOne({ where: { email } })
        if (!user) {
            res.status(401).json({ error: "Unauthorized User" })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ error: "Invalandid Password"})
        }
        
        const token = jwt.sign({ userId: user.id }, secretKey);
        res.json({ token });

    } catch (error) {
        res.status(500).json({ error: 'Error logging in user' });
    }
}

exports.get_users = async (req, res) => {
    try {
        const result = await User.findAll()
        res.send({ msg: "data fetched!!", count: result.length, result })
    } catch {
        res.send("not fetchjed")
    }
}