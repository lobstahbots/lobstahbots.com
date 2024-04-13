import styles from "./styles.module.css";
import competition from "../../images/index/competition.jpeg";
import entrepreneurship from "../../images/index/week2-team-photo.jpg";
import quality from "../../images/index/team-photo.jpg";
import creativity from "../../images/awards/creativity.jpg";
import engineering from "../../images/awards/engineering.jpeg";
import finalist from "../../images/awards/finalist_photo.jpg";
import innovation from "../../images/awards/innovation.jpg";
import sportsmanship from "../../images/awards/sportsmanship.jpg";
import impact from "../../images/awards/impact.jpg";
import engineering_2 from "../../images/awards/engineering_2.jpg";
import defense from "../../images/awards/defense.jpg";
import this_year from "../../images/awards/2023.jpg";
import winners from "../../images/awards/winners.jpg";
import matchPhoto from "../../images/index/match-photo.jpg";
import teamSelfie from "../../images/index/team-selfie.jpg";
import Image from "next-image-export-optimizer";
import PageTitle from "../../components/page-title";
import llama from "../../images/history/llama.jpg";
import win from "../../images/gallery/102-101.jpg";
import selfie from "../../images/gallery/selfie.jpg";
import catan from "../../images/gallery/catan.jpg";
import santa_lobstah from "../../images/gallery/santa_lobstah.jpg";
import stress_ball from "../../images/gallery/lobstah-stress-ball.jpg";
import drive_selfie from "../../images/gallery/drive-selfie.jpg";
import teamwork from "../../images/gallery/teamwork.jpg";
import building from "../../images/gallery/building.jpg";
import meeting from "../../images/gallery/meeting.jpg";
import archetypes from "../../images/gallery/archetypes.jpg";
import cad from "../../images/gallery/cad.jpg";
import capybara from "../../images/gallery/capybara.jpg";
import chasing from "../../images/gallery/chasing.jpg";
import girl_power from "../../images/gallery/girl-power.jpg";
import intake_prototyping from "../../images/gallery/intake-prototyping.jpg";
import note from "../../images/gallery/note.jpg";
import posing from "../../images/gallery/posing-with-capybara.jpg";
import stem_week from "../../images/gallery/stem-week.jpg";
import training from "../../images/gallery/training.jpg";
import crochet from "../../images/gallery/crochet.jpg";
import milling from "../../images/gallery/milling.jpg";
import drill_press from "../../images/gallery/drill-press.jpg";
import drive_over_intake from "../../images/gallery/drive-over-intake.jpg";
import hybrid from "../../images/gallery/hybrid.jpg";
import kickoff from "../../images/gallery/kickoff.jpg";
import microphone from "../../images/gallery/microphone.jpg";
import circle23 from "../../images/gallery/2023-circle.jpg";
import aiming from "../../images/gallery/aiming.jpg";
import aiming2 from "../../images/gallery/aiming-2.jpg";
import aiming3 from "../../images/gallery/aiming-3.jpg";
import aiming4 from "../../images/gallery/aiming-4.jpg";
import aiming5 from "../../images/gallery/aiming-5.jpg";
import archetypes2 from "../../images/gallery/archetypes-2.jpg";
import capybara2 from "../../images/gallery/capybara2.jpg";
import chaoticselfie1 from "../../images/gallery/chaotic-selfie-1.jpg";
import culting from "../../images/gallery/culting.jpg";
import girlpower23 from "../../images/gallery/girl-power-23.jpg";
import driveteam from "../../images/gallery/drive-team.jpg";
import driveteam2 from "../../images/gallery/drive-team2.jpg";
import driveteam3 from "../../images/gallery/drive-team-3.jpg";
import driveteam4 from "../../images/gallery/drive-team-5.jpg";
import driveteam6 from "../../images/gallery/drive-team-6.jpg";
import driveteam7 from "../../images/gallery/drive-team-7.jpg";
import kickoff1 from "../../images/gallery/kickoff-1.jpg";
import kickoff2 from "../../images/gallery/kickoff-2.jpg";
import lobster from "../../images/gallery/lobster.jpg";
import mastem from "../../images/gallery/ma-stem.jpg";
import pickingup from "../../images/gallery/picking-up.jpg";
import pitcrew from "../../images/gallery/pit-crew.jpg";
import pitcrew2 from "../../images/gallery/pit-crew-2.jpg";
import pitcrew3 from "../../images/gallery/pit-crew-3.jpg";
import pitcrew4 from "../../images/gallery/pit-crew-4.jpg";
import queue from "../../images/gallery/queue.jpg";
import scouting from "../../images/gallery/scouting.jpg";
import screwdriver from "../../images/gallery/screwdriver.jpg";
import strat from "../../images/gallery/strat.jpg";
import watchingmatches from "../../images/gallery/watching-matches.jpeg";
import woodpecker1 from "../../images/gallery/woodpecker-portrait.jpg";
import woodpecker2 from "../../images/gallery/woodpecker-portrait-2.jpg";
import slas1 from "../../images/gallery/slas-1.jpg";
import slas2 from "../../images/gallery/slas-2.jpg";
import slas3 from "../../images/gallery/slas-3.jpg";
import slas4 from "../../images/gallery/slas-4.jpeg";
import quality24 from "../../images/awards/quality2024.jpg";
import judges24 from "../../images/awards/judges2024.jpg";
import innovation24 from "../../images/index/members.jpg";
import rolling from "../../images/index/rolling.jpg";
import queue2 from "../../images/index/in-queue.jpg";
import culting2 from "../../images/index/culting.jpg";

