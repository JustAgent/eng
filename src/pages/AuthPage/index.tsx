import "./AuthPage.scss";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <Header text={"WeWalk"}/>
      <div className="authWrapper">
        <div className="formContainer">
            <button type="submit" onClick={() => {
              navigate('/register')
            }}>Register</button>
            <button type="submit" onClick={() => {
              navigate('/login')
            }}>LogIn</button>
        </div>
      </div>
    </div>
  );
};
