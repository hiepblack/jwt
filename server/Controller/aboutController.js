import { Users } from "../Model/User.js";

export const getUser = async (req, res) => {
  const userData = await Users.find({});
  console.log(userData);
  res.send(userData);
};
export const postUser = (req, res) => {
  const { username, password } = req.body;
  const about = new Users(req.body);
  about.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({ message: "successfull", user: user });
  });
};
