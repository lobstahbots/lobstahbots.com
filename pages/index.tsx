import styles from "./index.module.css";
import Overlay from "../components/overlay";
import Image from "next/image";
import Link from "next/link";
import teamPhoto from "../images/index/team-photo.jpg";
import BULogo from "../images/sponsor-logos/BULogo.png";
import BayerLogo from "../images/sponsor-logos/BayerLogo.png";
import BoeingLogo from "../images/sponsor-logos/BoeingLogo.png";
import HaasLogo from "../images/sponsor-logos/HaasLogo.png";
import { Twitter } from "react-feather";
import { Instagram } from "react-feather";
import { Youtube } from "react-feather";
import { ArrowRight } from "react-feather";

export default function Page () {
  return (
    <main>
      <div className = "section">
        <Overlay background = {
          <Image src = {teamPhoto} alt = "Lobstah Bots Team Photo" className = "responsiveImage"/>
        } content = {
          <div className={styles.photoDimBackground}>
            <p className = {`${styles.photoText} container`}>We are <strong>Lobstah Bots</strong>, a FIRST Robotics team that aims to bring access to robotics to students in the Greater Boston area.</p>
          </div>
        }/>
      </div>
      <div className = "section">
        <div className = "container">
          <h1>What is the FIRST Robotics Competition?</h1>
          <div className = "sectionWith1_1Cols">
            <div className = "leftCol">
              <p>
                FIRST (For Inspiration and Recognition of Science and Technology) was founded in 1992 by Dean Kamen, inventor of the Segway. The mission of FIRST is to inspire young people to be science and technology leaders, by engaging them in exciting programs that build STEM skills and teach self-confidence, communication, and leadership. The FIRST Robotics Competition is an international program consisting of thousands of teams and tens of thousands of students. In FRC, students have just a few weeks to design, build, and code a 100+ pound robot that can compete in a complex engineering challenge. FRC gives students exposure to engineering, technical design, business management, marketing and many more skills that can be used in college and industry. Most FIRST alumni go to a 4-year college and end up employed in the STEM industry.
              </p>
              <div className={styles.rightButtonRow}>
                <Link href= "https://www.firstinspires.org/" className ="button">Explore FIRST</Link>
              </div>
            </div>

            <div className = "rightCol">
              <Image src = {teamPhoto} alt = "Lobstah Bots Team Photo" className = "responsiveImage oppositeRoundCorners"/>
            </div>
          </div>
        </div>
      </div>
      <div className = "section">
        <div className = "container">
          <h1>Explore the 2023 Season</h1>
          <div className = "sectionWith1_2Cols">
            <div className = "rightCol">
              <div className={styles.eventLinks}>
                <div className={styles.link}>
                  <h3>Event 1:</h3>
                  <Link href="https://www.thebluealliance.com/event/2023week0" className="link">2023 Week 0 in Nashua, NH</Link>
                </div>
                <div className={styles.link}>
                  <h3>Event 2:</h3>
                  <Link href="https://www.thebluealliance.com/event/2023rinsc" className="link">2023 New England District Rhode Island Event</Link>
                </div>
                <div className={styles.link}>
                  <h3>Event 3:</h3>
                  <Link href="https://www.thebluealliance.com/event/2023mabos" className="link">2023 New England District Greater Boston Event</Link>
                </div>
                <div className={styles.link}>
                  <h3>Event 4:</h3>
                  <Link href="https://www.thebluealliance.com/event/2023necmp2" className="link">2023 New England FIRST District Championships - Wilson Division</Link>
                </div>
              </div>

              <div className={styles.buttonRow}>
                <Link href="/gallery" className={`${styles.seeMore} borderButton`}>Past Events <ArrowRight /></Link>
              </div>
            </div>
            <div className = "leftCol">
              <Image src = {teamPhoto} alt = "Robot Photo" className = "responsiveImage oppositeRoundCorners"/>
            </div>
          </div>
        </div>
      </div>
      <div className = "graySection">
        <div className = "container">
          <h1>See The Latest</h1>
          <h4>Follow Us!</h4>
          <div className = {styles.mediaIcons}>
            <Link href = "https://twitter.com/"><Twitter/></Link>
            <Link href = "https://instagram.com/"><Instagram/></Link>
            <Link href = "https://youtube.com/"><Youtube/></Link>
          </div>
          <div className={styles.buttonRow}>
            <Link href="/gallery" className={styles.seeMore}>Gallery <ArrowRight /></Link>
          </div>
        </div>
      </div>
      <div className = "section">
        <div className = "container">
          <div className = "sectionWith1_1Cols">
            <div className = "leftCol">
              <h1>Our Members Matter</h1>
              <div>
                <p>What would a team be without its dedicated members? From freshman to senior year, high school students from all over the Greater Boston area collaborate, innovate, and cultivate a variety of practical real-world skills on Team 246.</p>
              </div>
              <div className={styles.leftButtonRow}>
                <Link href= "/team" className ="button">Meet The Team</Link>
              </div>
            </div>
            <div className = {styles.leftButtonRow}>
              <Image src = {teamPhoto} alt = "Team Photo" className = "responsiveImage oppositeRoundCorners"/>
            </div>
          </div>
        </div>
      </div>
      <div className = "highlightedSection">
        <div className = "container">
          <div className = "sectionWith1_2Cols">
            <div className = "leftCol">
              <h1>Support Us!</h1>
              <div className={styles.leftButtonRow}>
                <Link href= "/sponsors" className ="button">Sponsor Package</Link>
                <Link href= "/contact" className ="button">Contact Us</Link>
                <Link href= "/donate" className ="button">Donate</Link>
              </div>
            </div>
            <div className = "rightCol">
              <div className = {styles.textBlock}>
                <p>We rely on sponsors to provide the funds we need to build robots and run the team. Donations are used to purchase tools and materials, pay for competition registration fees, subsidize travel costs for students attending competitions, promote STEM in the local community, and much more. Without our sponsors, the team could not exist. For more information, please reach out!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = "section">
        <div className = "container">
          <h1>2023 Sponsors</h1>
          <div className = {styles.gallery}>
            <Image src = {BayerLogo} alt = "Bayer Logo" className = {styles.sponsorLogo}/>
            <Image src = {BoeingLogo} alt = "Boeing Logo" className = {styles.sponsorLogo}/>
            <Image src = {BULogo} alt = "BU Logo" className = {styles.sponsorLogo}/>
            <Image src = {HaasLogo} alt = "Haas Logo" className = {styles.sponsorLogo}/>
          </div>
        </div>
      </div>
    </main>
  );
}
