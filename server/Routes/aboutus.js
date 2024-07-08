const router = require("express").Router();
const Member = require("../models/teammembers-model");

router.post("/addmember", (req, res) => {
  const data = req.body;
  new Member({
    Name: data.name,
    Email: data.email,
    Department: data.department,
    Designation: data.designation,
    IgLink: data.igLink,
    LinLink: data.linLink,
    GitLink: data.gitLink,
    ImgURL: data.imgurl,
  })
    .save()
    .then((e) => {
      res.redirect("http://localhost:8000/aboutus/OurTeam");
    });
});

router.get("/getallmembers", (req, res) => {
  const TeamMembers = Member.find({}).then((err, list) => {
    if (list) {
      res.json(list);
    } else {
      res.json(err);
    }
  });
  //   console.log(Eventsdata);
});

module.exports = router;
