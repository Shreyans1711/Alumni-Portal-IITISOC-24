import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";

function Home() {
  const [data, setData] = React.useState(null);
  async function getData() {
    const response = await fetch("http://localhost:3000/api");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    setData(json.message);
  }
  getData();

  return (
    <>
      <div className="header top-0">
        <Header />
      </div>
      <h1 class="text-5xl">This is home page</h1>
      <p>{!data ? "Loading..." : data}</p>
      <div className="footer w-full mt-10">
        <Footer />
      </div>
    </>
  );
}

export default Home;
