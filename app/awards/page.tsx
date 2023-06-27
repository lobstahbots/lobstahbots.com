import styles from "./styles.module.css";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import { ExternalLink } from "react-feather";
import PageTitle from "../../components/page-title";
import competition from "../../images/index/competition.jpeg";
import entrepreneurship from "../../images/index/week2-team-photo.jpg";
import quality from "../../images/index/team-photo.jpg";
import creativity from "../../images/awards/creativity.jpg";
import engineering from "../../images/awards/engineering.jpeg";
import finalist from "../../images/awards/finalist_photo.jpg";
import innovation from "../../images/awards/innovation.jpg";
import sportsmanship from "../../images/awards/sportsmanship.jpg";
import impact from "../../images/awards/impact.jpg";
import engineering_2 from "../../images/awards/engineering_2.jpg";
import defense from "../../images/awards/defense.jpg";
import this_year from "../../images/awards/2023.jpg";
import winners from "../../images/awards/winners.jpg";

export const metadata = {
  title: "Our Awards",
};

export default function Awards() {
  return (
    <main>
      <PageTitle>
        Awards
      </PageTitle>
      <section className="section">
        <div className={`container cols1_1 ${styles.stat}`}>
          <div className={styles.left_award}>
            <div className={styles.number} > 2023 </div>
            <div className={styles.label} > Quality Award </div>
            <div className={styles.label} > Event Finalist </div>
          </div>
          <div>
            <Image src={this_year} alt="2023 Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>In the 2023 season, our team was the proud winner of the Regional Quality Award and Event Finalist Award.</p>
          </div>
        </div>

        <div className={`container cols1_1 ${styles.stat}`}>
          <div>
            <Image src={winners} alt="Winners Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}> This award is presented to the alliance that wins the event.</p>
          </div>
          <div className={styles.right_award}>
            <div className={styles.number} > x2 </div>
            <div className={styles.label} > Event Winners </div>
          </div>
        </div>

        <div className={`container cols1_1 ${styles.stat}`}>
          <div className={styles.left_award}>
            <div className={styles.number} > x2 </div>
            <div className={styles.label} > Event Finalists </div>
          </div>
          <div>
            <Image src={finalist} alt="Finalist Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>The Finalist Award celebrates the alliance that makes it to the final match of the competition.</p>
          </div>
        </div>

        <div className={`container cols1_1 ${styles.stat}`}>
          <div>
            <Image src={impact} alt="Impact Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>The FIRST Impact Award honors the team that best represents a model for other teams to emulate and best embodies the mission of FIRST. It focuses on the ultimate goal of transforming the world in ways that will inspire greater levels of respect and honor for science and technology, as well as encouraging more of today’s youth to become science and technology leaders. </p>
          </div>
          <div className={styles.right_award}>
            <div className={styles.number} > x2 </div>
            <div className={styles.label} > Impact (Chairman's) Award </div>
          </div>
        </div>

        <div className={`container cols1_1 ${styles.stat}`}>
          <div className={styles.left_award}>
            <div className={styles.number} > x3 </div>
            <div className={styles.label} > Creativity Award </div>
          </div>
          <div>
            <Image src={creativity} alt="Creativity Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>The Creativity Award celebrates creativity that enhances strategy of play and was intentionally designed and not discovered. The creative element’s uniqueness has a practical application and contributes to the objectives of the competition.</p>
          </div>
        </div>

        <div className={`container cols1_1 ${styles.stat}`}>
          <div>
            <Image src={entrepreneurship} alt="Entrepreneurship Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>The Entrepreneurship Award celebrates a team that integrates sustainable, professional design into the structure and management of the team.</p>
          </div>
          <div className={styles.right_award}>
            <div className={styles.number} > x2 </div>
            <div className={styles.label} > Entrepreneurship Award </div>
          </div>
        </div>

        <div className={`container cols1_1 ${styles.stat}`}>
          <div className={styles.left_award}>
            <div className={styles.number} > x2 </div>
            <div className={styles.label} > Engineering Inspiration Award </div>
          </div>
          <div>
            <Image src={engineering} alt="Engineering Inspiration Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>The Engineering Inspiration Award celebrates outstanding success in advancing respect and appreciation for engineering within a team’s school or organization and community. The team demonstrates a commitment to science and technology education among the team, school, and community, and achievement of the FIRST mission and ability to communicate that at the competition and away from it.</p>
          </div>
        </div>
        <div className={`container cols1_1 ${styles.stat}`}>
          <div>
            <Image src={quality} alt="Quality Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>The Quality Award celebrates machine robustness in concept and fabrication. The entire machine demonstrates quality: workmanship, welds, attachment systems, wiring, paint, etc, that allow it to withstand the rigors of competition – maintaining functionality, including the use of designed-in redundancy and risk mitigation measures.</p>
          </div>
          <div className={styles.right_award}>
            <div className={styles.number} > x2 </div>
            <div className={styles.label} > Quality Award </div>
          </div>
        </div>

        <div className={`container cols1_1 ${styles.stat}`}>
          <div className={styles.left_award}>
            <div className={styles.number} >  </div>
            <div className={styles.label} > Excellence in Engineering Award </div>
          </div>
          <div>
            <Image src={engineering_2} alt="Excellence in Engineering Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>The Excellence in Engineering Award celebrates the team that demonstrates a professional approach to the design process. The designs reflect an engineering solution to a specific problem and are elegant and advantageous on the field of play. </p>
          </div>
        </div>

        <div className={`container cols1_1 ${styles.stat}`}>
          <div>
            <Image src={innovation} alt="Innovation Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>The Innovation in Control Award celebrates an innovative control system or application of control components – electrical, mechanical or software – to provide unique machine functions. The control system is innovative and unique. It is integrated with the machine, human players, strategy, etc. in concept and execution. The innovation is practical; it addresses the game’s challenge and is reliable under the stress of competition. </p>
          </div>
          <div className={styles.right_award}>
            <div className={styles.number} >  </div>
            <div className={styles.label} > Innovation in Control Award </div>
          </div>
        </div>

        <div className={`container cols1_1 ${styles.stat}`}>
          <div className={styles.left_award}>
            <div className={styles.number} >  </div>
            <div className={styles.label} > Sportsmanship Award </div>
          </div>
          <div>
            <Image src={sportsmanship} alt="Sportsmanship Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>The Sportsmanship Award celebrates the team that exemplifies Coopertition and Gracious Professionalism in competition.</p>
          </div>
        </div>

        <div className={`container cols1_1 ${styles.stat}`}>
          <div>
            <Image src={defense} alt="Defense Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>The Defense Award celebrates a member of an alliance that provides invaluable and strong defense.</p>
          </div>
          <div className={styles.right_award}>
            <div className={styles.number} >  </div>
            <div className={styles.label} > Outstanding Defense Award </div>
          </div>
        </div>

        <div className={`container cols1_1 ${styles.stat}`}>
          <div className={styles.left_award}>
            <div className={styles.number} >  </div>
            <div className={styles.label} > Rookie All-Star Award </div>
          </div>
          <div className>
            <Image src={competition} alt="Rookie Award Photo" className={`responsive-image brand-border ${styles.awardPhoto}`} />
            <p className={styles.awardText}>The Rookie All-Star award celebrates the rookie team exemplifying a young but strong partnership effort, as well as implementing the mission of FIRST to inspire students to learn more about science and technology.</p>
          </div>
        </div>
      </section>
    </main>);
}