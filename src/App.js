// Import React components.
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nodata from "./components/Nodata";
// Import css files.
import "./App.scss";
import "./components/Header.scss";
import "./components/Main.scss";
import "./components/Card.scss";
import "./components/Footer.scss";
import "./components/Common.scss";
import "./components/Nodata.scss";

const App = () => {
  const noData = false;

  return (
    <>
      <div className="wrapper">
        <Header />
        {noData ? <Nodata /> : <Main />}
        <Footer />
      </div>
    </>
  );
};

export default App;
