import styles from "./footer.module.css";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import logo from "../images/logos/claw-logo-white.svg";


export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className="container cols1_1">
        <div className="cols1_1">
          <div>
            <Image className={styles.logo} src={logo} alt="Claw Logo"/>
          </div>
          <div>
            <h4>Copyright &copy; 2023 Lobstah Bots</h4>
            <p>110 Cummington Mall <br></br>
                Boston, MA 02215</p>
            <p>lobstahbots@gmail.com</p>
          </div>
        </div>
        <div className={styles.footerMenu}>
          <ul className={styles.footerLinks}>
            <li><Link href="/history">Past Seasons</Link></li>
            <li><Link href="/awards" > Awards </Link></li >
            <li><Link href="/team">Our Team</Link></li>
            {/* <li><Link href="/newsletter">Newsletter</Link></li> */}
            <li><Link href="/sponsors">Sponsors</Link></li>
            {/* <li><Link href="/gallery">Gallery</Link></li> */}
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/support" > Support Us </Link></li >
          </ul>
        </div>
      </div>
    </footer>
  );
}
