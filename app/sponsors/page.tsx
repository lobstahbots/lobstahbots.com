import BULogo from "../../images/sponsor-logos/BULogo.png";
import BayerLogo from "../../images/sponsor-logos/BayerLogo.png";
import BoeingLogo from "../../images/sponsor-logos/BoeingLogo.png";
import HaasLogo from "../../images/sponsor-logos/HaasLogo.png";
import BUALogo from "../../images/sponsor-logos/BUALogo.png";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

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
          <Image src={BayerLogo} alt="Bayer Logo" className={ styles.sponsorLogo }/>
          <Image src={BoeingLogo} alt="Boeing Logo" className={ styles.sponsorLogo }/>
          <Image src={BULogo} alt="BU Logo" className={ styles.sponsorLogo }/>
          <Image src={HaasLogo} alt="Haas Logo" className={ styles.sponsorLogo }/>
          <Image src={BUALogo} alt="BUA Logo" className={ styles.sponsorLogo }/>
        </div>
      </div>
      <div className="bg-brand">
        <div className="section container">
          <h1>How Can You Help?</h1>
          <p>As a FIRST Robotics team, we rely on the support of our community to fund our robot builds, travel expenses, and outreach programs. We invite you to support the Lobstah Bots by making a donation! Your donation will help us continue our mission of providing students from all of Greater Boston with the opportunity to participate in the exciting and challenging world of robotics. From material to financial, contributions of any form are a huge support to our team.</p>
          <div className={ styles.leftButtonRow } >
            <Link href="/sponsors" className="button-white">Sponsor Package</Link>
            <Link href="/contact" className="button-white">Contact Us</Link>
            <Link href="/donate" className="button-white">Donate</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

