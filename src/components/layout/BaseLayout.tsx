import { Outlet } from "react-router";

export default function BaseLayout() {
  return (
    <div className="bg-background dark">
      <Outlet />
    </div>
  );
}
