

import teamPhoto from "../images/index/team-photo.jpg";
import styles from "./history.module.css";
import Image from "next/image";
export default function History () {
  return (
    <main>
      <h1 className={styles.centeredHeader}>
            Our History
      </h1>
      <section className= {styles.stats}>
        <div className = { styles.stat }>
          <div className = { styles.number } > 25 </div>
          <div className = { styles.label } > Years </div>
        </div>
        <div className = { styles.stat }>
          <div className = { styles.number } > 100 </div>
          < div className = { styles.label } > Total Awards Earned </div>
        </div>
        <div className = { styles.stat }>
          <div className = { styles.number } > 55 </div>
          < div className = { styles.label } > Events Attended  </div>
        </div>
      </section>
      <section className= "section container cols2_1">
        <div>
          <div className={styles.name}> 2022 </div>
          <div className={styles.name}> Rapid React </div>
          <div className={styles.name}> Event </div>
          <p className = { styles.blurb }> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
        </div>
        <div className={styles.profile}>
          <Image className={styles.profilePhoto} src = {teamPhoto} alt = "Team Member Profile"/>
          <div> Robot: Lobstah </div>
          <p className = { styles.blurb }> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p>
        </div>
      </section>
    </main>
  );
}
