import React from "react";

function WorkOutHistory() {
  const mockWorkouts = [
    {
      id: 1730400000001,
      title: "Full Body Blast",
      date: "10/28/2025",
      exercises: [
        { name: "Push-ups", sets: "3", reps: "12", weight: "" },
        { name: "Squats", sets: "3", reps: "15", weight: 85 },
        { name: "Plank", sets: "2", reps: "", weight: "" },
      ],
    },
    {
      id: 1730400000002,
      title: "Upper Body Strength",
      date: "10/30/2025",
      exercises: [
        { name: "Bench Press", sets: "4", reps: "8", weight: 135 },
        { name: "Pull-ups", sets: "3", reps: "6", weight: "" },
        { name: "Bicep Curls", sets: "3", reps: "10", weight: 25 },
      ],
    },
    {
      id: 1730400000003,
      title: "Leg Day Focus",
      date: "10/31/2025",
      exercises: [
        { name: "Lunges", sets: "3", reps: "12", weight: 30 },
        { name: "Deadlifts", sets: "4", reps: "6", weight: 185 },
        { name: "Calf Raises", sets: "", reps: "", weight: "" },
      ],
    },
    {
      id: 1730400000004,
      title: "Core Crusher",
      date: "11/01/2025",
      exercises: [
        { name: "Sit-ups", sets: "3", reps: "20", weight: "" },
        { name: "Leg Raises", sets: "3", reps: "15", weight: "" },
        { name: "Mountain Climbers", sets: "", reps: "", weight: "" },
      ],
    },
  ];

  return (
    <main>
      <h2>Workout History</h2>
      <section>
        {mockWorkouts.length === 0 ? (
          <p>No workouts loaded</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Exercises</th>
              </tr>
            </thead>
            <tbody>
              {mockWorkouts.map((workout) => (
                <tr key={workout.id}>
                  <td>{workout.title}</td>
                  <td>{workout.date}</td>
                  <td>
                    <ul>
                      {workout.exercises.map((exercise, index) => {
                        const details = [];
                        if (exercise.sets) details.push(`${exercise.sets} sets`);
                        if (exercise.reps) details.push(`${exercise.reps} reps`);

                        return (
                          <li key={index}>
                            {exercise.name}
                            {details.length > 0 && ` — ${details.join(" × ")}`}
                            {exercise.weight && ` — ${exercise.weight} lbs`}
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}

export default WorkOutHistory;
