import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Nav></Nav>
      <h2>This is home</h2>
     
    </div>
  );
};

export default Home;
