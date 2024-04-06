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

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
        <Route index element={<Navigate replace to="login" />} />
          <Route element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Render />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
