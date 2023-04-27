import Link from "next/link";
import { AppNavigation } from "@/src/components/app-navigation";
import { AppFooter } from "@/src/components/app-footer";
import { navigationConfig } from "@/src/config/nav";

export default function GalleryLayout({ children }) {
  return (
    <div className="flex flex-col">
      <AppNavigation />
      {children}
      <AppFooter />
    </div>
  );
}
