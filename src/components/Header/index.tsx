import "./Header.scss";
import image from "../../assets/Settings.png";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate = useNavigate();

  function nav() {
    navigate("/settings");
  }
  return (
    <div
      className="headerWrapper"
      style={{
        justifyContent: `${props.text !== "WeWalk" && "center"}`,
        padding: `${props.text !== "WeWalk" && 0}`,
      }}
    >
      <h1 className="headerTitle">{props.text}</h1>
      <a onClick={nav}>
        <img src={image} className="image-icon" />
      </a>
    </div>
  );
};
