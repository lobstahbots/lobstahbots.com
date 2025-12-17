import PageTitle from "../../components/page-title";
import teamPhoto from "../../images/index/members.jpg";

import styles from "./styles.module.css";
import Image from "next/image";
import Profile from "../../components/profile";
import { unstable_cache } from "next/cache";
import dbConnect from "../../lib/dbConnect";
import Member, { IMember } from "../../models/member";

export const metadata = {
  title: "Our Team",
};

const getMentors = unstable_cache(
  async (): Promise<IMember[]> => {
    await dbConnect();
    return await Member.find({ type: "mentor" }).sort({ name: 1 }).populate("image");
  },
  [],
  { tags: ["members"] },
);

const getStudentLeadership = unstable_cache(
  async (): Promise<IMember[]> => {
    await dbConnect();
    return await Member.find({ type: "studentleader" }).sort({ name: 1 }).populate("image");
  },
  [],
  { tags: ["members"] },
);

const getStudentMembers = unstable_cache(
  async (): Promise<IMember[]> => {
    await dbConnect();
    return await Member.find({ type: "student" }).sort({ name: 1 }).populate("image");
  },
  [],
  { tags: ["members"] },
);

export default async function Team() {
  const mentors = await getMentors();
  const studentLeadership = await getStudentLeadership();
  const studentMembers = await getStudentMembers();
  return (
    <main>
      <PageTitle>Our Team</PageTitle>
      <section className="section">
        <div className="container">
          <Image
            src={teamPhoto}
            className={`brand-border ${styles.headerImage}`}
            alt="team photo"
          />
        </div>
      </section>
      <section className="bg-gray">
        <div className="section container">
          <h1>Mentors</h1>
          <div className={styles.gallery}>
            {mentors.map((member, i) => (
              <Profile key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <h1> Student Leadership </h1>
        <div className={styles.gallery}>
          {studentLeadership.map((member, i) => (
            <Profile key={i} member={member} />
          ))}
        </div>
      </section>
      <section className="section container">
        <h1> Student Members </h1>
        <div className={styles.gallery}>
          {studentMembers.map((member, i) => (
            <Profile key={i} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
