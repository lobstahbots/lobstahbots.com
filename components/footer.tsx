import styles from "./footer.module.css";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import logo from "../images/logos/claw-logo-white.svg";


export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.mainSection}>
          <Image className={styles.logo} src={logo} alt="Claw Logo"/>
          <div className={styles.contactInfo}>
            <p>110 Cummington Mall <br></br>
                Boston, MA 02215</p>
            <p><a href="mailto:lobstahbots@gmail.com">lobstahbots@gmail.com</a></p>
          </div>
          <nav>
            <ul className={styles.footerLinks}>
              <li><Link href="/history">Past Seasons</Link></li>
              <li><Link href="/awards" > Awards </Link></li >
              <li><Link href="/team">Our Team</Link></li>
              {/* <li><Link href="/newsletter">Newsletter</Link></li> */}
              <li><Link href="/sponsors">Sponsors</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/support" > Support Us </Link></li >
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.copyrightSection}>
        <p className="container">Copyright &copy; 2023 Lobstah Bots</p>
      </div>
    </footer>
  );
}
