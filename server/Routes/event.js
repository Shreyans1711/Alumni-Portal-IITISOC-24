const router = require("express").Router();
const Event = require("../models/events-model");
const Reunion = require("../models/reunions-model");
const Chapter = require("../models/chapters-model");

router.post("/addevent", (req, res) => {
  const data = req.body;
  new Event({
    EventName: data.eventName,
    EventDetails: data.eventDetails,
    EventLink: data.eventLink,
    EventImgUrl: data.eventimgurl,
  })
    .save()
    .then((e) => {
      res.redirect("http://localhost:8000/events/latestevents");
    });
});

router.get("/getevents", (req, res) => {
  const Eventsdata = Event.find({}).then((err, list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(list);
    }
  });
  //   console.log(Eventsdata);
});

router.post("/addreunion", (req, res) => {
  const data = req.body;
  new Reunion({
    ReunionName: data.reunionName,
    ReunionDetails: data.reunionDetails,
    ReunionImgUrl: data.reunionimgurl,
  })
    .save()
    .then((e) => {
      res.redirect("http://localhost:8000/events/reunions");
    });
});

router.get("/getreunions", (req, res) => {
  const Reunionsdata = Reunion.find({}).then((err, list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(list);
    }
  });
  //   console.log(Eventsdata);
});

router.post("/addchapter", (req, res) => {
  const data = req.body;
  new Chapter({
    ChapterName: data.chapterName,
    ChapterDetails: data.chapterDetails,
    ChapterImgUrl: data.chapterimgurl,
  })
    .save()
    .then((e) => {
      res.redirect("http://localhost:8000/events/reunions");
    });
});

router.get("/getchapters", (req, res) => {
  const Chaptersdata = Chapter.find({}).then((err, list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(list);
    }
  });
  //   console.log(Eventsdata);
});

module.exports = router;
