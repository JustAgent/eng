import { Header } from "../../components/Header";
import "./MainPage.scss";
import image from "../../assets/Group 1.png";
import {useNavigate} from "react-router-dom";

export const MainPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="mainPageContainer">
      <Header text={"WeWalk"}/>
      <div className="rectangle"></div>
      <div className="imageContainer">
        <img src={image} className="image"/>
        <div className="infoContainer">
          <h2 className="title">My Interests</h2>
          <p>Rock-n-Roll music</p>
          <p>Dramatic films</p>
          <p>Drawing</p>
          <p>Nature</p>
        </div>
        <button className="main__button" onClick={() => {
          navigate('/routes')
        }}>
          Your routes
        </button>
        <button className="main__button" onClick={() => {
          navigate('/routesMe')
        }}>
          All routes
        </button>
      </div>
    </div>
  );
};
