const router = require("express").Router();
const Event = require("../models/events-model");

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

module.exports = router;
