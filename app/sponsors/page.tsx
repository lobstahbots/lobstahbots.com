import BULogo from "../../images/sponsor-logos/BULogo.png";
import BayerLogo from "../../images/sponsor-logos/BayerLogo.png";
import BoeingLogo from "../../images/sponsor-logos/BoeingLogo.png";
import HaasLogo from "../../images/sponsor-logos/HaasLogo.png";
import BUALogo from "../../images/sponsor-logos/BUALogo.png";
import QualityGraphicsLogo from "../../images/sponsor-logos/QualityGraphicsLogo.svg";
import StandardBotsLogo from "../../images/sponsor-logos/StandardBotsLogo.svg";
import styles from "./styles.module.css";
import Image from "next-image-export-optimizer";
import Link from "next/link";

export const metadata = {
  title: "Sponsors",
};

export default function Sponsors () {
  return (
    <main>
      <div className="section container">
        <h1>Sponsors</h1>
        <p> The contributions of sponsors are critical to the success of our team. Our sponsors are true champions of education and innovation. They provide financial and material support that enables us to build and program robots, travel to competitions, and positively impact our community. By investing in Team 246, they support the development of leaders and problem solvers who will shape the world of tomorrow, one robot at a time. </p>
      </div>
      <div className="section container">
        <h1>Thank You To Our 2023 Sponsors! </h1>
        <div className={styles.gallery}>
          <Link href="https://www.bayer.com/en/" target="_blank"><Image src={BayerLogo} alt="Bayer Logo" className={ styles.sponsorLogo }/></Link>
          <Link href="https://www.boeing.com/" target="_blank"><Image src={BoeingLogo} alt="Boeing Logo" className={styles.sponsorLogo} /></Link>
          <Link href="https://www.bu.edu/" target="_blank"><Image src={BULogo} alt="BU Logo" className={styles.sponsorLogo} /></Link>
          <Link href ="https://ghaasfoundation.org/content/ghf/en/home.html" target="_blank"><Image src={HaasLogo} alt="Haas Logo" className={styles.sponsorLogo} /></Link>
          <Link href="https://www.buacademy.org/" target="_blank"><Image src={BUALogo} alt="BUA Logo" className={styles.sponsorLogo} /></Link>
          <Link href="https://qualitygraphicsinc.com/" target="_blank"><Image src={QualityGraphicsLogo} alt="Quality Graphics Logo" className={styles.sponsorLogo} /></Link>
          <div className={ `${styles.standardBots} ${styles.sponsorLogo}` }>
            <Link href="https://standardbots.com/"><Image src={StandardBotsLogo} alt="Standard Bots Logo" className={ styles.sponsorLogo } /></Link>
            <Link className="link" href="https://standardbots.com/blog/how-to-launch-your-career-in-robotics-straight-out-of-high-school">Check out their article on robotics after high school!</Link>
          </div>
        </div>
      </div>
      <div className="bg-brand">
        <div className="section container">
          <h1>How Can You Help?</h1>
          <p>As a FIRST Robotics team, we rely on the support of our community to fund our robot builds, travel expenses, and outreach programs. We invite you to support the Lobstah Bots by making a donation! Your donation will help us continue our mission of providing students from all of Greater Boston with the opportunity to participate in the exciting and challenging world of robotics. From material to financial, contributions of any form are a huge support to our team.</p>
          <div className={ styles.leftButtonRow } >
            <Link href="https://drive.google.com/file/d/1RZfQazIUt9vKnLXxb56axNBI7H7Gtghv/view?usp=sharing" target="_blank" className="button-white">Sponsorship Information</Link>
            <Link href="/contact" className="button-white">Contact Us</Link>
            < Link href ="/support" className="button-white">Donate</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

