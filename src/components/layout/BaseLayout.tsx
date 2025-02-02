import { Outlet } from "react-router";
import Navigation from "@/components/layout/Navigation";

export default function BaseLayout() {
  return (
    <div className="dark flex h-dvh w-full flex-col items-center justify-center gap-4 bg-background">
      <Navigation />
      <Outlet />
    </div>
  );
}
