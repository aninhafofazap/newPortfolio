import About from "./Home/About";
import Start from "./Home/Start";
import Community from "./Home/Community";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Start />} />
          <Route path="/sobremim" element={<About />} />
          <Route path="/labzone" element={<Community />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
