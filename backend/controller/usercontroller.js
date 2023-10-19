const user = require("../model/user");

const postdata = async (req, res) => {
  try {
    const { Name, email, message, number } = req.body;
    console.log(Name, email, message, number);

    if (!Name || !email || !message) {
      
      return res.status(400).json({
        msg: "Validation error: Name, email, and message are required fields.",
      });
    }

    const data = await user.create({ Name, email, message, number });
    res.status(200).json({
      msg: "Success",
   
    });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
    });
  }
};

module.exports = postdata;
