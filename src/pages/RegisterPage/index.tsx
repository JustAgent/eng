import { useState } from "react";
import axios from "axios";
import "./AuthPage.scss";
import { Header } from "../../components/Header";

interface FormData {
  name: string;
  surname: string;
  birthday: string;
  phoneNumber: string;
  email: string;
  password: string;
}

interface RegisterPageProps {
  onAuth?: () => void
}

export const RegisterPage = ({ onAuth }: RegisterPageProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

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
      onAuth?.()
    } catch (error) {
      console.error("Ошибка авторизации:", error);
      onAuth?.()
    }
  };

  return (
    <div>
      {" "}
      <Header text={"WeWalk"}/>
      <div className="authWrapper">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="surname">Surname:</label>
              <input
                type="text"
                name="surname"
                id="surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="birthday">Birthday:</label>
              <input
                type="date"
                name="birthday"
                id="birthday"
                value={formData.birthday}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="phoneNumber">Phone number:</label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="email">Login:</label>
              <input
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
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
