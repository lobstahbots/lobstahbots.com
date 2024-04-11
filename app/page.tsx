import styles from "./page.module.css";
import Overlay from "../components/overlay";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import eventPhoto from "../images/index/competition.jpeg";
import matchPhoto from "../images/index/match-photo.jpg";
import teamSelfie from "../images/index/team-selfie.jpg";
import teamPhoto2 from "../images/index/week2-team-photo.jpg";

import { ExternalLink, Twitter } from "react-feather";
import { Instagram } from "react-feather";
import { Youtube } from "react-feather";
import { ArrowRight } from "react-feather";
import SponsorsSection from "../components/sponsors-section";
import { getAllPosts } from "../lib/api";
import PostPreview from "../components/postPreview";

export default function Page () {
  const data = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const posts = data.slice(0, 3);

  return (
    <main>
      <header>
        <Overlay>
          <Image src={teamSelfie} alt="Lobstah Bots Team Photo" className={styles.heroBackground} />
          <div className="container">
            <p className={styles.heroText}>We are <strong>Lobstah Bots</strong>, a <i>FIRST</i>® Robotics team based out of Boston University Academy and the Match Charter School that aims to bring access to robotics to students in the Greater Boston area.</p>
          </div>
        </Overlay>
      </header>
      <section className="section container">
        <h1>What is the <i>FIRST</i> Robotics Competition?</h1>
        <div className="cols1_1">
          <div>
            <p>
              <i>FIRST</i> (For Inspiration and Recognition of Science and Technology) was founded in 1992 by Dean Kamen, inventor of the Segway. The mission of <i>FIRST</i> is to inspire young people to be science and technology leaders, by engaging them in exciting programs that build STEM skills and teach self-confidence, communication, and leadership. The <i>FIRST</i> Robotics Competition is an international program consisting of thousands of teams and tens of thousands of students. In FRC, students have just a few weeks to design, build, and code a 100+ pound robot that can compete in a complex engineering challenge. FRC gives students exposure to engineering, technical design, business management, marketing and many more skills that can be used in college and industry. Most <i>FIRST</i> alumni go to a 4-year college and end up employed in the STEM industry.
            </p>
            <div className={styles.rightButtonRow}>
              <Link href="https://www.firstinspires.org/" className="button">Explore FIRST</Link>
            </div>
          </div>
          <div>
            <Image src={matchPhoto} alt="District Champs Match Photo" className="responsive-image brand-border" />
          </div>
        </div>
      </section>
      <section className="section container">
        <h1>Explore the 2024 Season</h1>
        <div className="cols1_2">
          <div>
            <Image src={eventPhoto} alt="2023 Event Photo" className="responsive-image brand-border" />
          </div>
          <div className = {styles.event}>
            <div className={styles.eventLinks}>
              <div className={styles.link}>
                <h3>Event 1:</h3>
                <Link href="https://www.thebluealliance.com/" className="link">2024 Week 0 in Nashua, New Hampshire</Link>
              </div>
              <div className={styles.link}>
                <h3>Event 2:</h3>
                <Link href ="https://www.thebluealliance.com/event/2024mabri" className="link">2024 New England District Bridgewater Event</Link>
              </div>
              <div className={styles.link}>
                <h3>Event 3:</h3>
                <Link href ="https://www.thebluealliance.com/event/2024mabos" className="link">2024 New England District Greater Boston Event</Link>
              </div>
            < div className = { styles.link } >
                <h3>Event 4: </h3>
              < Link href = "https://www.thebluealliance.com/event/2024necmp1" className = "link" > 2024 New England District Championships - Ganson Division < /Link>
            < /div>
            </div>
            <div className = {styles.buttons}>
              <div className={styles.leftButtonRow}>
                <Link href = "https://www.youtube.com/watch?v=9keeDyFxzY4&ab_channel=FIRSTRoboticsCompetition" className = "button" > 2024 Season Game Reveal < ExternalLink /> </Link>
                <Link href="/history" className="button">Past Events <ArrowRight /></Link>
                <Link href = "/awards" className = "button"> Check Out Our Awards< ArrowRight /> </Link>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="bg-gray">
        <div className="container section">
          <h1>See The Latest</h1>
          <div className = { styles.posts } >
            {
              posts.map((post) => (
                <div className = {styles.postCard}>
                  <PostPreview post= { post } />
                </div>
              ))
            }
          </div>

          <div className = {styles.buttonRow}>
            <div className = {styles.leftButtonRow}>
              <div className = {styles.follow}>Follow Us:</div>
              <div className={styles.mediaIcons}>
                <Link href="https://twitter.com/" target="_blank"><Twitter className={styles.mediaIcon} /></Link>
                <Link href="https://www.instagram.com/burobotics246/?hl=en" target="_blank"><Instagram className={styles.mediaIcon} /></Link>
                <Link href="https://www.youtube.com/@burobotics/" target="_blank"><Youtube className={styles.mediaIcon} /></Link>
              </div>
            </div>
            <div className={styles.rightButtonRow}>
              <Link href="/blog" className="button"> More Posts <ArrowRight /></Link>
              <Link href = "/gallery" className = "button" > Team Gallery <ArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section container cols1_1">
        <div>
          <h1>Our Members Matter</h1>
          <div>
            <p>What would a team be without its dedicated members? From freshman to senior year, high school students from all over the Greater Boston area collaborate, innovate, and cultivate a variety of practical real-world skills on Team 246.</p>
          </div>
          <div className={styles.leftButtonRow}>
            <Link href="/team" className="button">Meet The Team <ArrowRight /></Link>
          </div>
        </div>
        <div>
          <Image src={teamPhoto2} alt="Team Photo" className="responsive-image brand-border" />
        </div>
      </section>
      <section className="bg-brand">
        <div className="section container cols1_2">
          <div>
            <h1>Support Us!</h1>
            <Link href="https://drive.google.com/file/d/1RZfQazIUt9vKnLXxb56axNBI7H7Gtghv/view?usp=sharing" target="_blank" className={styles.sponsorUs}>Sponsorship Information</Link>
          </div>
          <div className={styles.textBlock}>
            <p>We rely on sponsors to provide the funds we need to build robots and run the team. Donations are used to purchase tools and materials, pay for competition registration fees, subsidize travel costs for students attending competitions, promote STEM in the local community, and much more. Without our sponsors, the team could not exist. For more information, please reach out!</p>
            <div className={styles.rightButtonRow}>
              <Link href="/contact" className="button-white">Contact</Link>
              <Link href="https://trusted.bu.edu/s/1759/2-bu/giving/interior.aspx?sid=1759&gid=2&pgid=3962&cid=7331&dids=359&bledit=1&appealcode=WEBBUA" className="button-white">Donate</Link>
            </div>
          </div>
        </div>
      </section>
      <SponsorsSection />
    </main>
  );
}
