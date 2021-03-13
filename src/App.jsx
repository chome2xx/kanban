// Import React components.
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
// Import css files.
import "./App.scss";
import "./components/Header.scss";
import "./components/Main.scss";
import "./components/Card.scss";
import "./components/Footer.scss";
import "./components/Common.scss";
import "./components/Nodata.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
