import { AppFooter } from "@/src/components/app-footer";
import { AppNavigation } from "@/src/components/app-navigation";
import React from "react";

const IndexLayout = ({ children }) => {
  return (
    <>
      {/* <AppNavigation /> */}
      {children}
      {/* <AppFooter /> */}
    </>
  );
};

export default IndexLayout;
