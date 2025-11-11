import Button from "../reusable/Button";
import { useState } from "react";

function LogWorkout() {
  const [exerciseFields, setExerciseFields] = useState([{}]); // starts with 1, using an array so I can map over it for input fields

  // Function to add a new set of user inputs, will be used for add exercise button
  const addExerciseField = () => {
    setExerciseFields([...exerciseFields, {}]);
  };

  return (
    <main>
      {" "}
      <h2>Log a Workout</h2>{" "}
      <form>
        {" "}
        <label>
          {" "}
          Workout Title <input type="text" required />{" "}
        </label>{" "}
        <h4>Exercises:</h4>{" "}
        {exerciseFields.map((index) => (
          <div key={index} className="exercise-inputs">
            <input type="text" placeholder="Exercise Name" required />
            <input type="number" placeholder="Sets" />
            <input type="number" placeholder="Reps" />
            <input type="number" placeholder="Weight (lbs)" />
          </div>
        ))}
      </form>{" "}

      <Button
        type="button"
        className="add-exercise"
        text="Add Exercise"
        onClick={addExerciseField}
      />
      <Button type="submit" className="submit" text="Submit" />
    </main>
  );
}
export default LogWorkout;
