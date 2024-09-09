// import React, { useState, useEffect, useRef } from "react";
// import Header from "./header";
// import Footer from "./footer";
// import { jwtDecode } from "jwt-decode";
// import { IoMdSend } from "react-icons/io";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { io } from "socket.io-client";
// import { NavLink } from "react-router-dom";

// function ChatPage() {
//   const token = Cookies.get("userdata");
//   const socket = useRef();
//   var data;
//   if (token) {
//     data = jwtDecode(token);
//     // console.log(data);
//   }
//   const id = Cookies.get("currentChat");
//   //   console.log(id);
//   const [currentChat, setCurrentChat] = useState({});
//   const [messages, setMessages] = useState([]);
//   const [newmsg, setNewmsg] = useState("");
//   const [arrivalMessage, setArrivalMessage] = useState(null);
//   const getChatUser = async () => {
//     const response = await axios
//       .post("http://localhost:3000/mentorship/getcurrentchatuser", { id: id })
//       .then((e) => {
//         setCurrentChat(e.data);
//         // console.log(e.data);
//       });
//   };

//   useEffect(() => {
//     getAllMessages();
//   }, [currentChat]);

//   useEffect(() => {
//     if (currentChat) {
//       getChatUser();
//       console.log(currentChat);
//     }
//     // Cookies.remove("currentChat");
//   }, []);

//   useEffect(() => {
//     // if (data) {
//     socket.current = io("http://localhost:3000");
//     socket.current.emit("add-user", data.id);
//     // }
//   }, []);

//   const handleSendMsg = async () => {
//     socket.current.emit("send-msg", {
//       to: currentChat._id,
//       from: data.id,
//       newmsg,
//     });
//     const res = await axios.post(
//       "http://localhost:3000/mentorship/sendmessage",
//       {
//         from: data.id,
//         to: currentChat._id,
//         message: newmsg,
//       }
//     );
//     console.log(res);
//     const msgs = [...messages];
//     msgs.push({ fromSelf: true, message: newmsg });
//     setMessages(msgs);
//   };

//   const getAllMessages = async () => {
//     const res = await axios.post(
//       "http://localhost:3000/mentorship/getallmessage",
//       {
//         from: data.id,
//         to: currentChat._id,
//       }
//     );
//     console.log(res.data);
//     setMessages(res.data);
//   };
//   useEffect(() => {
//     if (socket.current) {
//       socket.current.on("msg-recieve", (newmsg) => {
//         console.log(newmsg);
//         setArrivalMessage({ fromSelf: false, message: newmsg });
//       });
//     }
//   }, []);

//   useEffect(() => {
//     arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
//     // console.log()
//   }, [arrivalMessage]);

//   const handleTerminateChat = async () => {
//     const res = await axios
//       .post("http://localhost:3000/mentorship/terminatechat", {
//         mentorData: data,
//         menteeData: currentChat,
//         messages: messages,
//       })
//       .then((e) => {
//         console.log(e.data);
//       });
//   };

//   return (
//     <>
//       <body className="bg-[#90E0EF]">
//         <div className="header top-0 mb-4">
//           <Header />
//         </div>
//         <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
//           Chat here
//         </h1>
//         <center>
//           <div
//             className="userimg mt-5"
//             style={{
//               backgroundImage: `url(${currentChat.imgurl})`,
//               height: "100px",
//               width: "100px",
//               borderRadius: "50%",
//             }}></div>
//         </center>
//         <div className="font-serif text-xl font-bold text-center">
//           <div>{currentChat.username}</div>
//           <div>working at {currentChat.work}</div>
//           <div>Hi! I am here to help you</div>
//         </div>
//         <div className="bg-[#D9D9D9] rounded-lg m-3 p-3">
//           <div className="bg-[#ffa5a5] text-3xl p-3 rounded-lg text-center mb-5 max-sm:flex-col">
//             <div className="font-serif">Messages</div>
//             {messages.map((message) => {
//               return (
//                 <div
//                   className={`message ${
//                     message.fromSelf ? "text-white" : "text-black"
//                   }`}>
//                   {message.message}
//                 </div>
//               );
//             })}
//             <input
//               type="text"
//               name="newMessage"
//               placeholder="type message"
//               onChange={(e) => {
//                 setNewmsg(e.target.value);
//               }}
//               value={newmsg}
//               className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
//             <button
//               type="submit"
//               onClick={(e) => {
//                 e.preventDefault();
//                 if (newmsg.length > 0) {
//                   handleSendMsg();
//                   setNewmsg("");
//                 }
//               }}>
//               <IoMdSend />
//             </button>
//             {data && data.role == "alumni" && (
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleTerminateChat();
//                 }}
//                 className=" m-2 bg-[#D9D9D9] rounded-lg font-semibold text-xl p-2 hover:border-2 hover:border-black">
//                 <NavLink to="/">terminate chat</NavLink>
//               </button>
//             )}
//           </div>
//         </div>
//         <div className="footer">
//           <Footer />
//         </div>
//       </body>
//     </>
//   );
// }

