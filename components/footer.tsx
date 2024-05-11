import styles from "./footer.module.css";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import logo from "../images/logos/claw-logo-white.svg";


export default function Footer() {
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
          <nav className="cols1_1">
            <div>
              <ul className={styles.footerLinks}>
                <li className={styles.footerLink}><Link href="/blog">Posts</Link></li>
                <li className={styles.footerLink}><Link href="/history">Past Seasons</Link></li>
                <li className={styles.footerLink}><Link href="/awards">Awards</Link></li >
                <li className={styles.footerLink}><Link href="/team">Our Team</Link></li>
              </ul>
            </div>
            <div>
              <ul className={styles.footerLinks}>
                <li className={styles.footerLink}><Link href="/sponsors">Sponsors</Link></li>
                <li className={styles.footerLink}><Link href="/gallery">Gallery</Link></li>
                <li className={styles.footerLink}><Link href="/contact">Contact</Link></li>
                <li className={styles.footerLink}><Link href="/support">Support Us</Link></li >
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className={styles.copyrightSection}>
        <p className="container">Copyright &copy; 2023&ndash;{new Date().getFullYear()} Lobstah Bots</p>
      </div>
    </footer>
  );
}
