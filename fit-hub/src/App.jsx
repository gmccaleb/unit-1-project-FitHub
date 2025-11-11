import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import ExerciseLibrary from "./components/ExerciseLibrary";
import LogWorkout from "./components/LogWorkout";
import WorkOutHistory from "./components/WorkOutHistory";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Exercise-Library" element={<ExerciseLibrary />} />
          <Route path="/Log-Workout" element={<LogWorkout />} />
          <Route path="/Workout-History" element={<WorkOutHistory />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
