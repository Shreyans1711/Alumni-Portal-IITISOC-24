const router = require("express").Router();
const User = require("../models/user-model");
const Messages = require("../models/message-model");

router.post("/getallusers", (req, res) => {
  const currentUser = req.body;
  const AllUsersData = User.find({ email: { $ne: currentUser.email } }).then(
    (e) => {
      //   console.log(e);
      res.json(e);
    }
  );
});

router.post("/getcurrentchatuser", (req, res) => {
  const userId = req.body;
  //   console.log(userId);
  const currentChar = User.findById(userId.id).then((e) => {
    // console.log(e);
    res.json(e);
  });
});

router.post("/sendmessage", async (req, res) => {
  const { from, to, message } = req.body;
  const data = await Messages.create({
    message: { text: message },
    users: [from, to],
    sender: from,
  });
  // console.log(data);
  if (data) return res.json({ msg: "Message added successfully." });
  else return res.json({ msg: "Failed to add message to the database" });
});

router.post("/getallmessage", async (req, res) => {
  const { from, to } = req.body;

  const messages = await Messages.find({
    users: {
      $all: [from, to],
    },
  }).sort({ updatedAt: 1 });
  const projectedMessages = messages.map((msg) => {
    return {
      fromSelf: msg.sender.toString() === from,
      message: msg.message.text,
    };
  });
  res.json(projectedMessages);
});

module.exports = router;
