import React from "react";

function ExerciseLibrary() {
const mockExercises = [
  {
    id: 1,
    name: "Push-ups",
    muscleGroups: ["Chest", "Triceps", "Shoulders"],
    instructions:
      "Start in a plank position with your hands slightly wider than shoulder-width apart. Lower your chest until it nearly touches the floor, then push back up.",
    image: "https://source.unsplash.com/600x400/?pushups,fitness",
  },
  {
    id: 2,
    name: "Squats",
    muscleGroups: ["Quadriceps", "Glutes", "Hamstrings"],
    instructions:
      "Stand with feet shoulder-width apart. Lower your hips back and down as if sitting into a chair, keeping your chest up. Return to standing.",
    image: "https://source.unsplash.com/600x400/?squat,workout",
  },
  {
    id: 3,
    name: "Bench Press",
    muscleGroups: ["Chest", "Triceps", "Shoulders"],
    instructions:
      "Lie on a bench with feet flat. Lower the barbell to your chest, then press it back up to full arm extension.",
    image: "https://source.unsplash.com/600x400/?benchpress,gym",
  },
  {
    id: 4,
    name: "Deadlift",
    muscleGroups: ["Back", "Glutes", "Hamstrings"],
    instructions:
      "Stand with feet hip-width apart, barbell over mid-foot. Hinge at the hips, grip the bar, and lift while keeping your back straight.",
    image: "https://source.unsplash.com/600x400/?deadlift,training",
  },
  {
    id: 5,
    name: "Plank",
    muscleGroups: ["Core", "Abs", "Shoulders"],
    instructions:
      "Start in a forearm plank position. Keep your body straight and your core tight. Hold for the desired time.",
    image: "https://source.unsplash.com/600x400/?plank,core",
  },
];

  return (
    <main>
      <h2>Exercise Library</h2>
      {/* <section>
        {exerciseLibrary.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </section> */}
    </main>
  );
}

export default ExerciseLibrary;
