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
import PageTitle from "../../components/page-title";
import GalleryImage from "../../components/galleryImage";
import llama from "../../images/history/llama.jpg";
import win from "../../images/gallery/2023/102-101.jpg";
import selfie from "../../images/gallery/2023/selfie.jpg";
import catan from "../../images/gallery/2023/catan.jpg";
import santa_lobstah from "../../images/gallery/2023/santa_lobstah.jpg";
import stress_ball from "../../images/gallery/2023/lobstah-stress-ball.jpg";
import drive_selfie from "../../images/gallery/2023/drive-selfie.jpg";
import teamwork from "../../images/gallery/2023/teamwork.jpg";
import building from "../../images/gallery/2023/building.jpg";
import meeting from "../../images/gallery/2023/meeting.jpg";
import archetypes from "../../images/gallery/2024/archetypes.jpg";
import cad from "../../images/gallery/2023/cad.jpg";
import capybara from "../../images/gallery/2023/capybara.jpg";
import chasing from "../../images/gallery/2023/chasing.jpg";
import girl_power from "../../images/gallery/2023/girl-power.jpg";
import intake_prototyping from "../../images/gallery/2024/intake-prototyping.jpg";
import note from "../../images/gallery/2024/note.jpg";
import posing from "../../images/gallery/2023/posing-with-capybara.jpg";
import stem_week from "../../images/gallery/2023/stem-week.jpg";
import training from "../../images/gallery/2023/training.jpg";
import crochet from "../../images/gallery/2024/crochet.jpg";
import milling from "../../images/gallery/2023/milling.jpg";
import drill_press from "../../images/gallery/2024/drill-press.jpg";
import drive_over_intake from "../../images/gallery/2024/drive-over-intake.jpg";
import hybrid from "../../images/gallery/2024/hybrid.jpg";
import kickoff from "../../images/gallery/2024/kickoff.jpg";
import microphone from "../../images/gallery/2024/microphone.jpg";
import circle23 from "../../images/gallery/2023/2023-circle.jpg";
import aiming from "../../images/gallery/2024/aiming.jpg";
import aiming2 from "../../images/gallery/2024/aiming-2.jpg";
import aiming3 from "../../images/gallery/2024/aiming-3.jpg";
import aiming4 from "../../images/gallery/2024/aiming-4.jpg";
import aiming5 from "../../images/gallery/2024/aiming-5.jpg";
import archetypes2 from "../../images/gallery/2024/archetypes-2.jpg";
import capybara2 from "../../images/gallery/2024/capybara2.jpg";
import chaoticselfie1 from "../../images/gallery/2024/chaotic-selfie-1.jpg";
import culting from "../../images/gallery/2024/culting.jpg";
import girlpower23 from "../../images/gallery/2023/girl-power-23.jpg";
import driveteam from "../../images/gallery/2024/drive-team.jpg";
import driveteam2 from "../../images/gallery/2024/drive-team2.jpg";
import driveteam3 from "../../images/gallery/2024/drive-team-3.jpg";
import driveteam4 from "../../images/gallery/2024/drive-team-5.jpg";
import driveteam6 from "../../images/gallery/2024/drive-team-6.jpg";
import driveteam7 from "../../images/gallery/2024/drive-team-7.jpg";
import kickoff1 from "../../images/gallery/2024/kickoff-1.jpg";
import kickoff2 from "../../images/gallery/2024/kickoff-2.jpg";
import lobster from "../../images/gallery/2024/lobster.jpg";
import mastem from "../../images/gallery/2023/ma-stem.jpg";
import pickingup from "../../images/gallery/2024/picking-up.jpg";
import pitcrew from "../../images/gallery/2024/pit-crew.jpg";
import pitcrew2 from "../../images/gallery/2024/pit-crew-2.jpg";
import pitcrew3 from "../../images/gallery/2024/pit-crew-3.jpg";
import pitcrew4 from "../../images/gallery/2024/pit-crew-4.jpg";
import queue from "../../images/gallery/2024/queue.jpg";
import scouting from "../../images/gallery/2024/scouting.jpg";
import screwdriver from "../../images/gallery/2024/screwdriver.jpg";
import strat from "../../images/gallery/2024/strat.jpg";
import watchingmatches from "../../images/gallery/2024/watching-matches.jpeg";
import woodpecker1 from "../../images/gallery/2024/woodpecker-portrait.jpg";
import woodpecker2 from "../../images/gallery/2024/woodpecker-portrait-2.jpg";
import slas1 from "../../images/gallery/2024/slas-1.jpg";
import slas2 from "../../images/gallery/2024/slas-2.jpg";
import slas3 from "../../images/gallery/2024/slas-3.jpg";
import slas4 from "../../images/gallery/2024/slas-4.jpeg";
import quality24 from "../../images/awards/quality2024.jpg";
import judges24 from "../../images/awards/judges2024.jpg";
import innovation24 from "../../images/index/members.jpg";
import rolling from "../../images/index/rolling.jpg";
import queue2 from "../../images/index/in-queue.jpg";
import culting2 from "../../images/index/culting.jpg";

