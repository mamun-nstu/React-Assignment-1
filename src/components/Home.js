import "../styles/Home.css";
import About from "./About";
import Header from "./Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <About />
      <div className="homwFooter"></div>
    </div>
  );
}

export default Home;
