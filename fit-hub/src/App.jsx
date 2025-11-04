import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import ExerciseLibrary from "./components/ExerciseLibrary";
import LogWorkout from "./components/LogWorkout";
import WorkOutHistory from "./components/WorkOutHistory";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Exercise-Library" element={<ExerciseLibrary />} />
        <Route path="/Add-Workout" element={<LogWorkout />} />
        <Route path="/Workout-History" element={<WorkOutHistory />} />
      </Routes>
    </>
  );
}

export default App;
