"use client";

import { useState, useEffect } from "react";
import { Edit3, Plus } from "react-feather";
import { IMember } from "../../../../models/member";
import MemberCard from "./MemberCard";
import styles from "../styles.module.css";

interface MemberListProps {
  initialMembers: IMember[];
}

export default function MemberList({ initialMembers }: MemberListProps) {
  const [members, setMembers] = useState<(IMember | null)[]>(initialMembers);
  const [showNewMemberCard, setShowNewMemberCard] = useState(false);

  // Update local state when initialMembers change
  useEffect(() => {
    setMembers(initialMembers);
  }, [initialMembers]);

  const handleAddNewMember = () => {
    setMembers((prevMembers) => [...prevMembers, null]);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <Edit3 className={styles.icon} />
          Team Members ({members.length})
        </h2>
      </div>

      <div className={styles.membersGrid}>
        {members.map((member, idx) => (
          <MemberCard
            key={(member?._id ?? idx).toString()}
            idx={idx}
            member={member}
          />
        ))}

        {members.length === 0 && (
          <div className={styles.emptyState}>
            <p>No team members found. Add your first member below!</p>
          </div>
        )}
      </div>

      <div className={styles.addButtonContainer}>
        <button onClick={handleAddNewMember} className={styles.addMemberButton}>
          <Plus className={styles.buttonIcon} />
          Add New Member
        </button>
      </div>
    </div>
  );
}
