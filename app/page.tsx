import react from "react";
import styles from "./styles.module.css";
import "./page.css"

export default function Page () {
  return (
    <main>
      <h1>Team 246: Lobstah Bots</h1>
      <p>Boston University Academy&apos;s Robotics Team</p>
      <p>This website is a work-in-progress. Please check back later!</p>
      <div className = {styles.blurb}>
        <h2>What Do We Do?</h2>
        <a href = "https://www.youtube.com/watch?v=-SjPVVeNdKY" target="_blank" rel="noopener noreferrer">
          <button>Learn More </button>
        </a>
      </div>
      <div className = {styles.blurb}>
        <h2>Team History</h2>
        <a href = "https://www.youtube.com/watch?v=-SjPVVeNdKY" target="_blank" rel="noopener noreferrer">
          <button>Explore More Awards</button>
        </a>
      </div>
      <div className = {styles.blurb}>
        <h2>Sponsors</h2>
        <a href = "https://www.youtube.com/watch?v=-SjPVVeNdKY" target="_blank" rel="noopener noreferrer">
          <button>Explore Our Sponsors</button>
        </a>
      </div>
      <div className = {styles.blurb}>
        <h2>Our Team</h2>
        <a href = "https://www.youtube.com/watch?v=-SjPVVeNdKY" target="_blank" rel="noopener noreferrer">
          <button>Meet The Team</button>
        </a>
      </div>
      <div className = {styles.blurb}>
        <h2>Our Newsletter</h2>
        <a href = "https://www.youtube.com/watch?v=-SjPVVeNdKY" target="_blank" rel="noopener noreferrer">
          <button>Explore The Newsletter</button>
        </a>
      </div>
    </main>
  );
}
