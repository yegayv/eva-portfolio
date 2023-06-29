import { AppNavigation } from "@/src/components/app-navigation";
import { AppFooter } from "@/src/components/app-footer";

export default function GalleryLayout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <AppNavigation />
      {children}
      <AppFooter />
    </div>
  );
}
