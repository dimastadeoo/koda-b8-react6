import React from "react";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";

/**
 * HomePage component.
 *
 * This component fetches article data from a local JSON file,
 * stores the fetched data in React state, and renders a list of
 * article cards on the homepage.
 *
 * It also handles loading and error states while fetching data.
 *
 * @returns {JSX.Element} The homepage view containing the navbar and article list.
 */
export default function HomePage() {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    /**
     * Fetches articles from the local JSON file.
     *
     * This function requests article data from the public data folder,
     * converts the response into JavaScript data using response.json(),
     * and stores the result inside the articles state.
     *
     * If the request fails, the error message is stored in the error state.
     *
     * @async
     * @function fetchArticles
     * @returns {Promise<void>} A promise that resolves when the fetching process is complete.
     */
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