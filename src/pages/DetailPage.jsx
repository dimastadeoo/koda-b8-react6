import { useParams, useNavigate } from "react-router";
import React from "react";
import Navbar from "../components/Navbar";


function DetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

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

        // response.json() sudah menjadi array/object
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const article = articles.find((item) => (`${item.slug}-${item.id}`) === slug);
  if (!article) {
    navigate("/not-found", { replace: true });
    return;
  }


  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">

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
          <>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-lg font-bold text-white">
                {article.username.charAt(0)}
              </div>

              <div>
                <p className="font-medium text-neutral-900">{article.username}</p>
                <p className="mt-1 text-sm text-neutral-500">
                  {article.date} · 4 min read
                </p>
              </div>
            </div>

            <h1 className="font-serif text-4xl font-medium leading-tight md:text-6xl">
              {article.title}
            </h1>

            <div className="mt-8 overflow-hidden rounded-xl bg-neutral-100">
              <img
                src={article.image}
                alt={article.title}
                className="h-90 w-full object-cover"
              />
            </div>

            <article className="mt-12 space-y-7 font-serif text-xl leading-9 text-neutral-800">
              {article.body.split("&&").map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </article>
          </>
        )}
      </main>
    </div>
  );
}

export default DetailPage;