// export default ChatPage;
import React, { useState, useEffect, useRef } from "react";
import Header from "./header";
import Footer from "./footer";
import { jwtDecode } from "jwt-decode";
import { IoMdSend } from "react-icons/io";
import Cookies from "js-cookie";
import axios from "axios";
import { io } from "socket.io-client";
import { NavLink } from "react-router-dom";

function ChatPage() {
  const token = Cookies.get("userdata");
  const socket = useRef();
  var data;
  if (token) {
    data = jwtDecode(token);
  }
  const id = Cookies.get("currentChat");
  const [currentChat, setCurrentChat] = useState({});
  const [messages, setMessages] = useState([]);
  const [newmsg, setNewmsg] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const getChatUser = async () => {
    const response = await axios.post(
      "http://localhost:3000/mentorship/getcurrentchatuser",
      { id: id }
    );
    setCurrentChat(response.data);
  };

  useEffect(() => {
    getAllMessages();
  }, [currentChat]);

  useEffect(() => {
    if (currentChat) {
      getChatUser();
    }
  }, []);

  useEffect(() => {
    socket.current = io("http://localhost:3000");
    socket.current.emit("add-user", data.id);
  }, []);

  const handleSendMsg = async () => {
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: data.id,
      newmsg,
    });
    await axios.post("http://localhost:3000/mentorship/sendmessage", {
      from: data.id,
      to: currentChat._id,
      message: newmsg,
    });
    setMessages([...messages, { fromSelf: true, message: newmsg }]);
    setNewmsg("");
  };

  const getAllMessages = async () => {
    const res = await axios.post(
      "http://localhost:3000/mentorship/getallmessage",
      {
        from: data.id,
        to: currentChat._id,
      }
    );
    setMessages(res.data);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (newmsg) => {
        setArrivalMessage({ fromSelf: false, message: newmsg });
      });
    }
  }, []);

  useEffect(() => {
    if (arrivalMessage) {
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  const handleTerminateChat = async () => {
    await axios.post("http://localhost:3000/mentorship/terminatechat", {
      mentorData: data,
      menteeData: currentChat,
      messages: messages,
    });
  };

  return (
    <>
      <div className="bg-[#90E0EF] min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full bg-white shadow-md">
          <Header />
        </header>
        {/* Main Content */}
        <div className="flex-1 pt-4">
          <div
            className="chat-container bg-white rounded-lg shadow-lg mx-auto w-full max-w-3xl p-4 mb-4"
            style={{
              // backgroundImage: url(https://www.pinterest.com/pin/pinterest--974888650571206450/),
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <h1 className="text-5xl text-center font-bold font-serif text-white font-outline-2 mb-4">
              Chat here
            </h1>
            <center>
              <div
                className="userimg mt-5"
                style={{
                  backgroundImage: `url(${currentChat.imgurl})`,
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
            </center>
            <div className="font-serif text-xl font-bold text-center mt-4">
              <div>{currentChat.username}</div>
              <div>working at {currentChat.work}</div>
              <div>Hi! I am here to help you</div>
            </div>
            <div
              className="bg-[#D9D9D9] rounded-lg mt-4 p-3"
              style={{
                // backgroundImage: url(https://www.pinterest.com/pin/pinterest--974888650571206450/),
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 max-sm:flex-col">
                <div className="font-serif">Messages</div>
                <div
                  className="messages-container h-96 overflow-y-auto p-2" // Scrollable container
                >
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${
                        message.fromSelf &&
                        index > 0 &&
                        messages[index - 1].fromSelf
                          ? "mt-2"
                          : ""
                      }`}>
                      <div
                        className={`flex items-end ${
                          message.fromSelf ? "justify-end" : "justify-start"
                        }`}>
                        <p
                          className={`p-3 max-w-xs rounded-lg message ${
                            message.fromSelf
                              ? "ml-auto text-white bg-green-500 rounded-br-none"
                              : "mr-auto text-black bg-gray-200 rounded-bl-none mt-2"
                          }`}>
                          {message.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center">
                  <input
                    type="text"
                    name="newMessage"
                    placeholder="type message"
                    onChange={(e) => setNewmsg(e.target.value)}
                    value={newmsg}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif flex-1"
                  />
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      if (newmsg.length > 0) {
                        handleSendMsg();
                      }
                    }}
                    className="ml-2 text-2xl text-blue-500">
                    <IoMdSend />
                  </button>
                </div>
                {data && data.role === "alumni" && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleTerminateChat();
                    }}
                    className="m-2 bg-[#D9D9D9] rounded-lg font-semibold text-xl p-2 hover:border-2 hover:border-black">
                    <NavLink to="/">terminate chat</NavLink>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-white shadow-md py-4">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default ChatPage;
