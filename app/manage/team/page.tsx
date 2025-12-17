import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import PageTitle from "../../../components/page-title";
import { unstable_cache } from "next/cache";
import dbConnect from "../../../lib/dbConnect";
import Member, { IMember } from "../../../models/member";
import MemberList from "./components/MemberList";
import styles from "./styles.module.css";
import "../../../models/image";

export const metadata = {
  title: "Manage Team Members",
};

const getAllMembers = unstable_cache(
  async (): Promise<IMember[]> => {
    await dbConnect();
    return (await Member.find({}).sort({ type: 1, name: 1 }).populate("image")).map((member) =>
      JSON.parse(JSON.stringify(member.toObject())),
    );
  },
  [],
  { tags: ["members"] },
);

export default async function ManageTeamPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/account");
  }

  const members = await getAllMembers();

  return (
    <main>
      <PageTitle>Manage Team Members</PageTitle>
      <div className={styles.container}>
        <MemberList initialMembers={members} />
      </div>
    </main>
  );
}
