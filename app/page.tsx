import CategoryItem from "./components/CategoryItem";
import SearchBar from "./components/ui/SearchBar";
import { diversities, industries } from "./constants/categories";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen p-8">
      <main className="w-full max-w-xl">
        <h1 className="w-full max-w-xl text-5xl mx-auto text-center">
          Foundation
        </h1>
        <SearchBar />
        <nav aria-label="Diversities">
          <h2 className="sr-only">Diversities</h2>
          {diversities.map((category) => (
            <CategoryItem
              key={category}
              category={category}
              className="bg-green-500 hover:bg-green-600"
            />
          ))}
        </nav>
        <nav aria-label="Industries">
          <h2 className="sr-only">Industries</h2>
          {industries.map((category) => (
            <CategoryItem
              key={category}
              category={category}
              className="bg-blue-500 hover:bg-blue-600"
            />
          ))}
        </nav>
      </main>
    </div>
  );
}
