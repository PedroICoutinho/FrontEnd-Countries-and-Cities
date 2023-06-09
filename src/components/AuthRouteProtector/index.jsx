import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AuthRouteProtector(props) {
  const { component: Component } = props;
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    console.log(parsedUser);
    if (!parsedUser.token) {
      navigate("/login");
    }
  }, []);

  return <Component />;
}
