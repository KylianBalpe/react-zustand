import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getPokemon } from "@/service/getService";
import { useCounterStore } from "@/store/useCounterStore";
import { useQuery } from "@tanstack/react-query";

interface PokemonData {
  results: {
    name: string;
  }[];
  next: string;
  previous: string;
}

export default function FetchPage() {
  const { count } = useCounterStore();

  const {
    data: pokemonData,
    isLoading,
    error,
  } = useQuery<PokemonData>({
    queryKey: ["pokemon"],
    queryFn: () => getPokemon(0, 10),
  });

  return (
    <>
      <h1 className="text-2xl font-bold text-foreground">Fetch Page</h1>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Counter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h1 className="text-3xl font-bold">Count: {count}</h1>

          <ul className="space-y-2">
            {isLoading &&
              [...Array(10)].map((_, index) => (
                <li key={index}>
                  <Skeleton className="h-5 w-full" />
                </li>
              ))}
            {!isLoading &&
              !error &&
              pokemonData &&
              pokemonData.results.map((pokemon, index) => (
                <li key={index}>
                  <p className="text-sm font-medium capitalize">
                    {pokemon.name}
                  </p>
                </li>
              ))}
          </ul>

          {error && <p className="text-destructive">Error: {error.message}</p>}
        </CardContent>
      </Card>
    </>
  );
}
