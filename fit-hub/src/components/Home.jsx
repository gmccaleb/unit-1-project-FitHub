import React from "react";
import Button from "./reusable/Button";
import { Link } from "react-router";

function Home() {
  return (
    <main>
      <h1>Welcome to FitHub!</h1>
      <p>
        FitHub is your all-in-one workout companion — view our vast exercise library, log
        your workouts, and monitor your progress over time. Whether you’re just
        starting out or pushing for new goals, FitHub helps you stay organized,
        motivated, and consistent on your fitness journey.
      </p>
      <img src="/images/fithub-home.jpg" width="100%"/>


      <section>
        <Link to="/Exercise-Library" className="btn-link">
          View Exercise Library
        </Link>
        <br/>
        <Link to="/Log-Workout" className="btn-link">
          Log Workouts
        </Link>
        <br/>
        <Link to="/Workout-History" className="btn-link">
          View Workout History
        </Link>
      </section>
    </main>
  );
}

export default Home;
