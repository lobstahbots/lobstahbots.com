import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar () {
  return (
    <header className={styles.navbar}>
      <nav>
        <div className = {styles.logo}>
          <a className = {styles.title}>Lobstah Bots</a>
        </div>
        <div className = {styles.menu}>
          <Link href = "/" className = {styles.menuOption}>Home</Link>
          <Link href = "/history" className = {styles.menuOption}>History</Link>
          <Link href = "/team" className = {styles.menuOption}>Our Team</Link>
          <Link href = "/gallery" className = {styles.menuOption}>Gallery</Link>
          <Link href = "/contact" className = {styles.menuOption}>Contact</Link>
          <Link href = "/newsletter" className = {styles.menuOption}>Newsletter</Link>
          <Link href = "/sponsors" className = {styles.menuOption}>Sponsors</Link>
          <Link href = "/donate">
            <button className={styles.button}>Donate!</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
