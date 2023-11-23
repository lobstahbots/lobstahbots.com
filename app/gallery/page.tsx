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
