import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Content from "./layouts/Content";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
};

export default App;
