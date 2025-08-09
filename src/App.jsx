import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import LegalMentions from "./pages/LegalMentions";
import NotFound from "./pages/404"

function App() {
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
