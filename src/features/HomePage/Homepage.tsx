import { useEffect } from "react";
import Navbar from "../../ui/Navbar";

function Homepage() {
  useEffect(function () {
    async function getL() {
      const res = await fetch("https://quizwhiz-backend.onrender.com");
      const data = res.json();
      console.log(data);
    }

    getL();
  }, []);
  return (
    <div>
      <Navbar />
      <header className="h-screen bg-hero bg-bottom bg-cover">
        <img src="" alt="" />
      </header>
    </div>
  );
}

export default Homepage;
