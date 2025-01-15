'use client';

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for accessing the current path
import { FC, ReactNode } from "react";
import classes from './nav-link.module.css';

// Define the props type
interface NavLinkProps {
  href: string; // href should be a string
  children: ReactNode; // children can be any valid React content
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname(); // Get the current pathname

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}
    >
      {children}
    </Link>
  );
};

export default NavLink;
