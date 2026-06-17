import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />

      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center px-6">
        <section className="max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            404 Error
          </p>

          <h1 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-7xl">
            Page not found
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Maaf, halaman yang kamu cari tidak ditemukan atau mungkin sudah
            dipindahkan.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-700"
            >
              Kembali ke Home
            </button>

            <button
              onClick={() => navigate(-1)}
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:border-neutral-900"
            >
              Kembali
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default NotFoundPage;