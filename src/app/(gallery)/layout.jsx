import Link from "next/link";
import { AppNavigation } from "@/src/components/app-navigation";
import { AppFooter } from "@/src/components/app-footer";
import { navigationConfig } from "@/src/config/nav";

export default function GalleryLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="hidden md:block">
        <AppNavigation />
      </div>
      {children}
      <AppFooter />
    </div>
  );
}
