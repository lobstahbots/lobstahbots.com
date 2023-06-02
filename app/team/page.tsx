import PageTitle from "../../components/page-title";
import teamPhoto from "../../images/index/team-photo.jpg";
import teamPhoto2 from "../../images/index/week2-team-photo.jpg";
import teamSelfie from "../../images/index/team-selfie.jpg";
import placeholder from "../../images/profiles/placeholder-claw.png"
import eli from "../../images/profiles/eli.jpg";
import ella from "../../images/profiles/ella.jpg";
import fillippo from "../../images/profiles/fillippo.jpg";
import george from "../../images/profiles/george.jpg";
import kendree from "../../images/profiles/kendree.jpeg";
import marc from "../../images/profiles/marc.jpg";
import maxwell from "../../images/profiles/maxwell.JPG";
import nathan from "../../images/profiles/nathan.jpg";
import oliver from "../../images/profiles/oliver.jpg";
import quinten from "../../images/profiles/quinten.jpg";
import ryan from "../../images/profiles/ryan.jpg";
import sonya from "../../images/profiles/sonya.jpg";
import sudeep from "../../images/profiles/sudeep.JPG";
import terry from "../../images/profiles/terry.jpg";
import veronica from "../../images/profiles/veronica.jpg";
import owen from "../../images/profiles/owen.jpeg";
import luke from "../../images/profiles/luke.jpg";
import ajay from "../../images/profiles/ajay.jpg";
import ilan from "../../images/profiles/ilan.jpg";
import metch from "../../images/profiles/metch.jpg";
import zach from "../../images/profiles/zach.jpg";
import styles from "./styles.module.css";
import Image from "next-image-export-optimizer";
import Overlay from "../../components/overlay";

export const metadata = {
  title: "Our Team",
};

