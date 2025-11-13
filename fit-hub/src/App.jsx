import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Pages/Home";
import ExerciseLibrary from "./components/Pages/ExerciseLibrary";
import LogWorkout from "./components/Pages/LogWorkout";
import WorkOutHistory from "./components/Pages/WorkOutHistory";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/Pages/About";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Exercise-Library" element={<ExerciseLibrary />} />
            <Route path="/Log-Workout" element={<LogWorkout />} />
            <Route path="/Workout-History" element={<WorkOutHistory />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