export const metadata = {
  title: "Gallery",
};

export default function Gallery() {
  return (
    <main>
      <PageTitle>Gallery</PageTitle>
      <section className="section">
        <h1 className="container">2024</h1>
        <div className={styles.gallery}>
          <GalleryImage src={driveteam} alt="Drive Team Greater Boston" />
          <GalleryImage src={rolling} alt="Rolling To Queue At District Champs" />
          <GalleryImage src={pitcrew} alt="Pit Crew At District Champs" />
          <GalleryImage src={aiming5} alt="Aiming At Speaker" />
          <GalleryImage src={queue} alt="Waiting In Queue" />
          <GalleryImage src={aiming2} alt="Aiming At Speaker" />
          <GalleryImage src={innovation24} alt="Innovation And Control Award At District Champs" />
          <GalleryImage src={lobster} alt="Shoulder Lobster And Larry" />
          <GalleryImage src={chaoticselfie1} alt="Chaotic Team Selfie" />
          <GalleryImage src={woodpecker2} alt="Artsy Woodpecker Photo" />
          <GalleryImage src={crochet} alt="Crochet Lobster Photo" />
          <GalleryImage src={pitcrew3} alt="Pit Crew at Greater Boston" />
          <GalleryImage src={microphone} alt="Building Practice Field Elements" />
          <GalleryImage src={queue2} alt="Queueing At BSU District Event" />
          <GalleryImage src={note} alt="Does Note Fit Under Robot?" />
          <GalleryImage src={aiming4} alt="Aiming At Speaker" />
          <GalleryImage src={strat} alt="Discussing Match Strategy" />
          <GalleryImage src={woodpecker1} alt="Woodpecker Portrait" />
          <GalleryImage src={watchingmatches} alt="Watching Matches At District Champs" />
          <GalleryImage src={slas1} alt="SLAS Robot Demo" />
          <GalleryImage src={screwdriver} alt="Technicians Ft. Hair Screwdriver" />
          <GalleryImage src={drill_press} alt="Using The Drill Press" />
          <GalleryImage src={aiming3} alt="Aiming At Speaker" />
          <GalleryImage src={driveteam7} alt="Looking Up At Robot And Drive Team" />
          <GalleryImage src={kickoff1} alt="Kickoff Bird's Eye" />
          <GalleryImage src={scouting} alt="Scouting Meeting Greater Boston" />
          <GalleryImage src={culting} alt="Culting In Greater Boston Elims" />
          <GalleryImage src={drive_over_intake} alt="Watching RI3D Drive-Over-Intake Prototype" />
          <GalleryImage src={quality24} alt="Quality Award At BSU District Event" />
          <GalleryImage src={slas3} alt="SLAS Green Monster Driving The Robot" />
          <GalleryImage src={driveteam3} alt="Drive Team Getting Robot Off Field" />
          <GalleryImage src={driveteam2} alt="Behind The Glass At Greater Boston" />
          <GalleryImage src={capybara2} alt="Capybara Keeping The Team Company" />
          <GalleryImage src={pitcrew2} alt="Pit Crew At BSU District Event" />
          <GalleryImage src={archetypes} alt="Archetypes at Kickoff Photo" />
          <GalleryImage src={slas2} alt="SLAS Team Photo" />
          <GalleryImage src={driveteam6} alt="Drive Team In Queue At BSU District Event" />
          <GalleryImage src={kickoff} alt="Kickoff Fun" />
          <GalleryImage src={judges24} alt="Judges' Award At Greater Boston District Event" />
          <GalleryImage src={archetypes2} alt="Writing Archetypes With Lobster" />
          <GalleryImage src={pickingup} alt="Picking Up From Source" />
          <GalleryImage src={aiming} alt="Aiming At Speaker" />
          <GalleryImage src={culting2} alt="Culting At District Champs" />
          <GalleryImage src={driveteam4} alt="Drive Team At District Champs" />
          <GalleryImage src={slas4} alt="SLAS Photo With A Dino" />
          <GalleryImage src={intake_prototyping} alt="Cutting Wood" />
          <GalleryImage src={pitcrew4} alt="Rolling To Queue At Greater Boston" />
          <GalleryImage src={kickoff2} alt="Robot Archetypes Discussion At Kickoff" />
          <GalleryImage src={hybrid} alt="Hybrid Kickoff (Snow!)" />
        </div>
      </section>
      <section className="section">
        <h1 className="container">2023</h1>
        <div className={styles.gallery}>
          <GalleryImage src={competition} alt="Compeitition Photo" />
          <GalleryImage src={santa_lobstah} alt="Santa Lobster" />
          <GalleryImage src={meeting} alt="Team Meeting Photo" />
          <GalleryImage src={engineering} alt="Engineering Photo" />
          <GalleryImage src={drive_selfie} alt="Drive Team Selfie" />
          <GalleryImage src={building} alt="Fixing Robot" />
          <GalleryImage src={this_year} alt="Drive Photo" />
          <GalleryImage src={quality} alt="Quality Photo" />
          <GalleryImage src={selfie} alt="Drive Selfie" />
          <GalleryImage src={mastem} alt="Demo at MA STEM Week 2023" />
          <GalleryImage src={impact} alt="Impact Photo" />
          <GalleryImage src={girl_power} alt="Girl Power Event" />
          <GalleryImage src={llama} alt="Robot Photo" />
          <GalleryImage src={win} alt="Match Win" />
          <GalleryImage src={innovation} alt="Innovation Photo" />
          <GalleryImage src={stress_ball} alt="Stress Ball Lobster" />
          <GalleryImage src={teamwork} alt="Teamwork High Five" />
          <GalleryImage src={teamSelfie} alt="Team Photo" />
          <GalleryImage src={finalist} alt="Finalist Photo" />
          <GalleryImage src={engineering_2} alt="Engineering Photo" />
          <GalleryImage src={catan} alt="Catan" />
          <GalleryImage src={entrepreneurship} alt="Entrepreneurship Photo" />
          <GalleryImage src={creativity} alt="Creativity Photo" />
          <GalleryImage src={winners} alt="Winners Photo" />
          <GalleryImage src={sportsmanship} alt="Sportsmanship Photo" />
          <GalleryImage src={defense} alt="Defense Photo" />
          <GalleryImage src={girlpower23} alt="Demo at Girl Power Event" />
          <GalleryImage src={circle23} alt="Demo at Girl Power Event" />
          <GalleryImage src={cad} alt="Intake CAD Photo" />
          <GalleryImage src={milling} alt="Learning The Mill" />
          <GalleryImage src={capybara} alt="Capybara Robot Photo" />
          <GalleryImage src={stem_week} alt="MA STEM Week Photo" />
          <GalleryImage src={chasing} alt="Demo at Girl Power Event" />
          <GalleryImage src={posing} alt="Posing With Capybara" />
          <GalleryImage src={matchPhoto} alt="Match Photo" />
          <GalleryImage src={training} alt="Fall Mechanical Training Photo" />
        </div>
      </section>
    </main>
  );
}
