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
import rootReducer from "./reducers/index";
import React, { useReducer } from "react";
import AppContext from "./contexts/AppContext";

const initState = {
  reducerModal: { show: false, mode: "", id: "" },
  reducerTasks: [],
  reducerFilter: "",
};

const App = () => {
  const [state, dispacth] = useReducer(rootReducer, initState);

  return (
    <AppContext.Provider
      value={{ stateProvided: state, dispatchProvided: dispacth }}
    >
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;
