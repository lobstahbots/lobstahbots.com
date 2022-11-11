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
          <a href = "/" target="_blank" rel="noopener noreferrer" className = {styles.menuOption}>Home</a>
          <a href = "/history" target="_blank" rel="noopener noreferrer" className = {styles.menuOption}>History</a>
          <a href = "/team" target="_blank" rel="noopener noreferrer" className = {styles.menuOption}>Our Team</a>
          <a href = "/gallery" target="_blank" rel="noopener noreferrer" className = {styles.menuOption}>Gallery</a>
          <a href = "/contact" target="_blank" rel="noopener noreferrer" className = {styles.menuOption}>Contact</a>
          <a href = "/newsletter" target="_blank" rel="noopener noreferrer" className = {styles.menuOption}>Newsletter</a>
          <a href = "/sponsors" target="_blank" rel="noopener noreferrer" className = {styles.menuOption}>Sponsors</a>
        </div>
      </nav>
    </header>
  );
}
