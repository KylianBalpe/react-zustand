import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCounterStore } from "@/store/useCounterStore";

export default function CounterPage() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <h1 className="text-2xl font-bold">Counter Page</h1>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Counter</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-3xl font-bold">Count: {count}</h1>
        </CardContent>
        <CardFooter className="flex flex-row items-start justify-start gap-2">
          <Button
            onClick={decrement}
            disabled={count === 0}
            variant={count === 0 ? "destructive" : "default"}
          >
            Decrement
          </Button>
          <Button onClick={increment}>Increment</Button>
        </CardFooter>
      </Card>
    </>
  );
}
