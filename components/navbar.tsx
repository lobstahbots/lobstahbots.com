import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Menu, X } from "react-feather";
import logo from "../images/claw-logo.svg";
import styles from "./navbar.module.css";

const Navbar = () => {
  let links = [
    {
      label: "About",
      to: "/about",
    },
    { label: "Science", to: "/science" },
    { label: "News & Events", to: "/news-events" },
    { label: "Join Us", to: "/join-us" },
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
      document.body.style.overflowY = "visible";
    }
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <nav className="container">
        <div className="flex h-24 flex-row items-center justify-between px-4 py-4 md:px-0">
          <Link href="/" className="h-full">
            <Image
              src={logo}
              alt= "Claw Logo"
              className="h-full max-w-full"
            />
            <span className="sr-only">Home</span>
          </Link>
          <ul className="hidden list-none flex-row items-baseline justify-end gap-8 md:flex">
            {links.map(({ label, to }) => (
              <li key={to} className="group relative">
                <Link
                  href={to}
                  className="py-4 text-lg transition-colors hover:text-myro-blue"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="md:hidden" onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <>
                <X />
                <span className="sr-only">Close Menu</span>
              </>
            ) : (
              <>
                <Menu />
                <span className="sr-only">Menu</span>
              </>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="h-screen px-4 md:hidden">
            <ul>
              {links.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    href={to}
                    className="block py-4 text-2xl transition-colors hover:text-primary-500"
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
