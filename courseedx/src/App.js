import './App.css';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import StudentHome from './components/StudentDashboard/Home/StudentHome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard/*" element={<StudentHome />} />
      </Routes>
    </div>
  );
}

export default App;
