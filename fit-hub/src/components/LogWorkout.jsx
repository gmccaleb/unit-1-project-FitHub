import React from "react";

function LogWorkout() {
  return (
    <main>
      <h2>Log a Workout</h2>
      <form>
        <label>
          {" "}
          Workout Title
          <input type="text"/>
        </label>
        <h4>Exercises:</h4>
        <input type="text" placeholder="Exercise Name" required />
        <input type="number" placeholder="Sets" />
        <input type="number" placeholder="Reps" />
        <input type="number" placeholder="Weight (lbs)" />
      </form>
    </main>
  );
}

export default LogWorkout;
