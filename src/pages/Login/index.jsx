import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";
import style from "./style.module.css"

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/main-feed");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>E-mail:</label>
      <input
        className={style.boxInput}
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        className={style.boxInput}
      />

      <button
        type="submit"
        className={style.buttonSend}
      >
        Login
      </button>
    </form>
  );
}
