import CategoryItem from "./components/CategoryItem";
import SearchBar from "./components/ui/SearchBar";
import { identity, industries } from "./constants/categories";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen p-8">
      <main className="w-full max-w-4xl">
        <h1 className="w-full max-w-4xl text-5xl mx-auto text-center font-bold text-gray-800">
          Foundation
        </h1>
        <SearchBar />
        <section>
          <h2 className="text-2xl pt-9 font-medium text-gray-800 mb-4">
            Identity
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {identity.map((category) => (
              <CategoryItem
                key={category}
                category={category}
                className="bg-green-500 hover:bg-green-600"
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-gray-800 mb-4">Industry</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((category) => (
              <CategoryItem
                key={category}
                category={category}
                className="bg-blue-500 hover:bg-blue-600"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
