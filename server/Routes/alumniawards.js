const router = require("express").Router();
const Alumni = require("../models/alumnis-model");

router.post("/addalumni", (req, res) => {
  const data = req.body;
  new Alumni({
    Name: data.name,
    Email: data.email,
    Department: data.department,
    Year: data.year,
    Achievment: data.achievment,
    Description: data.description,
    IgLink: data.igLink,
    LinLink: data.linLink,
    GitLink: data.gitLink,
    ImgURL: data.imgurl,
  })
    .save()
    .then((e) => {
      res.redirect("http://localhost:8000/awards/alumniawards");
    });
});

router.get("/getallalumnis", (req, res) => {
  const Alumnis = Alumni.find({}).then((err, list) => {
    if (list) {
      res.json(list);
    } else {
      res.json(err);
    }
  });
  //   console.log(Eventsdata);
});

module.exports = router;
