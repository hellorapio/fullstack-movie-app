import Link from "next/link";
import Wrapper from "./Wrapper";

export default function NavBar() {
  return (
    <nav className="bg-slate-600 text-gray-100 h-16">
      <Wrapper>
        <div className="flex justify-center -mt-4">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="hover:opacity-60 transition-all duration-300"
              >
                Search Movies
              </Link>
            </li>
            <li>
              <Link
                href="/favs"
                className="hover:opacity-60 transition-all duration-300"
              >
                Favorites
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:opacity-60 transition-all duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="hover:opacity-60 transition-all duration-300"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </nav>
  );
}
