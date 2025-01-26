import NavBar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import MovieSearch from "@/components/MovieSearch";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Wrapper>
        <MovieSearch />
      </Wrapper>
    </main>
  );
}
