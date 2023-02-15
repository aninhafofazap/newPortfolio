import { Outlet } from "react-router-dom";
import Banner from "../Banner";

function Main() {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  );
}

export default Main;
