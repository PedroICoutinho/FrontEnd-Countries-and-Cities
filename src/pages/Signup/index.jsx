import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      
      await api.post("/user/signup", { ...form});

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="formName">Name:</label>
      <input
        id="formName"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
    
      <label htmlFor="formEmail">E-mail:</label>
      <input
        id="formEmail"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="formPassword">Password:</label>
      <input
        id="formPassword"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
       // pattern="/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm"
      />
      <label htmlFor="formConfirmPassword">Verify Password</label>
      <input
        id="formConfirmPassword"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
       // pattern="/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm"
      />
      <button
        type="submit"
        className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold
      text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
      focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-indigo-600"
      >
        Send
      </button>
    </form>
  );
}
