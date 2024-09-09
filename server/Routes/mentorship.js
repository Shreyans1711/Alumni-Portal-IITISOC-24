const router = require("express").Router();
const User = require("../models/user-model");
const Messages = require("../models/message-model");
const ChatRequests = require("../models/chatrequests-model");
const ChatRequestsAccepted = require("../models/chatrequestsaccepted-model");
const Jobs = require("../models/jobs-model");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "mems220005001@iiti.ac.in",
    pass: "9113599107",
  },
});

var Userdata;

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

router.post("/requestchat", (req, res) => {
  const { mentorId, menteeId } = req.body;
  console.log(mentorId);
  console.log(menteeId);

  new ChatRequests({
    mentorId: mentorId._id,
    menteeId: menteeId.id,
    mentorName: mentorId.username,
    mentorEmail: mentorId.email,
    mentorImgUrl: mentorId.imgurl,
    menteeName: menteeId.username,
    menteeEmail: menteeId.email,
    menteeImgUrl: menteeId.imgurl,
  })
    .save()
    .then((e) => {
      // console.log(e);
    });

  const mailOptions = {
    from: {
      name: "Alumni Portal",
      address: "mems220005001@iiti.ac.in",
    },
    to: mentorId.email,
    subject: "Request for chat by a User",
    text: "Hi, I am an Alumni Portal User I would like to chat with you regarding the future oppertunities",
    html: `<h2>Hi, I am an Alumni Portal User</h2><p>I would like to chat with you regarding the future oppertunities</p><a href="http://localhost:8000/mentorship/acceptorreject">Accept Request</a>`,
  };

  const SendMail = async (transporter, mailOptions) => {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent");
  };
  SendMail(transporter, mailOptions);
  // console.log(data);
  // res.cookie("chatuser", data);
  res.json({ msg: "request sent" });
});

router.post("/getallrequests", (req, res) => {
  const data = req.body;
  const AllRequests = ChatRequests.find({ mentorId: data.mentorId }).then(
    (e) => {
      // console.log(e);
      res.json(e);
    }
  );
  // console.log(data);
});

router.post("/requestaccepted", (req, res) => {
  const data = req.body;
  // console.log(data.data.mentorId);
  ChatRequestsAccepted.findOne({ menteeId: data.data.menteeId }).then((e) => {
    if (e) {
      // done();
    } else {
      new ChatRequestsAccepted({
        mentorId: data.data.mentorId,
        menteeId: data.data.menteeId,
        mentorName: data.data.mentorName,
        mentorEmail: data.data.mentorEmail,
        mentorImgUrl: data.data.mentorImgUrl,
        menteeName: data.data.menteeName,
        menteeEmail: data.data.menteeEmail,
        menteeImgUrl: data.data.menteeImgUrl,
      })
        .save()
        .then((e) => {
          // console.log(e);
          res.json(e);
        });
    }
  });

  const mailOptions = {
    from: {
      name: "Alumni Portal",
      address: "mems220005001@iiti.ac.in",
    },
    to: data.data.menteeEmail,
    subject: "Chat Request Accepted",
    text: "Hi, Your request to chat with mentor has been accepted",
    html: `<p>Hi, Your request to chat with mentor has been accepted</p><a href="http://localhost:8000/mentorship/chatsaccepted">Start Chat</a>`,
  };

  const SendMail = async (transporter, mailOptions) => {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent");
  };
  SendMail(transporter, mailOptions);
});

router.post("/chatsaccepted", (req, res) => {
  const data = req.body;
  // console.log(data.menteeId);
  const AllRequestsAccepted = ChatRequestsAccepted.find({
    menteeId: data.menteeId,
  }).then((e) => {
    // console.log(e);
    res.json(e);
  });
  // console.log(data);
});

router.post("/requestrejected", (req, res) => {
  const data = req.body;
  console.log(data);
  const chatrejected = ChatRequests.deleteOne({ _id: data.data._id }).then(
    (e) => {
      res.json({ msg: "chat rejected" });
    }
  );

  const mailOptions = {
    from: {
      name: "Alumni Portal",
      address: "mems220005001@iiti.ac.in",
    },
    to: data.data.menteeEmail,
    subject: "Chat Request Rejected",
    text: "Hi, We are sorry, Your request to chat with mentor has been rejected",
    html: `<h3>Hi, We are sorry !</h3><p>Your request to chat with mentor has been accepted</p><a href="http://localhost:8000">Start Chat</a>`,
  };

  const SendMail = async (transporter, mailOptions) => {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent");
  };
  SendMail(transporter, mailOptions);
});

router.post("/terminatechat", (req, res) => {
  const { mentorData, menteeData, messages } = req.body;
  const deleteChat = Messages.deleteMany({
    users: [mentorData.id, menteeData._id],
  }).then((e) => {});
  const deleteChat1 = Messages.deleteMany({
    users: [menteeData._id, mentorData.id],
  }).then((e) => {});
  ChatRequests.deleteOne({
    menteeId: menteeData._id,
    mentorId: mentorData.id,
  }).then((e) => {});

  ChatRequests.deleteOne({
    menteeId: mentorData.id,
    mentorId: menteeData._id,
  }).then((e) => {});
  ChatRequestsAccepted.deleteOne({
    mentorId: mentorData.id,
    menteeId: menteeData._id,
  }).then((e) => {});
  ChatRequestsAccepted.deleteOne({
    mentorId: menteeData._id,
    menteeId: mentorData.id,
  }).then((e) => {});
  console.log(req.body);
  res.json({ msg: "Chat Terminated" });
});

router.post("/addjob", (req, res) => {
  const data = req.body;
  new Jobs({
    JobName: data.jobName,
    JobDetails: data.jobDetails,
    JobLink: data.jobLink,
  })
    .save()
    .then((e) => {
      res.redirect("http://localhost:8000/mentorship/jobs");
    });
});

router.get("/getalljobs", (req, res) => {
  const jobdata = Jobs.find({}).then((err, list) => {
    if (list) {
      res.json(list);
    } else {
      res.json(err);
    }
  });
  //   console.log(Eventsdata);
});

module.exports = router;
