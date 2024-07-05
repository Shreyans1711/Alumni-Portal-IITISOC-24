const express = require("express");
const cors = require("cors");
const authRoutes = require("./Routes/auth");
const eventRoutes = require("./Routes/event");
const mentorshipRoutes = require("./Routes/mentorship");
const updatesRoutes = require("./Routes/updates");
const mongoose = require("mongoose");
const User = require("./models/user-model");
const session = require("express-session");
const passport = require("passport");
const passportsetup = require("./controllers/passport-setup");
const cookiesMiddleware = require("universal-cookie-express");
const keys = require("./keys");
const cookieParser = require("cookie-parser");
const socket = require("socket.io");

const PORT = 3000;

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/accountsdb")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(`Error: ${err}`));

app.use(cors({ origin: "http://localhost:8000", credentials: true }));
app.use(express.json());
app.use(cookiesMiddleware());
app.use(
  session({
    secret: "Alumni Portal",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
app.use(cookieParser());

// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [keys.session.cookieKey],
//   })
// );

app.use(passport.initialize());
app.use(passport.session());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.use("/auth", authRoutes);
app.use("/events", eventRoutes);
app.use("/mentorship", mentorshipRoutes);
app.use("/updates", updatesRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
const io = socket(server, {
  cors: {
    origin: "http://localhost:8000",
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    // console.log(data);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.newmsg);
    }
  });
});
