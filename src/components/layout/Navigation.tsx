import { ReactNode } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";


export default function Navigation() {
  return (
    <div className="flex flex-row gap-2 p-2 border rounded-md bg-secondary border-border">
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/counter">Counter</NavigationLink>
      <NavigationLink to="/fetch">Fetch</NavigationLink>
    </div>
  );
}

const NavigationLink = ({ to, children }: { to: string; children: ReactNode }) => {
  return (
    <Button asChild>
      <Link to={to}>{children}</Link>
    </Button>
  );
};