export default function Team() {
  return (
    <main>
      {/* <Overlay background={
        <Image src={teamPhoto} alt="Lobstah Bots Team Photo" className="responsive-image" />
      } content={
        <div className={styles.photoDimBackground}>
          <p className={`${styles.photoText} container`}>Our Team</p>
        </div>
      } /> */}
      <PageTitle>Our Team</PageTitle>
      <section className="section">
        <div className="container">
          <Image src={teamPhoto} className={`brand-border ${styles.headerImage}`} alt="team photo" />
        </div>
      </section>
      <section className="section container">
        <div className={styles.centeredHeader}>
          By The Numbers
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.number}>30</div>
            <div className={styles.label}>Students</div>
          </div>
          <div className={styles.stat} >
            <div className={styles.number} > 7 </div>
            <div className={styles.label}>Mentors</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number} > 25 </div>
            < div className={styles.label} > Years </div>
          </div>
          <div className={styles.stat} >
            <div className={styles.number} > 21 </div>
            < div className={styles.label} > Awards Won </div>
          </div>
          <div className={styles.stat} >
            <div className={styles.number} > 11 </div>
            < div className={styles.label} > Towns Represented </div>
          </div>
          <div className={styles.stat} >
            <div className={styles.number} > 7 </div>
            < div className={styles.label} > Languages Spoken </div>
          </div>
          <div className={styles.stat} >
            <div className={styles.number}> 50 % </div>
            < div className={styles.label} > Students of Color </div>
          </div>
        </div>
      </section>
      <section className="bg-gray">
        <div className="section container">
          <h1>Mentors</h1>
          <div className={styles.gallery}>
            {/* <div className={styles.profile}>
              <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={placeholder} alt="Team Member Profile" />
              <div className={styles.name}> Name </div>
              < div className={styles.role} > Head Mentor </div>
            </div> */}
            < div className={styles.profile} >
              <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={veronica} alt="Team Member Profile" />
              <div className={styles.name}> Veronica </div>
            </div>
            < div className={styles.profile} >
              <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={marc} alt="Team Member Profile" />
              <div className={styles.name}> Marc </div>
            </div>
            < div className={styles.profile} >
              <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={oliver} alt="Team Member Profile" />
              <div className={styles.name}> Oliver </div>
            </div>
            < div className={styles.profile} >
              <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={placeholder} alt="Team Member Profile" />
              <div className={styles.name}> Carolyn </div>
            </div>
            < div className={styles.profile} >
              <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={placeholder} alt="Team Member Profile" />
              <div className={styles.name}> Sherman </div>
            </div>
            < div className={styles.profile} >
              <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={placeholder} alt="Team Member Profile" />
              <div className={styles.name}> Ragu </div>
            </div>
            {/* < div className={styles.profile} >
              <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={placeholder} alt="Team Member Profile" />
              <div className={styles.name}> Name </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="section container">
        <h1 > Student Leadership </h1>
        < div className={styles.gallery} >
          {/* <div className={styles.profile}>
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={placeholder} alt="Team Member Profile" />
            <div className={styles.name}> Name </div>
            <div className={styles.role}>Mechanical Lead</div>
          </div>
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={placeholder} alt="Team Member Profile" />
            <div className={styles.name}> Name </div>
            <div className={styles.role}>CAD Lead</div>
          </div> */}
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={kendree} alt="Team Member Profile" />
            <div className={styles.name}> Kendree </div>
            < div className={styles.role} > Programming Lead <br/> Student Board </div>
          </div>
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={sonya} alt="Team Member Profile" />
            <div className={styles.name}> Sonya </div>
            < div className={styles.role} > Electrical Lead <br/> Student Board</div>
          </div>
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={george} alt="Team Member Profile" />
            <div className={styles.name}> George </div>
            < div className={styles.role} > Outreach & Business Lead <br/> CEO </div>
          </div>
          {/* < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={placeholder} alt="Team Member Profile" />
            <div className={styles.name}> Name </div>
            < div className={styles.role} > Imagery & Branding Lead </div>
          </div> */}
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={maxwell} alt="Team Member Profile" />
            <div className={styles.name}> Maxwell </div>
            < div className={styles.role} > Student Board</div>
          </div>
          {/* < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={placeholder} alt="Team Member Profile" />
            <div className={styles.name}> Name </div>
            < div className={styles.role} > Student Board</div>
          </div> */}
        </div>
      </section>
      <section className="section container">
        < h1 > Student Members </h1>
        < div className={styles.gallery} >
          <div className={styles.profile}>
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={ajay} alt="Team Member Profile" />
            <div className={styles.name}> Ajay </div>
          </div>
          <div className={styles.profile}>
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={eli} alt="Team Member Profile" />
            <div className={styles.name}> Eli </div>
          </div>
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={ella} alt="Team Member Profile" />
            <div className={styles.name}> Ella </div>
          </div>
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={fillippo} alt="Team Member Profile" />
            <div className={styles.name}> Fillippo </div>
          </div>
          <div className={styles.profile}>
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={ilan} alt="Team Member Profile" />
            <div className={styles.name}> Ilan </div>
          </div>
          <div className={styles.profile}>
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={luke} alt="Team Member Profile" />
            <div className={styles.name}> Luke </div>
          </div>
          <div className={styles.profile}>
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={metch} alt="Team Member Profile" />
            <div className={styles.name}> Metch </div>
          </div>
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={nathan} alt="Team Member Profile" />
            <div className={styles.name}> Nathan </div>
          </div>
          <div className={styles.profile}>
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={owen} alt="Team Member Profile" />
            <div className={styles.name}> Owen </div>
          </div>
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={quinten} alt="Team Member Profile" />
            <div className={styles.name}> Quinten </div>
          </div>
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={ryan} alt="Team Member Profile" />
            <div className={styles.name}> Ryan </div>
          </div>
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={sudeep} alt="Team Member Profile" />
            <div className={styles.name}> Sudeep </div>
          </div>
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={terry} alt="Team Member Profile" />
            <div className={styles.name}> Terry </div>
          </div>
          < div className={styles.profile} >
            <Image className={`responsive-image brand-border ${styles.profilePhoto}`} src={zach} alt="Team Member Profile" />
            <div className={styles.name}> Zach </div>
          </div>
        </div>
      </section>
    </main>
  );
}
