import PageTitle from "../../components/page-title";
import SponsorsSection from "../../components/sponsors-section";
import styles from "./styles.module.css";
import Link from "next/link";

export const metadata = {
  title: "Sponsors",
};

export default function Sponsors () {
  return (
    <main>
      <div className="section container">
        <PageTitle>Sponsors</PageTitle>
        <p className = {styles.sponsors}> The contributions of sponsors are critical to the success of our team. Our sponsors are true champions of education and innovation. They provide financial and material support that enables us to build and program robots, travel to competitions, and positively impact our community. By investing in Team 246, they support the development of leaders and problem solvers who will shape the world of tomorrow, one robot at a time. </p>
      </div>
       <div className="bg-brand">
        <div className="section container">
          <h1>How Can You Help?</h1>
          <p >As a FIRST Robotics team, we rely on the support of our community to fund our robot builds, travel expenses, and outreach programs. We invite you to support the Lobstah Bots by making a donation! Your donation will help us continue our mission of providing students from all of Greater Boston with the opportunity to participate in the exciting and challenging world of robotics. From material to financial, contributions of any form are a huge support to our team.</p>
          <div className={ styles.leftButtonRow } >
            <Link href="https://drive.google.com/file/d/1RZfQazIUt9vKnLXxb56axNBI7H7Gtghv/view?usp=sharing" target="_blank" className="button-white">Sponsorship Information</Link>
            <Link href="/contact" className="button-white">Contact Us</Link>
            < Link href ="/support" className="button-white">Donate</Link>
          </div>
        </div>
      </div>
      <SponsorsSection />
     
    </main>
  );
}

