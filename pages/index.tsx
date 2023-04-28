import styles from "./index.module.css";
import Overlay from "../components/overlay";
import Image from "next/image";
import Link from "next/link";
import teamPhoto from "../images/index/team-photo.jpg";

export default function Page () {
  return (
    <main>
      <div className = {styles.section}>
        <Overlay background = {
          <Image src = {teamPhoto} alt = "Lobstah Bots Team Photo" className = {styles.teamPhoto}/>
        } content = {
          <p className = {`${styles.photoText} container`}>We are Lobstah Bots, a FIRST Robotics team that aims to bring access to robotics to students in the Greater Boston area.</p>
        }/>
      </div>
      <div className = {styles.section}>
        <div className = "container">
          <h2>What is the FIRST Robotics Competition?</h2>
          <div className = {styles.sectionWithCols}>
            <div className = {styles.leftCol}>
              <p>
                FIRST (For Inspiration and Recognition of Science and Technology) was founded in 1992 by Dean Kamen, inventor of the Segway. The mission of FIRST is to inspire young people to be science and technology leaders, by engaging them in exciting programs that build STEM skills and teach self-confidence, communication, and leadership. The FIRST Robotics Competition is an international program consisting of thousands of teams and tens of thousands of students. In FRC, students have just a few weeks to design, build, and code a 100+ pound robot that can compete in a complex engineering challenge. FRC gives students exposure to engineering, technical design, business management, marketing and many more skills that can be used in college and industry. Most FIRST alumni go to a 4-year college and end up employed in the STEM industry.
              </p>
              <Link href= "https://www.firstinspires.org/" className = {styles.moreButton}>Explore FIRST</Link>
            </div>

            <div className = {styles.rightCol}>
              <Image src = {teamPhoto} alt = "Lobstah Bots Team Photo" className = {styles.teamPhoto}/>
            </div>
          </div>
        </div>
      </div>
      <div className = {styles.section}>
        <div className = "container">
          <h2>Explore the 2023 Season</h2>
          <div className = {styles.sectionWithCols}>
            <div className = {styles.leftCol}>
              <h4>
                <Link href = "https://www.thebluealliance.com/event/2023week0">Event 1: 2023 Week 0 in Nashua, NH</Link>
              </h4>
              <h4>
                <Link href = "https://www.thebluealliance.com/event/2023rinsc">Event 2: 2023 New England District Rhode Island Event</Link>
              </h4>
              <h4>
                <Link href = "https://www.thebluealliance.com/event/2023mabos">Event 3: 2023 New England District Greater Boston Event</Link>
              </h4>
              <h4>
                <Link href = "https://www.thebluealliance.com/event/2023necmp2">Event 4: 2023 New England FIRST District Championships - Wilson Division</Link>
              </h4>
              <Link href= "/history" className = {styles.moreButton}>Explore Past Years</Link>
            </div>

            <div className = {styles.rightCol}>
              <Image src = {teamPhoto} alt = "Robot Photo" className = {styles.teamPhoto}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
