import CategoryItem from "./components/CategoryItem";
import SearchBar from "./components/ui/SearchBar";
import { Providers } from "./components/Providers";

export default function Home() {
  const categories = ["Ethnicity", "Gender", "Disabilities", "LGBTQ"];

  return (
    <Providers>
      <div className="grid place-items-center min-h-screen p-8">
        <main className="w-full max-w-xl">
          <h1 className="w-full max-w-xl text-5xl mx-auto text-center">
            DEI DASHBOARD
          </h1>
          <SearchBar />
          {categories.map((category) => (
            <CategoryItem key={category} category={category} />
          ))}
        </main>
      </div>
    </Providers>
  );
}
