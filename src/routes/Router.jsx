import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}
