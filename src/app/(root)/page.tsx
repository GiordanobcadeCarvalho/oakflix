import { SectionMovies } from "../components/Sections/SectionMovies";

const curatedTitles = [
  "FernGully: The Last Rainforest",
  "WALL-E",
  "The Tree of Life",
  "Into the Wild",
  "The Ivory Game",
  "An Inconvenient Truth",
  "Okja",
  "The Last Lions",
  "A Plastic Ocean",
  "The Serengeti Rules",
  "Grizzly Man",
  "Chasing Ice"
];

const fetchMovieByTitle = (title: string) =>
  fetch(
    `${process.env.NEXT_PUBLIC_OMDB}&s=${encodeURIComponent(
      title
    )}&type=movie&page=1`,
    { next: { revalidate: 60 * 60 } }
  )
    .then((res) => res.json())
    .then((data) => (data.Response === "True" ? data.Search[0] : null));

const fetchNatureMovies = async () =>
  Promise.all(curatedTitles.map(fetchMovieByTitle))
    .then((movies) => movies.filter((m) => m))
    .then((movies) =>
      movies.slice(0, 12).map((movie: any) => ({
        ...movie,
      }))
    );

export default async function Page() {
  const movies = await fetchNatureMovies();

  return (
    <section className="flex flex-col items-center justify-center text-center gap-8 h-full">
      <h1 className="text-4xl font-bold text-oakflix-forest">
        Nature's grasp at one click!
      </h1>
      <SectionMovies movies={movies} />
    </section>
  );
}
