

import llama from "../../images/history/llama.JPG";
import lobstah from "../../images/history/lobstah.jpeg";
import burrito from "../../images/history/burrito.jpg";
import styles from "./styles.module.css";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import { ExternalLink } from "react-feather";
import PageTitle from "../../components/page-title";

export const metadata = {
  title: "Our History",
};

export default function History () {
  return (
    <main>
      <PageTitle>
        Our History
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
          <div className={ styles.number } > 55 </div>
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
                <Link href="https://www.thebluealliance.com/event/2023week0" className="link">2022 Week 0 in Nashua, NH</Link>
              </div>
              <div className={styles.event}>
                <h3>Event 2: </h3>
                <Link href="https://www.thebluealliance.com/event/2023rinsc" className="link">2022 New England District Rhode Island Event</Link>
              </div>
              <div className={styles.event}>
                <h3>Event 3: </h3>
                <Link href="https://www.thebluealliance.com/event/2023mabos" className="link">2022 New England District Greater Boston Event</Link>
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
            <h2>2021</h2>
            <Link href="https://www.youtube.com/watch?v=I77Dz9pfds4" className={styles.number}>Infinite Recharge <ExternalLink className={styles.externalLink}/></Link>
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
            <Image className={`responsive-image brand-border ${styles.robotPhoto}`} src={burrito} alt="2021 Robot" />
            <h3 className={styles.robotName}> Robot: <i>Burrito</i></h3>
            {/* <p className={styles.blurb}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis vestibulum magna, sit amet ornare justo.</p> */}
          </div>
        </div>
      </section>
    </main>
  );
}