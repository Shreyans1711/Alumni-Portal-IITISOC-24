const router = require("express").Router();
const ANews = require("../models/alumniNews-model");
const Publications = require("../models/newsletter-model");

router.post("/addalumninews", (req, res) => {
  const data = req.body;
  new ANews({
    NewsName: data.newsName,
    NewsDetails: data.newsDetails,
    NewsImgUrl: data.newsimgurl,
  })
    .save()
    .then((e) => {
      res.redirect("http://localhost:8000/updates/alumniNews");
    });
});

router.get("/getalumninews", (req, res) => {
  const ANdata = ANews.find({}).then((err, list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(list);
    }
  });
  //   console.log(Eventsdata);
});

router.post("/addpublication", (req, res) => {
  const data = req.body;
  new Publications({
    PublicationName: data.publicationName,
    PublicationDetails: data.publicationDetails,
    Publicationlink: data.publicationLink,
  })
    .save()
    .then((e) => {
      res.redirect("http://localhost:8000/updates/newsletter");
    });
});

router.get("/getallpublications", (req, res) => {
  const Publicationsdata = Publications.find({}).then((err, list) => {
    if (list) {
      res.json(list);
    } else {
      res.json(err);
    }
  });
  //   console.log(Eventsdata);
});

module.exports = router;
