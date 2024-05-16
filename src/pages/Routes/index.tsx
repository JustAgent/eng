import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import "./RoutesPage.scss";
import image from "../../assets/Group 1.png";
import axios from "axios";

interface RoutesResponse : {

}
export const RoutesPage: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/routes");
        const data: RoutesResponse = response.data;
        localStorage.setItem("token", token);
      } catch (error) {
        console.error("Ошибка авторизации:", error);
      }
    };

    fetchData(); // Call the async function here
  }, []);

  return (
    <div className="mainPageContainer">
      <Header text={"Routes"} />
      <div className="rectangle"></div>
      <div className="imageContainer">
        <img src={image} className="image" />
        <div className="infoContainer">
          <h2 className="title">My Interests</h2>
          <p>Rock-n-Roll music</p>
          <p>Dramatic films</p>
          <p>Drawing</p>
          <p>Nature</p>
        </div>
        <button className="main__button">Create walking route</button>
        <button className="main__button">Search</button>
      </div>
    </div>
  );
};
