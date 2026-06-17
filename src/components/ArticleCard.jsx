import { useNavigate } from "react-router-dom";

function ArticleCard({ article }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/@${article.username}/${article.slug}-${article.id}`);
  };

  return (
    <article
      onClick={goToDetail}
      className="group cursor-pointer border-b border-neutral-200 py-9"
    >
      <div className="grid grid-cols-[1fr_130px] gap-5 sm:grid-cols-[1fr_180px] md:grid-cols-[1fr_220px]">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-neutral-700">
            <div className="h-5 w-5 overflow-hidden rounded-full bg-neutral-200">
              <img
                src={article.avatar}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            <span>
              In{" "}
              <strong className="font-medium">{article.publication}</strong>{" "}
              by {article.fullname}
            </span>

            <span>·</span>
            <span>{article.date}</span>
          </div>

          <h2 className="text-xl font-extrabold leading-tight tracking-tight group-hover:underline md:text-[28px]">
            {article.title}
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            {article.subtitle}
          </p>
        </div>

        <div className="h-25 overflow-hidden rounded bg-neutral-100 md:h-32.5">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-neutral-500">
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">✦</span>
            {article.views}
          </span>

          <span className="flex items-center gap-1">
            <span>●</span>
            {article.comments}
          </span>

          <span className="flex items-center gap-1">
            <span>↻</span>
            {article.reposts}
          </span>
        </div>

        <div className="flex items-center gap-5 text-2xl text-neutral-500">
          <button
            onClick={(event) => event.stopPropagation()}
            className="hover:text-neutral-900"
          >
            ♡
          </button>

          <button
            onClick={(event) => event.stopPropagation()}
            className="hover:text-neutral-900"
          >
            ♧
          </button>

          <button
            onClick={(event) => event.stopPropagation()}
            className="hover:text-neutral-900"
          >
            ⋯
          </button>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;