import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Nav } from "@/components/Nav/Nav"

export const AppRouter = () => {
  return (
    <div className="containet-components">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
