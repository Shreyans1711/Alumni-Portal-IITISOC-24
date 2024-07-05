const router = require("express").Router();
const ANews = require("../models/alumniNews-model");

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

module.exports = router;
