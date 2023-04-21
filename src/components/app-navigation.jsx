

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
          {navigationConfig.mainNav.map((nav, index) => <Link key={index} className="nav-link" href={nav.href}>{nav.title}</Link>
          )}
        </div>
      </nav>
    </header>
  );
};
