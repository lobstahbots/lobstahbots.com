import styles from "./page.module.css";
import Overlay from "../components/overlay";
import Image from "next/image";
import Link from "next/link";
import eventPhoto from "../images/index/rolling.jpg";
import matchPhoto from "../images/index/match-photo.jpg";
import teamSelfie from "../images/index/culting.jpg";
import teamPhoto2 from "../images/index/members.jpg";

import { ExternalLink, Instagram, Youtube, ArrowRight, GitHub } from "react-feather";
import SponsorsSection from "../components/sponsors-section";
import { getAllPosts } from "../lib/api";
import PostPreview from "../components/postPreview";
import { yearPropOverrides as years } from "./history/page";
import { headers, TEAM_KEY, toEventsList } from "../lib/tbaStuff";
import { SimpleEvent } from "../lib/types";

export default async function Page() {
  const data = await getAllPosts();
  const posts = data.slice(0, 3);
  const thisYear = [...years].sort((a, b) => b.year - a.year)[0];

  const eventsResponse = await fetch(
    `https://www.thebluealliance.com/api/v3/team/${TEAM_KEY}/events/${thisYear.year}/simple`,
    { headers, cache: "force-cache" },
  );

  const events = toEventsList((await eventsResponse.json()) as SimpleEvent[]);

  return (
    <main>
      <header>
        <Overlay>
          <Image src={teamSelfie} alt="Lobstah Bots Team Photo" className={styles.heroBackground} />
          <div className="container">
            <p className={styles.heroText}>
              We are <strong>Lobstah Bots</strong>, a Boston-based <i>FIRST</i>® Robotics team
              developing skills and creating memories in a collaborative environment.
            </p>
          </div>
        </Overlay>
      </header>
      <section className="section container">
        <h1>
          What is the <i>FIRST</i> Robotics Competition?
        </h1>
        <div className="cols1_1">
          <div>
            <p>
              <i>FIRST</i> (For Inspiration and Recognition of Science and Technology) was founded
              in 1992 by Dean Kamen, inventor of the Segway. The mission of <i>FIRST</i> is to
              inspire young people to be science and technology leaders, by engaging them in
              exciting programs that build STEM skills and teach self-confidence, communication, and
              leadership. The <i>FIRST</i> Robotics Competition is an international program
              consisting of thousands of teams and tens of thousands of students. In FRC, students
              have just a few weeks to design, build, and code a 100+ pound robot that can compete
              in a complex engineering challenge. FRC gives students exposure to engineering,
              technical design, business management, marketing and many more skills that can be used
              in college and industry. Most <i>FIRST</i> alumni go to a 4-year college and end up
              employed in the STEM industry.
            </p>
            <div className={styles.rightButtonRow}>
              <Link href="https://www.firstinspires.org/" className="button">
                Explore FIRST
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={matchPhoto}
              alt="District Champs Match Photo"
              className="responsive-image brand-border"
            />
          </div>
        </div>
      </section>
      <section className="section container">
        <h1>Explore the {thisYear.year} Season</h1>
        <div className="cols1_2">
          <div>
            <Image
              src={eventPhoto}
              alt={`${thisYear.year} Event Photo`}
              className="responsive-image brand-border"
            />
          </div>
          <div className={styles.event}>
            <div className={styles.eventLinks}>
              {events.map((event, index) => (
                <div className={styles.link} key={event.link}>
                  <h3>Event {index + 1}:</h3>
                  <Link href={event.link} className="link">
                    {event.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className={styles.buttons}>
              <div className={styles.leftButtonRow}>
                <Link href={thisYear.link} className="button">
                  {" "}
                  {thisYear.year} Season Game Reveal <ExternalLink />{" "}
                </Link>
                <Link href="/history" className="button">
                  Past Events <ArrowRight />
                </Link>
                <Link href="/awards" className="button">
                  {" "}
                  Check Out Our Awards
                  <ArrowRight />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray">
        <div className="container section">
          <h1>See The Latest</h1>
          <div className={styles.posts}>
            {posts.map((post) => (
              <div className={styles.postCard} key={post.slug}>
                <PostPreview post={post} />
              </div>
            ))}
          </div>

          <div className={styles.buttonRow}>
            <div className={styles.leftButtonRow}>
              <div className={styles.follow}>Follow Us:</div>
              <div className={styles.mediaIcons}>
                <Link href="https://www.instagram.com/burobotics246/?hl=en" target="_blank">
                  <Instagram className={styles.mediaIcon} />
                </Link>
                <Link href="https://www.youtube.com/@burobotics/" target="_blank">
                  <Youtube className={styles.mediaIcon} />
                </Link>
                <Link href="https://www.github.com/lobstahbots/" target="_blank">
                  <GitHub className={styles.mediaIcon} />
                </Link>
              </div>
            </div>
            <div className={styles.rightButtonRow}>
              <Link href="/blog" className="button">
                {" "}
                More Posts <ArrowRight />
              </Link>
              <Link href="/gallery" className="button">
                {" "}
                Team Gallery <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section container cols1_1">
        <div>
          <h1>Our Members Matter</h1>
          <div>
            <p>
              What would a team be without its dedicated members? From freshman to senior year, high
              school students from all over the Greater Boston area collaborate, innovate, and
              cultivate a variety of practical real-world skills on Team 246.
            </p>
          </div>
          <div className={styles.leftButtonRow}>
            <Link href="/team" className="button">
              Meet The Team <ArrowRight />
            </Link>
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
            <Link
              href="https://drive.google.com/file/d/1RZfQazIUt9vKnLXxb56axNBI7H7Gtghv/view?usp=sharing"
              target="_blank"
              className={styles.sponsorUs}
            >
              Sponsorship Information
            </Link>
          </div>
          <div className={styles.textBlock}>
            <p>
              We rely on sponsors to provide the funds we need to build robots and run the team.
              Donations are used to purchase tools and materials, pay for competition registration
              fees, subsidize travel costs for students attending competitions, promote STEM in the
              local community, and much more. Without our sponsors, the team could not exist. For
              more information, please reach out!
            </p>
            <div className={styles.rightButtonRow}>
              <Link href="/contact" className="button-white">
                Contact
              </Link>
              <Link
                href="/donate"
                className="button-white"
              >
                Donate
              </Link>
              <Link href="/store" className="button-white">
                Shop Our Store
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SponsorsSection />
    </main>
  );
}
