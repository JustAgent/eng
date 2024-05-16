import React, { useState } from "react";
import axios from "axios";
import "./LogInPage.scss";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  surname: string;
  birthday: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export const LogInPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        formData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("Авторизация успешна. Токен:", token);
      navigate("/");
    } catch (error) {
      console.error("Ошибка авторизации:", error);
    }
  };

  return (
    <div style={{width:'100%', height:'100vh'}}>
      <Header text={"WeWalk"} />
      <div className="authWrapper">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};
