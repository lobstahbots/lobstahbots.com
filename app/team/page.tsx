import PageTitle from "../../components/page-title";
import teamPhoto from "../../images/index/members.jpg";
import placeholder from "../../images/profiles/placeholder-claw.png";
import eli from "../../images/profiles/eli.jpg";
import ella from "../../images/profiles/ella.jpg";
import fillippo from "../../images/profiles/fillippo.jpg";
import george from "../../images/profiles/george.jpg";
import kendree from "../../images/profiles/kendree.jpeg";
import marc from "../../images/profiles/marc.jpg";
import maxwell from "../../images/profiles/maxwell.jpg";
import nathan from "../../images/profiles/nathan.jpg";
import oliver from "../../images/profiles/oliver.jpg";
import ryan from "../../images/profiles/ryan.jpg";
import sonya from "../../images/profiles/sonya.jpg";
import sudeep from "../../images/profiles/sudeep.jpg";
import terry from "../../images/profiles/terry.jpg";
import veronica from "../../images/profiles/veronica.jpg";
import owen from "../../images/profiles/owen.jpg";
import luke from "../../images/profiles/luke.jpg";
import ajay from "../../images/profiles/ajay.jpg";
import ilan from "../../images/profiles/ilan.jpg";
import metch from "../../images/profiles/metch.jpg";
import zach from "../../images/profiles/zach.jpg";
import carolyn from "../../images/profiles/carolyn.jpg";
import sherman from "../../images/profiles/sherman.jpg";
import ziyan from "../../images/profiles/ziyan.jpg";
import sharon from "../../images/profiles/sharon.jpg";
import teddy from "../../images/profiles/teddy.jpg";
import eddie from "../../images/profiles/eddie.jpg";
import dora from "../../images/profiles/dora.jpg";
import daniel from "../../images/profiles/daniel.jpg";
import audrey from "../../images/profiles/audrey.png";
import cocoM from "../../images/profiles/cocoM.jpg";
import amber from "../../images/profiles/andrew.jpg";
import adam from "../../images/profiles/adam.jpg";
import makeda from "../../images/profiles/makeda.jpg";
import kayla from "../../images/profiles/kayla.jpg";
import cocoS from "../../images/profiles/cocoS.jpg";
import styles from "./styles.module.css";
import Image from "next-image-export-optimizer";
import Profile, { ProfileProps } from "../../components/profile";

export const metadata = {
  title: "Our Team",
};

const mentors: ProfileProps[] = [
  { name: "Veronica", image: veronica },
  { name: "Marc", image: marc },
  { name: "Oliver", image: oliver },
  { name: "Carolyn", image: carolyn },
  { name: "Sherman", image: sherman },
];

const studentLeadership: ProfileProps[] = [
  {
    name: "George",
    role: [],
    image: george,
  },
  { name: "Kendree",
    role: [],
    image: kendree,
  },
  {
    name: "Maxwell",
    role: [],
    image: maxwell,
  },
  { name: "Luke", role: [], image: luke },
];

const studentMembers: ProfileProps[] = [
  { name: "Adam", image: adam },
  { name: "Ajay", image: ajay },
  { name: "Amber", image: amber },
  { name: "Audrey", image: audrey },
  { name: "Coco M.", image: cocoM },
  { name: "Coco S.", image: cocoS },
  { name: "Daniel", image: daniel },
  { name: "Dora", image: dora },
  { name: "Eddie", image: eddie },
  { name: "Eli", image: eli },
  { name: "Ella", image: ella },
  { name: "Fillippo", image: fillippo },
  { name: "Ilan", image: ilan },
  { name: "Kayla", image: kayla },
  { name: "Makeda", image: makeda },
  { name: "Nathan", image: nathan },
  { name: "Owen", image: owen },
  { name: "Ryan", image: ryan },
  { name: "Sharon", image: sharon },
  { name: "Sonya", image: sonya },
  { name: "Teddy", image: teddy },
  { name: "Terry", image: terry },
  { name: "Zach", image: zach },
  { name: "Ziyan", image: ziyan },
];

export default function Team () {
  return (
    <main>
      <PageTitle>Our Team</PageTitle>
      <section className="section">
        <div className="container">
          <Image src={teamPhoto} className={`brand-border ${styles.headerImage}`} alt="team photo" />
        </div>
      </section>
      <section className="bg-gray">
        <div className="section container">
          <h1>Mentors</h1>
          <div className={styles.gallery}>
            {mentors.map((props, i) => <Profile key={i} {...props} />)}
          </div>
        </div>
      </section>
      <section className="section container">
        <h1 > Student Board </h1>
        < div className={styles.gallery} >
          {studentLeadership.map((props, i) => <Profile key={i} {...props} />)}
        </div>
      </section>
      <section className="section container">
        < h1 > Student Members </h1>
        < div className={styles.gallery} >
          {studentMembers.map((props, i) => <Profile key={i} {...props} />)}
        </div>
      </section>
    </main>
  );
}
