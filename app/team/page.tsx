import PageTitle from "../../components/page-title";
import teamPhoto from "../../images/index/members.jpg";
import placeholder from "../../images/profiles/placeholder-claw.png";
import ella from "../../images/profiles/ella.jpg";
import kendree from "../../images/profiles/kendree.jpeg";
import marc from "../../images/profiles/marc.jpg";
import maxwell from "../../images/profiles/maxwell.jpg";
import nathan from "../../images/profiles/nathan.jpg";
import oliver from "../../images/profiles/oliver.jpg";
import veronica from "../../images/profiles/veronica.jpg";
import owen from "../../images/profiles/owen.jpg";
import luke from "../../images/profiles/luke.jpg";
import ajay from "../../images/profiles/ajay.jpg";
import ilan from "../../images/profiles/ilan.jpg";
import zach from "../../images/profiles/zach.jpg";
import carolyn from "../../images/profiles/carolyn.jpg";
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
import tynan from "../../images/profiles/tynan.jpg";
import ryo from "../../images/profiles/ryo.png";

import styles from "./styles.module.css";
import Image from "next/image";
import Profile, { ProfileProps } from "../../components/profile";

export const metadata = {
  title: "Our Team",
};

const mentors: ProfileProps[] = [
  { name: "Veronica", image: veronica },
  { name: "Marc", image: marc },
  { name: "Oliver", image: oliver },
  { name: "Carolyn", image: carolyn },
  { name: "Tynan", image: tynan },
  { name: "Ryo", image: ryo },
];

const studentLeadership: ProfileProps[] = [
  { name: "Kendree", role:"Team Captain", image: kendree,},
  { name: "Coco M.", role:"Outreach and Business Lead", image: cocoM,},
  { name: "Maxwell", role: "CAD Co-Lead", image: maxwell,},
  { name: "Nathan", role: "CAD Co-Lead", image: nathan,},
];

const studentMembers: ProfileProps[] = [
  { name: "Adam", image: adam },
  { name: "Ajay", image: ajay },
  { name: "Amber", image: amber },
  { name: "Coco S.", role:"Electrical Lead", image: cocoS },
  { name: "Daniel", role:"Programming Co-Lead", image: daniel },
  { name: "Dora", image: dora },
  { name: "Eddie", role:"Scouting and Strategy Lead", image: eddie },
  { name: "Ella", image: ella },
  { name: "Ilan", image: ilan },
  { name: "Kayla", image: kayla },
  { name: "Luke", image: luke },
  { name: "Makeda", image: makeda },
  { name: "Owen", image: owen },
  { name: "Sharon", role:"Mechanical Lead", image: sharon },
  { name: "Teddy", role:"Programming Co-Lead", image: teddy },
  { name: "Zach", image: zach },
  { name: "Ziyan", role:"Imagery and Branding Lead", image: ziyan },
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
