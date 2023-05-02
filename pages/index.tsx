import styles from "./index.module.css";
import Overlay from "../components/overlay";
import Image from "next/image";
import Link from "next/link";
import teamPhoto from "../images/index/team-photo.jpg";
import { Twitter } from "react-feather";
import { Instagram } from "react-feather";
import { Youtube } from "react-feather";

export default function Page () {
  return (
    <main>
      <div className = {styles.section}>
        <Overlay background = {
          <Image src = {teamPhoto} alt = "Lobstah Bots Team Photo" className = {styles.teamPhoto}/>
        } content = {
          <div className={styles.photoDimBackground}>
            <p className = {`${styles.photoText} container`}>We are <strong>Lobstah Bots</strong>, a FIRST Robotics team that aims to bring access to robotics to students in the Greater Boston area.</p>
          </div>
        }/>
      </div>
      <div className = {styles.section}>
        <div className = "container">
          <h1>What is the FIRST Robotics Competition?</h1>
          <div className = {styles.sectionWith1_1Cols}>
            <div className = {styles.leftCol}>
              <p>
                FIRST (For Inspiration and Recognition of Science and Technology) was founded in 1992 by Dean Kamen, inventor of the Segway. The mission of FIRST is to inspire young people to be science and technology leaders, by engaging them in exciting programs that build STEM skills and teach self-confidence, communication, and leadership. The FIRST Robotics Competition is an international program consisting of thousands of teams and tens of thousands of students. In FRC, students have just a few weeks to design, build, and code a 100+ pound robot that can compete in a complex engineering challenge. FRC gives students exposure to engineering, technical design, business management, marketing and many more skills that can be used in college and industry. Most FIRST alumni go to a 4-year college and end up employed in the STEM industry.
              </p>
              <div className={styles.rightButtonRow}>
                <Link href= "https://www.firstinspires.org/" className ="button">Explore FIRST</Link>
              </div>
            </div>

            <div className = {styles.rightCol}>
              <Image src = {teamPhoto} alt = "Lobstah Bots Team Photo" className = {styles.teamPhoto}/>
            </div>
          </div>
        </div>
      </div>
      <div className = {styles.section}>
        <div className = "container">
          <h1>Explore the 2023 Season</h1>
          <div className = {styles.sectionWith1_2Cols}>
            <div className = {styles.rightCol}>
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
              <div className={styles.buttonRow}>
                <Link href= "/history" className ="button">Explore Past Years</Link>
              </div>
            </div>

            <div className = {styles.leftCol}>
              <Image src = {teamPhoto} alt = "Robot Photo" className = {styles.teamPhoto}/>
            </div>
          </div>
        </div>
      </div>
      <div className = {styles.section}>
        <div className = "container">
          <h1>See The Latest</h1>
          <h4>Follow Us!</h4>
          <div className = {styles.mediaIcons}>
            <Link href = "https://twitter.com/"><Twitter/></Link>
            <Link href = "https://instagram.com/"><Instagram/></Link>
            <Link href = "https://youtube.com/"><Youtube/></Link>
          </div>
          <div className={styles.buttonRow}>
            <Link href= "/gallery" className ="button">Gallery</Link>
          </div>
        </div>
      </div>
      <div className = {styles.section}>
        <div className = "container">
          <div className = {styles.sectionWith1_1Cols}>
            <div className = {styles.leftCol}>
              <h1>Our Members Matter</h1>
              <div className={styles.leftButtonRow}>
                <Link href= "/team" className ="button">Our Team Members</Link>
              </div>
            </div>
            <div className = {styles.leftButtonRow}>
              <Image src = {teamPhoto} alt = "Team Photo" className = {styles.teamPhoto}/>
            </div>
          </div>
        </div>
      </div>
      <div className = {styles.highlightedSection}>
        <div className = "container">
          <div className = {styles.sectionWith1_1Cols}>
            <div className = {styles.leftCol}>
              <h1>Support Us!</h1>
              <div className={styles.leftButtonRow}>
                <Link href= "/sponsors" className ="button">Sponsor Package</Link>
                <Link href= "/contact" className ="button">Contact Us</Link>
                <Link href= "/donate" className ="button">Donate!</Link>
              </div>
            </div>
            <div className = {styles.rightCol}>
            </div>
          </div>
        </div>
      </div>
      <div className = {styles.section}>
        <div className = "container">
          <h1>Our Sponsors</h1>
          <div className = {styles.gallery}>
            <Image src = {teamPhoto} alt = "Team Photo" className = {styles.sponsorLogo}/>
            <Image src = {teamPhoto} alt = "Team Photo" className = {styles.sponsorLogo}/>
            <Image src = {teamPhoto} alt = "Team Photo" className = {styles.sponsorLogo}/>
          </div>
          <div className={styles.buttonRow}>
            <Link href= "/sponsors" className ="button">Explore Our Sponsors</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
