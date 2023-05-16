import { Route, Routes } from "react-router-dom";
import { AuthRouteProtector } from "./components/AuthRouteProtector";
import { AuthContextComponent } from "./contexts/authContext";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { MainFeed } from "./pages/Main-Feed";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/main-feed"
            element={<AuthRouteProtector component={MainFeed} />}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
