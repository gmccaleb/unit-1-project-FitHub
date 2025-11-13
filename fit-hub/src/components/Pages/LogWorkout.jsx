import { useState } from "react";
import Button from "../reusable/Button";

function LogWorkout({ workoutHistory, setWorkoutHistory }) {
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [exercises, setExercises] = useState([{ name: "", sets: "", reps: "", weight: "" }]);

  // Add new empty fields for exercises
  const addExerciseField = () => {
    setExercises([...exercises, { name: "", sets: "", reps: "", weight: "" }]);
  };

  // Updates individual exercise fields
  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = exercises.map((exercise, i) =>
      i === index ? { ...exercise, [field]: value } : exercise // keeps the same if it wasn't updated
    );
    setExercises(updatedExercises);
  };

  // Submits workout and adds it to history
  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorkout = {
      title: workoutTitle,
      date: new Date().toLocaleDateString(), // stores current date
      exercises,
    };

    // Adds it to the state that is passed from App.jsx
    setWorkoutHistory([newWorkout, ...workoutHistory]);

    // Resets form for next logged workout
    setWorkoutTitle("");
    setExercises([{ name: "", sets: "", reps: "", weight: "" }]);
  };

  return (
    <main className="log-workout">
      <h2>Log a Workout</h2>

      <form onSubmit={handleSubmit}>
        <label className="workout-title">
          <h4>Workout Title:</h4>
          <input
            type="text"
            value={workoutTitle}
            onChange={(e) => setWorkoutTitle(e.target.value)}
            required
          />
        </label>

        <h4>Exercises:</h4>
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-inputs">
            <input
              type="text"
              placeholder="Exercise Name"
              value={exercise.name}
              onChange={(e) => handleExerciseChange(index, "name", e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Sets"
              value={exercise.sets}
              onChange={(e) => handleExerciseChange(index, "sets", e.target.value)}
            />
            <input
              type="number"
              placeholder="Reps"
              value={exercise.reps}
              onChange={(e) => handleExerciseChange(index, "reps", e.target.value)}
            />
            <input
              type="number"
              placeholder="Weight (lbs)"
              value={exercise.weight}
              onChange={(e) => handleExerciseChange(index, "weight", e.target.value)}
            />
          </div>
        ))}

        <Button
          type="button"
          className="add-exercise"
          text="Add Exercise"
          onClick={addExerciseField}
        />
        <Button type="submit" className="submit" text="Submit" />
      </form>
    </main>
  );
}

export default LogWorkout;
