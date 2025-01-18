import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCounterStore } from "@/store/useCounterStore";
import { Link } from "react-router";

export default function HomePage() {
  const count = useCounterStore((state) => state.count);

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-2">
      <h1 className="text-foreground text-2xl font-bold">Home Page</h1>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Counter</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-3xl font-bold">Count: {count}</h1>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link to="/counter">Go to Counter Page</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
