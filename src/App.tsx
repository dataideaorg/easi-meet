import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MeetingPage from "./pages/MeetingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meeting" element={<MeetingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
