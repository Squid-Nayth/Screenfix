import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from './pages/Home'
import LegalMentions from "./pages/LegalMentions";
import NotFound from "./pages/404"

function App() {
  useEffect(() => {
        AOS.init({ duration: 500 });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-légales" element={<LegalMentions />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App
