const User = require("../modal/UserModal");
async function CreateUser(req, res) {
  try {
    const { number } = req.body;
    const newUser = await User.create({
      number: number,
    });
    res.status(200).json({ message: "User Created Successfully", newUser });
    console.log(newUser);
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
    console.log(err);
  }
}
async function LoginUser(req, res) {
  try {
    const { number } = req.body;
    const user = await User.findOne({ number: number });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Enter OTP", user });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err });
  }
}

module.exports = { CreateUser, LoginUser };
