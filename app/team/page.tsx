import PageTitle from "../../components/page-title";
import teamPhoto from "../../images/index/team-photo.jpg";
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
import quinten from "../../images/profiles/quinten.jpg";
import ryan from "../../images/profiles/ryan.jpg";
import sonya from "../../images/profiles/sonya.jpg";
import sudeep from "../../images/profiles/sudeep.jpg";
import terry from "../../images/profiles/terry.jpg";
import veronica from "../../images/profiles/veronica.jpg";
import owen from "../../images/profiles/owen.jpeg";
import luke from "../../images/profiles/luke.jpg";
import ajay from "../../images/profiles/ajay.jpg";
import ilan from "../../images/profiles/ilan.jpg";
import metch from "../../images/profiles/metch.jpg";
import zach from "../../images/profiles/zach.jpg";
import carolyn from "../../images/profiles/carolyn.jpg";
import sherman from "../../images/profiles/sherman.jpg";
import styles from "./styles.module.css";
import Image from "next-image-export-optimizer";
import Profile, { ProfileProps } from "../../components/profile";

export const metadata = {
  title: "Our Team",
};

const mentors: ProfileProps[] = [
  { name: "Veronica", role: "Drive Coach", image: veronica },
  { name: "Marc", image: marc },
  { name: "Oliver", image: oliver },
  { name: "Carolyn", image: carolyn },
  { name: "Sherman", image: sherman },
];

const studentLeadership: ProfileProps[] = [
  {
    name: "George",
    role: [
      "CEO; Outreach & Business Lead",
      "Student Board",
      "Drive Team: Driver",
    ],
    image: george,
  },
  { name: "Kendree",
    role: ["Programming Lead",
      "Student Board",
      "Drive Team: Technician",
    ],
    image: kendree,
  },
  {
    name: "Maxwell",
    role: ["Student Board",
      "Drive Team: Operator",
    ],
    image: maxwell,
  },
  { name: "Luke", role: "Student Board", image: luke },
  { name: "Sonya", role: "Electrical Lead", image: sonya },
  { name: "Fillippo", role: "Imagery & Branding Lead", image: fillippo },
];

const studentMembers: ProfileProps[] = [
  { name: "Ajay", image: ajay },
  { name: "Eli", image: eli },
  { name: "Ella", image: ella },
  { name: "Ilan", image: ilan },
  { name: "Metch", image: metch },
  { name: "Nathan", image: nathan },
  { name: "Owen", role: "Drive Team: Human Player", image: owen },
  { name: "Quinten", image: quinten },
  { name: "Ryan", image: ryan },
  { name: "Sudeep", image: sudeep },
  { name: "Terry", image: terry },
  { name: "Zach", image: zach },
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
        <h1 > Student Leadership </h1>
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
