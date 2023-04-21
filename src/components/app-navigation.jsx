import Link from "next/link";
import React from "react";
import { navigationConfig } from "../config/nav";

export const AppNavigation = () => {
  return (
    <header>
      <nav>
        <div>
          <Link className="nav-link" href="/">Home</Link>
        </div>
        <div className="navigation">
          {navigationConfig.mainNav.map((nav) => {
            if (nav.dropdown) {
              return <div className="dropdown">
                <div type="button" className="nav-link">
                  {nav.title}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "0.35rem" }}
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </div>
                <div className="dropdown-content">
                  <div>
                    {nav.dropdownContent.map((link) => (
                      <Link href={link.href}>{link.title}</Link>
                    ))}
                  </div>
                </div>
              </div>
            }
            else {
              return <Link className="nav-link" href={nav.href}>{nav.title}</Link>
            }
          })}
        </div>
      </nav>
    </header>
  );
};
