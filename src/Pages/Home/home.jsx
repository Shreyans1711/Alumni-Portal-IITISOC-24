import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import "./home.css"

function Home() {
  // const [data, setData] = React.useState(null);
  // async function getData() {
  //   const response = await fetch("http://localhost:8000/api");
  //   if (!response.ok) {
  //     throw new Error(`Response status: ${response.status}`);
  //   }
  //   const json = await response.json();
  //   console.log(json);
  //   setData(json.message);
  // }
  // getData();

  return (
    <body className="relative">
      <div className="header top-0">
        <Header />
      </div>
      {/* <p>{!data ? "Loading..." : data}</p> */}
      <div className="body">
        <h1 className="text-6xl md:text-9xl  pt-20 text-center"> Welcome Home</h1>
        <div className="outer">
          <div className="text-xl md:text-4xl p-20 text-center font-semibold text-white">Step into the virtual home of IIT INODRE's global community—a place where the Cardinal spirit thrives beyond the palm-lined campus. Reconnect with classmates, discover opportunities, and help juniors.</div>
        </div>
      </div>
      <div className="footer relative-0">
        <Footer />
      </div>
    </body>
  );
}

export default Home;
