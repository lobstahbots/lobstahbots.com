"use client";

import Link from "next/link";
import React from "react";
import Image from "next-image-export-optimizer";
import { Menu, X } from "react-feather";
import logo from "../images/logos/wordmark-dark-bg.svg";
import styles from "./navbar.module.css";

const Navbar = () => {
  let links = [
    { label: "Posts", to: "/blog" },
    {
      label: "Past Seasons",
      to: "/history",
    },
    { label: "Awards", to: "/awards" },
    { label: "Our Team", to: "/team" },
    { label: "Sponsors", to: "/sponsors" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" },
  ];

  const [isOpen, setOpen] = React.useState(false);

  // Close mobile navigation when window resizes to non-mobile
  React.useEffect(() => {
    const listener = () => {
      const media = window.matchMedia("(min-width: 768px)");
      if (media.matches) setOpen(false);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  return (
    <header className={styles.wrapper}>
      <nav className={`container ${styles.content}`}>
        <div className={styles.navbar}>
          <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
            <Image
              src={logo}
              alt= "Claw Logo"
            />
            <span className="visually-hidden">Home</span>
          </Link>
          <ul className={styles.navbarLinks}>
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link
                  href={to}
                  className={styles.link}
                >
                  {label}
                </Link>
              </li>
            ))}
            <Link className={styles.donateButton} href="/support">Donate</Link>
          </ul>
          <button className={styles.mobileNavToggle} onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <>
                <X />
                <span className="visually-hidden">Close Menu</span>
              </>
            ) : (
              <>
                <Menu />
                <span className="visually-hidden">Menu</span>
              </>
            )}
          </button>
        </div>
        {isOpen && (
          <div className={styles.mobileNav}>
            <ul>
              {links.map(({ label, to }) => (
                <li key={to} className={styles.mobileLinks}>
                  <Link
                    href={to}
                    className={styles.link}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
