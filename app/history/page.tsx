import woodpecker from "../../images/gallery/woodpecker-portrait-2.jpg";
import llama from "../../images/history/llama.jpg";
import lobstah from "../../images/history/lobstah.jpeg";
import popcorn from "../../images/history/popcorn.jpg";
import burrito from "../../images/history/burrito.jpg";
import PageTitle from "../../components/page-title";
import Year, { YearProps } from "../../components/historyYear";
import { Numbers } from "./numbers";

export const metadata = {
  title: "Past Seasons",
};

export const years: YearProps[] = [
  {
    year: 2024,
    link: "https://www.youtube.com/watch?v=9keeDyFxzY4",
    title: "Crescendo",
    robotName: "Woodpecker",
    robotImage: woodpecker,
    events: [
      {
        link: "https://www.thebluealliance.com/event/2024mabri",
        name: "2024 New England District BSU Event",
      },
      {
        link: "https://www.thebluealliance.com/event/2024mabos",
        name: "2024 New England District Greater Boston Event",
      },
      {
        link: "https://www.thebluealliance.com/event/2024necmp1",
        name: "2024 New England FIRST District Championships - Ganson Division",
      },
    ],
    offseasonEvents: [],
  },
  {
    year: 2023,
    link: "https://www.youtube.com/watch?v=0zpflsYc4PA",
    title: "Charged Up",
    robotName: "Llama",
    robotImage: llama,
    events: [
      {
        link: "https://www.thebluealliance.com/event/2023week0",
        name: "2023 Week 0 in Nashua, NH",
      },
      {
        link: "https://www.thebluealliance.com/event/2023rinsc",
        name: "2023 New England District Rhode Island Event",
      },
      {
        link: "https://www.thebluealliance.com/event/2023mabos",
        name: "2023 New England District Greater Boston Event",
      },
      {
        link: "https://www.thebluealliance.com/event/2023necmp2",
        name: "2023 New England FIRST District Championships - Wilson Division",
      },
    ],
    offseasonEvents: [
      {
        link: "https://www.thebluealliance.com/event/2023nhmm",
        name: "2023 Mayhem in Merrimack, NH",
      },
      {
        link: "https://www.thebluealliance.com/event/2023matb",
        name: "2023 New England Robotics Derby (N.E.R.D.)",
      },
    ],
  },
  {
    year: 2022,
    link: "https://www.youtube.com/watch?v=LgniEjI9cCM",
    title: "Rapid React",
    robotName: "Lobstah",
    robotImage: lobstah,
    events: [
      {
        link: "https://www.thebluealliance.com/event/2022week0",
        name: "2022 Week 0 in Bedford, NH",
      },
      {
        link: "https://www.thebluealliance.com/event/2022marea",
        name: "2022 New England District North Shore Event",
      },
      {
        link: "https://www.thebluealliance.com/event/2022nhsea",
        name: "2022 New England District Pease ANG Event",
      },
    ],
    offseasonEvents: [],
  },
  {
    year: 2020,
    link: "https://www.youtube.com/watch?v=I77Dz9pfds4",
    title: "Infinite Recharge",
    robotName: "Popcorn",
    robotImage: popcorn,
    events: [
      {
        link: "https://www.thebluealliance.com/event/2020week0",
        name: "2020 Week 0 in Nashua, NH",
      },
      {
        link: "https://www.thebluealliance.com/event/2020mabri",
        name: "2020 New England District SE Mass Event",
      },
    ],
    offseasonEvents: [],
  },
  {
    year: 2019,
    link: "https://www.youtube.com/watch?v=Mew6G_og-PI",
    title: "Deep Space",
    robotName: "Burrito",
    robotImage: burrito,
    events: [
      {
        link: "https://www.thebluealliance.com/event/2019week0",
        name: "2019 Week 0 in Merrimack, NH",
      },
      {
        link: "https://www.thebluealliance.com/event/2019mabri",
        name: "2019 New England District SE Mass Event",
      },
      {
        link: "https://www.thebluealliance.com/event/2019mabos",
        name: "2019 New England District Greater Boston Event",
      },
    ],
    offseasonEvents: [
      {
        link: "https://www.thebluealliance.com/event/2019bt",
        name: "2019 Beantown Blitz in Revere, MA",
      },
    ],
  },
];

export default function History() {
  return (
    <main>
      <PageTitle>Past Seasons</PageTitle>
      <Numbers yearsCompeted={26} awardsEarned={25} eventsAttended={55} />
      {years.map((year, index) => (
        <Year {...year} key={year.year} className={index % 2 === 0 ? "bg-gray" : undefined} />
      ))}
    </main>
  );
}
