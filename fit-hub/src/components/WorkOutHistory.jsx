import React from "react";

function WorkOutHistory() {
  const mockWorkouts = [
    {
      id: 1730400000001,
      title: "Full Body Blast",
      date: "10/28/2025",
      exercises: [
        { name: "Push-ups", sets: "3", reps: "12" },
        { name: "Squats", sets: "3", reps: "15" },
        { name: "Plank", sets: "2", reps: "" },
      ],
    },
    {
      id: 1730400000002,
      title: "Upper Body Strength",
      date: "10/30/2025",
      exercises: [
        { name: "Bench Press", sets: "4", reps: "8" },
        { name: "Pull-ups", sets: "3", reps: "6" },
        { name: "Bicep Curls", sets: "3", reps: "10" },
      ],
    },
    {
      id: 1730400000003,
      title: "Leg Day Focus",
      date: "10/31/2025",
      exercises: [
        { name: "Lunges", sets: "3", reps: "12" },
        { name: "Deadlifts", sets: "4", reps: "6" },
        { name: "Calf Raises", sets: "", reps: "" },
      ],
    },
    {
      id: 1730400000004,
      title: "Core Crusher",
      date: "11/01/2025",
      exercises: [
        { name: "Sit-ups", sets: "3", reps: "20" },
        { name: "Leg Raises", sets: "3", reps: "15" },
        { name: "Mountain Climbers", sets: "", reps: "" },
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
                        if (exercise.sets)
                          details.push(`${exercise.sets} sets`);
                        if (exercise.reps)
                          details.push(`${exercise.reps} reps`);

                        return (
                          <li key={index}>
                            {exercise.name}
                            {details.length > 0 && ` — ${details.join(" × ")}`}
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
