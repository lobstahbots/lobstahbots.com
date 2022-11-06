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
        <h2>Who Are We?</h2>
        <div>We are FIRST® Robotics Competition (FRC) Team 246 “Lobstah Bots”, a high school robotics team affiliated with Boston University Academy. We are one of the oldest FRC teams, and are now entering our 24th season. The team has competed annually since 1999. 
        </div>
        <h3>What is FIRST?</h3>
        <div>FIRST (For Inspiration and Recognition of Science and Technology) was founded in 1992 by Dean Kamen, inventor of the Segway. The mission of FIRST is to inspire young people to be science and technology leaders, by engaging them in exciting programs that build STEM skills and teach self-confidence, communication, and leadership. 
The FIRST Robotics Competition is an international program consisting of thousands of teams and tens of thousands of students. In FRC, students have just a few weeks to design, build, and code a 100+ pound robot that can compete in a complex engineering challenge. FRC gives students exposure to engineering, technical design, business management, marketing and many more skills that can be used in college and industry. Most FIRST alumni go to a 4-year college and end up employed in the STEM industry. 
        </div>
        <a href = "https://www.youtube.com/watch?v=-SjPVVeNdKY" target="_blank" rel="noopener noreferrer">
          <button>Learn More </button>
        </a>
      </div>
      <div className = {styles.blurb}>
        <h2>Team History</h2>
        <ul>
          <li>2-Time Entrepreneurship Award Winner</li>
          <li>3-Time Creativity Award Winner</li>
          <li>2-Time Engineering Inspiration Award Winner</li>
          <li>Innovation in Control Award Winner</li>
          <li>Excellence in Engineering Award Winner</li>
          <li>Quality Award Winner</li>
          <li>FIRST World Championship Qualifier</li>
          <li>FIRST North Shore District Event Winner</li>
          <li>FIRST UMass Dartmouth District Event Finalist</li>
        </ul>
        <a href = "https://www.youtube.com/watch?v=-SjPVVeNdKY" target="_blank" rel="noopener noreferrer">
          <button>Explore Our Awards</button>
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
