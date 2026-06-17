import { useNavigate } from "react-router-dom";

/**
 * Navbar component.
 *
 * This component renders the main navigation bar used across pages.
 * It contains the Medium-style brand title, search input, action buttons,
 * and profile image.
 *
 * The brand title uses programmatic navigation to redirect the user
 * back to the homepage when clicked.
 *
 * @returns {JSX.Element} The main navigation bar component.
 */
function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 flex h-18 items-center justify-between border-b border-neutral-200 bg-white px-5">
      <div className="flex items-center gap-5">
        <button className="text-3xl text-neutral-600">☰</button>

        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer font-serif text-4xl font-bold tracking-tighter"
        >
          Medium
        </h1>

        <div className="hidden h-12 w-80 items-center gap-3 rounded-full bg-neutral-100 px-5 md:flex">
          <span className="text-xl text-neutral-500">⌕</span>

          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-base outline-none placeholder:text-neutral-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="hidden rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white lg:block">
          Get app
        </button>

        <button className="hidden items-center gap-2 text-neutral-700 md:flex">
          <span className="text-2xl">✎</span>
          <span>Write</span>
        </button>

        <button className="text-2xl text-neutral-600">♡</button>

        <div className="h-10 w-10 overflow-hidden rounded-full bg-neutral-200">
          <img
            src="https://avatars.githubusercontent.com/u/53636907?v=4"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;