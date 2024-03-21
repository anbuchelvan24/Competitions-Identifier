import { Outlet } from "react-router-dom";

import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
