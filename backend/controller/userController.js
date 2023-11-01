const USER = require("../model/userSchema");
const ENQUIRE = require("../model/EnquireSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SecretKey = "SecretKey";
const SaltRound = 10;

const register = async (req, res) => {
  try {
    const { username, email, password, collegename, passingyear } = req.body;

    // Check if the email is already in use
    const existingUser = await USER.findOne({ email });
    if (existingUser) {
      return res.status(200).send({ msg: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, SaltRound);

    // Create the user
    const user = await USER.create({
      username,
      email,
      password: hashedPassword,
      collegename,
      passingyear,
    });

    console.log(user);
    res.status(200).send({ user });
  } catch (error) {
    console.error(error); // Use `console.error` to log errors
    res.status(500).send({ msg: "User not created", err: error.message });
  }
};

const login = async (req, res) => {
  try {
    let data = req.body;
    const { email, password } = data;
    console.log(data);

    // find User Is Valid or Not

    const login = await USER.findOne({ email: email });
    if (!login) {
      return res.status(200).send({ msg: "user not found" });
    }
    if ((await bcrypt.compare(password, login.password)) == false) {
      return res.status(200).send({ msg: "incorrect password" });
    }

    // Genrate Token

    const token = jwt.sign({ _id: login._id }, SecretKey, { expiresIn: "24h" });
    console.log(login, token);
    const loginemail = login.email;
    const loginpass = login.password;
    console.log(loginemail, loginpass);

    res
      .status(200)
      .send({ user: [loginemail, loginpass], token: token, userid: login._id });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
};

const dashboard = (req, res) => {
  return res.send({
    result: "My name is Nitin and You are Verify",
  });
};


const userQuery=async(req, res)=>{
  try{
    const {name, email, phone, Query} = req.body
    const enquiryData = await ENQUIRE.create({
      name : name,
      email: email,
      phone: phone,
      Query : Query
    })
    res.status(200).send({msg : "Thanks for registering with us. Our Team will get back to you soon."});

  }
  catch(err){
    console.log(`Error in Enquire Form ${err.message}`)
  }
}









module.exports = { register, login, dashboard, userQuery };
