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
import whiteboard from "../../images/gallery/whiteboard.jpg";
import crochet from "../../images/gallery/crochet.jpg";

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
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { crochet } alt = "Crochet Lobster Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { cad } alt = "Intake CAD Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { capybara } alt = "Capybara Robot Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { chasing } alt = "Demo at Girl Power Event" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { girl_power } alt = "Girl Power Event" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { whiteboard } alt = "Writing Archetypes Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { intake_prototyping } alt = "Cutting Wood" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { milling } alt = "Training on the Mill" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { note } alt = "Does Note Fit Under Robot?" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { posing } alt = "Posing With Capybara" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { archetypes } alt = "Archetypes at Kickoff Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { stem_week } alt = "MA STEM Week Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { training } alt = "Fall Mechanical Training Photo" />
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
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { impact } alt = "Impact Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { llama } alt = "Robot Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { win } alt = "Match Win" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { innovation } alt = "Innovation Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { stress_ball } alt = "Stress Ball Lobster" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { teamwork } alt = "Teamwork High Five" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { matchPhoto } alt = "Match Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { teamSelfie } alt = "Team Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { finalist } alt = "Finalist Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { engineering_2 } alt = "Engineering Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { catan } alt = "Catan" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { entrepreneurship } alt = "Entrepreneurship Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { creativity } alt = "Creativity Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { winners } alt = "Winners Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { sportsmanship } alt = "Sportsmanship Photo" />
          <Image className={ `responsive-image brand-border ${styles.galleryImage}` } src = { defense } alt = "Defense Photo" />
        </div>
      </section>
    </main>
  );
}
