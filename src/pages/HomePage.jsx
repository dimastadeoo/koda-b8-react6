import React from "react";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";

function HomePage() {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/data/articles.json");

        if (!response.ok) {
          throw new Error("Gagal mengambil data artikel");
        }

        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />

      <main className="mx-auto grid max-w-350 grid-cols-1 lg:grid-cols-[1fr_360px]">
        <section className="px-6 py-10 md:px-20 lg:border-r lg:border-neutral-200">
          <div className="mb-10 flex gap-10 border-b border-neutral-200">
            <button className="border-b border-neutral-900 pb-5 text-sm font-medium text-neutral-900">
              For you
            </button>

            <button className="pb-5 text-sm font-medium text-neutral-500">
              Featured
            </button>
          </div>

          {loading && (
            <p className="py-10 text-neutral-500">Loading articles...</p>
          )}

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h2 className="font-semibold text-red-700">
                Terjadi kesalahan
              </h2>

              <p className="mt-2 text-sm text-red-600">
                {error}
              </p>
            </div>
          )}

          {!loading && !error && (
            <div>
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default HomePage;