import About from "./Home/About";
import Start from "./Home/Start";
import Community from "./Home/Community";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/sobremim" element={<About />} />
        <Route path="/labzone" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
