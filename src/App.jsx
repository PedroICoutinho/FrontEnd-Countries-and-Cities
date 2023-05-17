import { Route, Routes } from "react-router-dom";
import { AuthRouteProtector } from "./components/AuthRouteProtector";
import { AuthContextComponent } from "./contexts/authContext";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { MainFeed } from "./pages/Main-Feed";
import { Signup } from "./pages/Signup";
import { CreateCountry } from "./pages/CreateCountry";
import { CountryDetails } from "./pages/CountryDetails";
import { CreateCity } from "./pages/CreateCity";





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
          <Route
            path="/create-post"
            element={<AuthRouteProtector component={CreateCountry} />}
          />
          <Route
            path="/countries-post/:_id"
            element={<AuthRouteProtector component={CountryDetails} />}
          />
          <Route
            path="/create-city/:countryId"
            element={<AuthRouteProtector component={CreateCity} />}
          />


          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
