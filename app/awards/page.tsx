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
import quality2023 from "../../images/awards/quality2023.jpg";
import finalists2023 from "../../images/awards/finalists2023.jpg";
import winners from "../../images/awards/winners.jpg";
import team from "../../images/index/members.jpg";
import quality2024 from "../../images/awards/quality2024.jpg";
import judges2024 from "../../images/awards/judges2024.jpg";
import { Award, AwardProps } from "../../components/award";
import styles from "./styles.module.css";

export const metadata = {
  title: "Our Awards",
};

const recentAwards: AwardProps[] = [
  {
    number: "2024",
    labels: ["Innovation in Control Award"],
    description: "Our team won the Innovation in Control Award in the Ganson Division of the New England District Championship in the 2024 season. The Innovation in Control Award celebrates an innovative control system or application of control components – electrical, mechanical or software – to provide unique machine functions.",
    image: team,
    alt: "2024 Award Photo",
  },
  {
    number: "2024",
    labels: ["Judges' Award"],
    description: "Our team won the Judges' Award at the Greater Boston District Event in the 2024 season. During the course of the competition, the judging panel may decide a team’s unique efforts, performance, or dynamics merit recognition. This award celebrates that team.",
    image: judges2024,
    alt: "2024 Award Photo",
  },
  {
    number: "2024",
    labels: ["Quality Award"],
    description: "Our team won the Quality Award at the BSU District Event in the 2024 season. This award celebrates machine robustness in concept and fabrication. The entire machine demonstrates quality: workmanship, welds, attachment systems, wiring, paint, etc, that allow it to withstand the rigors of competition – maintaining functionality, including the use of designed-in redundancy and risk mitigation measures.",
    image: quality2024,
    alt: "2024 Quality Award Photo",
  },
  {
    number: "2023",
    labels: ["Event Finalist"],
    description: "In the 2023 season, our team was proud Event Finalists at the Greater Boston District Event.",
    image: finalists2023,
    alt: "2023 Finalists Photo",
  },
  {
    number: "2023",
    labels: ["Quality Award"],
    description: "Our team won the Quality Award at the Greater Boston District Event in the 2023 season.",
    image: quality2023,
    alt: "2023 Quality Photo",
  },
];

const pastAwardData: AwardProps[] = [
  {
    number: "x2",
    labels: ["Event Winners"],
    description: "This award is presented to the alliance that wins the event.",
    image: winners,
    alt: "Winners Award Photo",
  },
  {
    number: "x2",
    labels: ["Event Finalists"],
    description: "The Finalist Award celebrates the alliance that makes it to the final match of the competition.",
    image: finalist,
    alt: "Finalist Award Photo",
  },
  {
    number: "x2",
    labels: ["Impact (Chairman's) Award"],
    description: "The FIRST Impact Award honors the team that best represents a model for other teams to emulate and best embodies the mission of FIRST. It focuses on the ultimate goal of transforming the world in ways that will inspire greater levels of respect and honor for science and technology, as well as encouraging more of today’s youth to become science and technology leaders.",
    image: impact,
    alt: "Impact Award Photo",
  },
  {
    number: "x3",
    labels: ["Creativity Award"],
    description: "The Creativity Award celebrates creativity that enhances strategy of play and was intentionally designed and not discovered. The creative element’s uniqueness has a practical application and contributes to the objectives of the competition.",
    image: creativity,
    alt: "Creativity Award Photo",
  },
  {
    number: "x2",
    labels: ["Entrepreneurship Award"],
    description: "The Entrepreneurship Award celebrates a team that integrates sustainable, professional design into the structure and management of the team.",
    image: entrepreneurship,
    alt: "Entrepreneurship Award Photo",
  },
  {
    number: "x2",
    labels: ["Engineering Inspiration Award"],
    description: "The Engineering Inspiration Award celebrates outstanding success in advancing respect and appreciation for engineering within a team’s school or organization and community. The team demonstrates a commitment to science and technology education among the team, school, and community, and achievement of the FIRST mission and ability to communicate that at the competition and away from it.",
    image: engineering,
    alt: "Engineering Inspiration Award Photo",
  },
  {
    number: "x3",
    labels: ["Quality Award"],
    description: "The Quality Award celebrates machine robustness in concept and fabrication. The entire machine demonstrates quality: workmanship, welds, attachment systems, wiring, paint, etc, that allow it to withstand the rigors of competition – maintaining functionality, including the use of designed-in redundancy and risk mitigation measures.",
    image: quality,
    alt: "Quality Award Photo",
  },
  {
    number: "x2",
    labels: ["Innovation in Control Award"],
    description: "The Innovation in Control Award celebrates an innovative control system or application of control components – electrical, mechanical or software – to provide unique machine functions. The control system is innovative and unique. It is integrated with the machine, human players, strategy, etc. in concept and execution. The innovation is practical; it addresses the game’s challenge and is reliable under the stress of competition.",
    image: innovation,
    alt: "Innovation Award Photo",
  },
  {
    number: "",
    labels: ["Excellence in Engineering Award"],
    description: "The Excellence in Engineering Award celebrates the team that demonstrates a professional approach to the design process. The designs reflect an engineering solution to a specific problem and are elegant and advantageous on the field of play.",
    image: engineering_2,
    alt: "Excellence in Engineering Award Photo",
  },
  {
    number: "",
    labels: ["Sportsmanship Award"],
    description: "The Sportsmanship Award celebrates the team that exemplifies Coopertition and Gracious Professionalism in competition.",
    image: sportsmanship,
    alt: "Sportsmanship Award Photo",
  },
  {
    number: "",
    labels: ["Outstanding Defense Award"],
    description: "The Defense Award celebrates a member of an alliance that provides invaluable and strong defense.",
    image: defense,
    alt: "Defense Award Photo",
  },
  {
    number: "",
    labels: ["Rookie All-Star Award"],
    description: "The Rookie All-Star award celebrates the rookie team exemplifying a young but strong partnership effort, as well as implementing the mission of FIRST to inspire students to learn more about science and technology.",
    image: competition,
    alt: "Rookie Award Photo",
  },
];

export default function Awards() {
  return (
    <main>
      <PageTitle>
        Awards
      </PageTitle>
      <section className="section bg-gray">
        <div className = {styles.spacerGray} />
        <h1 className={styles.sectionHeader}>Recent Awards</h1>
        {recentAwards.map((award, index) => <Award {...award} key={index} imageLeft={(index % 2) === 1} />)}
        <div className = {styles.spacerGray} />
      </section>
      <section className="section">
        <h1 className={styles.sectionHeader}>All Awards</h1>
        {pastAwardData.map((award, index) => <Award {...award} key={index} imageLeft={(index % 2) === 1} />)}
      </section>
    </main>
  );
}
