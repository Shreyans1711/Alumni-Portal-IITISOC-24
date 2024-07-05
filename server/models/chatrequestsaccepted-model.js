const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    menteeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    mentorName: {
      type: String,
    },
    mentorEmail: {
      type: String,
    },
    mentorImgUrl: {
      type: String,
    },
    menteeName: {
      type: String,
    },
    menteeEmail: {
      type: String,
    },
    menteeImgUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ChatRequestsAccepted", MessageSchema);
