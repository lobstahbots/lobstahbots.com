

import llama from "../../images/history/llama.jpg";
import lobstah from "../../images/history/lobstah.jpeg";
import popcorn from "../../images/history/popcorn.jpg";
import burrito from "../../images/history/burrito.jpg";
import styles from "./styles.module.css";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import { ExternalLink } from "react-feather";
import PageTitle from "../../components/page-title";

export const metadata = {
  title: "Past Seasons",
};

export default function History () {
  return (
    <main>
      <PageTitle>
        Past Seasons
      </PageTitle>
      <section className={`section ${styles.stats}`}>
        <div className={ styles.stat }>
          <div className={ styles.number } > 25 </div>
          <div className={ styles.label } > Years </div>
        </div>
        <div className={ styles.stat }>
          <div className={ styles.number } > 20 </div>
          < div className={ styles.label } > Total Awards Earned </div>
        </div>
        <div className={ styles.stat }>
          <div className={ styles.number } > 63 </div>
          < div className={ styles.label } > Events Attended  </div>
        </div>
      </section>
      <section className="bg-gray">
        <div className="container section cols2_1">
          <div>
            <h2>2023</h2>
            <Link href="https://www.youtube.com/watch?v=0zpflsYc4PA" className={styles.number}>Charged Up <ExternalLink className={styles.externalLink} /></Link>
            <div className={styles.events}>
              <div className={styles.event}>
                <h3>Event 1: </h3>
                <Link href="https://www.thebluealliance.com/event/2023week0" className="link">2023 Week 0 in Nashua, NH</Link>
              </div>
              <div className={styles.event}>
                <h3>Event 2: </h3>
                <Link href="https://www.thebluealliance.com/event/2023rinsc" className="link">2023 New England District Rhode Island Event</Link>
              </div>
              <div className={styles.event}>
                <h3>Event 3: </h3>
                <Link href="https://www.thebluealliance.com/event/2023mabos" className="link">2023 New England District Greater Boston Event</Link>
              </div>
              <div className={styles.event}>
                <h3>Event 4: </h3>
                <Link href="https://www.thebluealliance.com/event/2023necmp2" className="link">2023 New England FIRST District Championships - Wilson Division</Link>
              </div>
            </div>
          </div>
          <div>
            <Image className={`responsive-image brand-border ${styles.robotPhoto}`} src={llama} alt="2023 Robot (Llama)" />
            <h3 className={styles.robotName}> Robot: <i>Llama</i></h3>
            {/* <p className={styles.blurb}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p> */}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cols2_1">
          <div>
            <h2>2022</h2>
            <Link href="https://www.youtube.com/watch?v=LgniEjI9cCM" className={styles.number}>Rapid React <ExternalLink className={styles.externalLink} /></Link>
            <div className={styles.events}>
              <div className={styles.event}>
                <h3>Event 1: </h3>
                <Link href="https://www.thebluealliance.com/event/2022week0" className="link">2022 Week 0 in Bedford, NH</Link>
              </div>
              <div className={styles.event}>
                <h3>Event 2: </h3>
                <Link href="https://www.thebluealliance.com/event/2022marea" className="link">2022 New England District North Shore Event</Link>
              </div>
              <div className={styles.event}>
                <h3>Event 3: </h3>
                <Link href="https://www.thebluealliance.com/event/2022nhsea" className="link">2022 New England District Pease ANG Event</Link>
              </div>
            </div>
          </div>
          <div>
            <Image className={`responsive-image brand-border ${styles.robotPhoto}`} src={lobstah} alt="2022 Robot (Lobstah)" />
            <h3 className={styles.robotName}> Robot: <i>Lobstah</i></h3>
            {/* <p className={styles.blurb}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p> */}
          </div>
        </div>
      </section>
      <section className="bg-gray">
        <div className="container section cols2_1">
          <div>
            <h2>2020</h2>
            <Link href="https://www.youtube.com/watch?v=I77Dz9pfds4" className={styles.number}>Infinite Recharge <ExternalLink className={styles.externalLink}/></Link>
            <div className={styles.events}>
              <div className={styles.event}>
                <h3>Event 1: </h3>
                <Link href="https://www.thebluealliance.com/event/2020week0" className="link">2020 Week 0 in Nashua, NH</Link>
              </div>
              <div className={styles.event}>
                <h3>Event 2: </h3>
                <Link href="https://www.thebluealliance.com/event/2020mabri" className="link">2020 New England District SE Mass Event</Link>
              </div>
            </div>
          </div>
          <div>
            <Image className={`responsive-image brand-border ${styles.robotPhoto}`} src={popcorn} alt="2020 Robot (Popcorn)" />
            <h3 className={styles.robotName}> Robot: <i>Popcorn</i></h3>
            {/* <p className={styles.blurb}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p> */}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cols2_1">
          <div>
            <h2>2019</h2>
            <Link href ="https://www.youtube.com/watch?v=Mew6G_og-PI" className={styles.number}>Deep Space <ExternalLink className={styles.externalLink} /></Link>
            <div className={styles.events}>
              <div className={styles.event}>
                <h3>Event 1: </h3>
                <Link href="https://www.thebluealliance.com/event/2019week0" className="link">2019 Week 0 in Merrimack, NH</Link>
              </div>
              <div className={styles.event}>
                <h3>Event 2: </h3>
                <Link href="https://www.thebluealliance.com/event/2019mabri" className="link">2019 New England District SE Mass Event</Link>
              </div>
              <div className={styles.event}>
                <h3>Event 3: </h3>
                <Link href="https://www.thebluealliance.com/event/2019mabos" className="link">2019 New England District Greater Boston Event</Link>
              </div>
              <div className={styles.event}>
                <h3>Event 4: </h3>
                <Link href="https://www.thebluealliance.com/event/2019bt" className="link">2019 Beantown Blitz in Revere, MA</Link>
              </div>
            </div>
          </div>
          <div>
            <Image className={`responsive-image brand-border ${styles.robotPhoto}`} src={burrito} alt="2019 Robot (Burrito)" />
            <h3 className={styles.robotName}> Robot: <i>Burrito</i></h3>
            {/* <p className={styles.blurb}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p> */}
          </div>
        </div>
        <div className="container">
          <Link href="https://www.thebluealliance.com/team/246/history" className="button">View Full History</Link>
        </div>
      </section>
      
    </main>
  );
}
