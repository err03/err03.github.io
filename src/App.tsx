import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<ResumePage />}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
