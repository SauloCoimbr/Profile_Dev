import CardList from "../components/CardList";
import { useState, useEffect } from "react";
import "./styles.css";

const Project = () => {
  return (
    <>
      <div className="container-cardList">
        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </div>
    </>
  );
};

export default Project;
