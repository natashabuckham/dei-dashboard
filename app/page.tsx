import SearchBar from "./components/ui/SearchBar";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen p-8">
      <main className="w-full max-w-xl">
        <h1 className="w-full max-w-xl text-5xl mx-auto text-center">
          DEI DASHBOARD
        </h1>
        <SearchBar />
      </main>
    </div>
  );
}
