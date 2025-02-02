import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCounterStore } from "@/store/useCounterStore";

export default function FetchPage() {
  const { count } = useCounterStore();
  return (
    <>
      <h1 className="text-2xl font-bold text-foreground">Fetch Page</h1>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Counter</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-3xl font-bold">Count: {count}</h1>
        </CardContent>
      </Card>
    </>
  );
}
