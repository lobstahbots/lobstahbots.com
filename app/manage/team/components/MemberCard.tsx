"use client";

import { useState, useTransition, useRef, useEffect } from "react";
import { Save, X, Trash2, Upload, User } from "react-feather";
import { updateMember, deleteMember, createMember } from "../actions";
import { IMember } from "../../../../models/member";
import styles from "../styles.module.css";

const memberTypes = [
  { value: "mentor", label: "Mentor" },
  { value: "studentleader", label: "Student Leader" },
  { value: "student", label: "Student" },
];

interface MemberCardProps {
  member: IMember | null;
  idx: number;
}

export default function MemberCard({
  member,
  idx,
}: MemberCardProps) {
  const [isPending, startTransition] = useTransition();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  // Form state
  const [name, setName] = useState(member?.name || "");
  const [type, setType] = useState<"mentor" | "studentleader" | "student">(
    member?.type || "student",
  );
  const [roles, setRoles] = useState<string[]>(member?.roles || []);
  const [currentRole, setCurrentRole] = useState("");
  const [imageChanged, setImageChanged] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(member?.image || null);

  // Track changes for save button
  const [hasChanges, setHasChanges] = useState(!member);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (member) {
      const nameChanged = name !== member.name;
      const typeChanged = type !== member.type;
      const rolesChanged = JSON.stringify(roles.sort()) !== JSON.stringify(member.roles.sort());
      setHasChanges(nameChanged || typeChanged || rolesChanged || imageChanged);
    }
  }, [name, type, roles, imageChanged, member]);

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  const handleTypeChange = (newType: string) => {
    setType(newType as "mentor" | "studentleader" | "student");
  };

  const handleAddRole = () => {
    if (currentRole.trim() && !roles.includes(currentRole.trim())) {
      setRoles([...roles, currentRole.trim()]);
      setCurrentRole("");
    }
  };

  const handleRemoveRole = (roleToRemove: string) => {
    setRoles(roles.filter((role) => role !== roleToRemove));
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setImageChanged(true);

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFileSelect(file);
    }
  };

  const handleSave = async () => {
    if (!member) {
      // Create new member
      const formData = new FormData();
      formData.append("name", name);
      formData.append("type", type);
      roles.forEach((role) => formData.append("roles", role));

      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      startTransition(async () => {
        await createMember(formData);
      });
    } else {
      // Update existing member
      const formData = new FormData();
      formData.append("_id", member?._id?.toString() || "");
      formData.append("name", name);
      formData.append("type", type);
      roles.forEach((role) => formData.append("roles", role));

      // Only append image if it has changed
      if (imageChanged && selectedFile) {
        formData.append("image", selectedFile);
      }

      startTransition(async () => {
        const result = await updateMember(formData);
        if (result) {
          setHasChanges(false);
          setImageChanged(false);
        }
      });
    }
  };

  const handleDelete = async () => {
    if (!member || !confirm(`Are you sure you want to delete ${member.name}?`)) {
      return;
    }

    setIsDeleting(true);
    const formData = new FormData();
    formData.append("_id", member._id?.toString() || "");

    startTransition(async () => {
      await deleteMember(formData);
      setIsDeleting(false);
    });
  };

  return (
    <div className={styles.memberCard}>
      <div className={styles.memberHeader}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            className={styles.memberNameInput}
            disabled={isPending}
            placeholder="Enter member name"
          />
          <select
            value={type}
            onChange={(e) => handleTypeChange(e.target.value)}
            className={styles.memberTypeSelect}
            disabled={isPending}
          >
            {memberTypes.map((memberType) => (
              <option key={memberType.value} value={memberType.value}>
                {memberType.label}
              </option>
            ))}
          </select>
        </div>

        <div
          className={`${styles.memberImageContainer} ${styles.imageUploadZone} ${
            isDragOver ? styles.dragOver : ""
          }`}
          onClick={handleImageClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {previewUrl ? (
            <img src={previewUrl} alt={name || "Member"} className={styles.memberImage} />
          ) : (
            <div className={styles.memberImage}>
              <User size={32} />
            </div>
          )}
          <div className={styles.imageOverlay}>
            <Upload size={20} />
            <span>Click or drag to upload</span>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={styles.hiddenFileInput}
            disabled={isPending}
          />
        </div>
      </div>

      <div className={styles.editRolesSection}>
        <label className={styles.label}>Roles</label>
        <div className={styles.roleInputContainer}>
          <input
            type="text"
            value={currentRole}
            onChange={(e) => setCurrentRole(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddRole();
              }
            }}
            placeholder="Enter a role and press Enter"
            className={styles.roleInput}
            disabled={isPending}
          />
          <button
            type="button"
            onClick={handleAddRole}
            className={styles.addRoleButton}
            disabled={isPending || !currentRole.trim()}
          >
            Add
          </button>
        </div>

        {roles.length > 0 && (
          <div className={styles.rolesDisplay}>
            {roles.map((role, index) => (
              <span key={index} className={styles.roleTag}>
                <span>{role}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveRole(role)}
                  className={styles.removeRoleButton}
                  disabled={isPending}
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.cardActions}>
        <button
          onClick={handleSave}
          className={`${styles.saveButton} ${!hasChanges ? styles.disabled : ""}`}
          disabled={!hasChanges || isPending || !name.trim()}
        >
          <Save className={styles.buttonIcon} />
          {isPending ? "Saving..." : !member ? "Create" : "Save"}
        </button>
        <button onClick={handleDelete} className={styles.editButton}>
          <Trash2 className={styles.buttonIcon} />
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