export const metadata = {
  title: "Gallery",
};

export default function Gallery () {
  return (
    <main>
      <PageTitle>
      Gallery
      </PageTitle>
      <section className="section">
        <h1 className="container">2024</h1>
        <div className={styles.gallery}>
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { driveteam } alt = "Drive Team Greater Boston" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { rolling } alt = "Rolling To Queue At District Champs" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { pitcrew } alt = "Pit Crew At District Champs" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { aiming5 } alt = "Aiming At Speaker" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { queue } alt = "Waiting In Queue" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { kickoff } alt = "Kickoff" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { aiming2 } alt = "Aiming At Speaker" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { innovation24 } alt = "Innovation And Control Award At District Champs" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { lobster } alt = "Shoulder Lobster And Larry" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { chaoticselfie1 } alt = "Chaotic Team Selfie" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { woodpecker2 } alt = "Artsy Woodpecker Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { crochet } alt = "Crochet Lobster Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { pitcrew3 } alt = "Pit Crew at Greater Boston" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { microphone } alt = "Building Practice Field Elements" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { queue2 } alt = "Queueing At BSU District Event" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { note } alt = "Does Note Fit Under Robot?" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { aiming4 } alt = "Aiming At Speaker" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { strat } alt = "Discussing Match Strategy" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { woodpecker1 } alt = "Woodpecker Portrait" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { watchingmatches } alt = "Watching Matches At District Champs" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { slas1 } alt = "SLAS Robot Demo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { screwdriver } alt = "Technicians Ft. Hair Screwdriver" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { drill_press } alt = "Using The Drill Press" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { aiming3 } alt = "Aiming At Speaker" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { driveteam7 } alt = "Looking Up At Robot And Drive Team" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { kickoff1 } alt = "Kickoff Bird's Eye" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { scouting } alt = "Scouting Meeting Greater Boston" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { culting } alt = "Culting In Greater Boston Elims" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { drive_over_intake } alt = "Watching RI3D Drive-Over-Intake Prototype" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { quality24 } alt = "Quality Award At BSU District Event" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { slas3 } alt = "SLAS Green Monster Driving The Robot" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { driveteam3 } alt = "Drive Team Getting Robot Off Field" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { driveteam2 } alt = "Behind The Glass At Greater Boston" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { capybara2 } alt = "Capybara Keeping The Team Company" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { pitcrew2 } alt = "Pit Crew At BSU District Event" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { archetypes } alt = "Archetypes at Kickoff Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { slas2 } alt = "SLAS Team Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { driveteam6 } alt = "Drive Team In Queue At BSU District Event" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { kickoff } alt = "Kickoff Fun" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { judges24 } alt = "Judges' Award At Greater Boston District Event" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { archetypes2 } alt = "Writing Archetypes With Lobster" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { pickingup } alt = "Picking Up From Source" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { aiming } alt = "Aiming At Speaker" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { culting2 } alt = "Culting At District Champs" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { driveteam4 } alt = "Drive Team At District Champs" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { slas4 } alt = "SLAS Photo With A Dino" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { intake_prototyping } alt = "Cutting Wood" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { pitcrew4 } alt = "Rolling To Queue At Greater Boston" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { kickoff2 } alt = "Robot Archetypes Discussion At Kickoff" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { hybrid } alt = "Hybrid Kickoff (Snow!)" />

        </div>
      </section>
      <section className="section">
        <h1 className="container">2023</h1>
        <div className={styles.gallery}>
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { competition } alt = "Compeitition Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { santa_lobstah } alt = "Santa Lobster" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { meeting } alt = "Team Meeting Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { engineering } alt = "Engineering Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { drive_selfie } alt = "Drive Team Selfie" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { building } alt = "Fixing Robot" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { this_year } alt = "Drive Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { quality } alt = "Quality Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { selfie } alt = "Drive Selfie" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { mastem } alt = "Demo at MA STEM Week 2023" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { impact } alt = "Impact Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { girl_power } alt = "Girl Power Event" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { llama } alt = "Robot Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { win } alt = "Match Win" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { innovation } alt = "Innovation Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { stress_ball } alt = "Stress Ball Lobster" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { teamwork } alt = "Teamwork High Five" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { teamSelfie } alt = "Team Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { finalist } alt = "Finalist Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { engineering_2 } alt = "Engineering Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { catan } alt = "Catan" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { entrepreneurship } alt = "Entrepreneurship Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { creativity } alt = "Creativity Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { winners } alt = "Winners Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { sportsmanship } alt = "Sportsmanship Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { defense } alt = "Defense Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { girlpower23 } alt = "Demo at Girl Power Event" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { circle23 } alt = "Demo at Girl Power Event" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { cad } alt = "Intake CAD Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { milling } alt = "Learning The Mill" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { capybara } alt = "Capybara Robot Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { stem_week } alt = "MA STEM Week Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { chasing } alt = "Demo at Girl Power Event" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { posing } alt = "Posing With Capybara" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { matchPhoto } alt = "Match Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { training } alt = "Fall Mechanical Training Photo" />
        </div>
      </section>
    </main>
  );
}
