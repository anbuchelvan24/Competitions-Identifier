import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Profile from "./Profile/Profile";
import Calendar from "./Calendar/Calendar";
import Gallery from "./Gallery/Gallery";

import Render from "./Render";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const props = {
    email: email,
    password: password,
    setEmail: setEmail,
    setPassword: setPassword,
    setIsAuthenticated: setIsAuthenticated,
  };

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="login" />} />
          <Route element={<AppLayout />}>
            {!isAuthenticated ? (
              <Route index element={<Navigate replace to="login" />} />
            ) : (
              // we can implement an 'unauthorized page' (now it defaults to page not found)

              <>
                <Route path="home" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="dashboard" element={<Render />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="gallery" element={<Gallery />} />
              </>
            )}
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Render />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>

          <Route path="login" element={<Login loginProps={props} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
