import React from "react";
import Form from "../components/Form";
import Result from "../components/Result";
import "../styles/Layout.css"

const Home = () => {
  return (
    <div className="layout">
      <h1>Codigo aleatorio</h1>
      <Form />
      <Result />
    </div>
  );
};

export default Home;
