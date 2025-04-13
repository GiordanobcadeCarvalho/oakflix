interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
  [key: string]: any;
}

const fetchMovieDetails = async (id: string): Promise<MovieDetails | null> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_OMDB}&i=${id}`, {
    next: { revalidate: 60 * 60 },
  });

  const data = await res.json();
  return data?.Response === "True" ? data : null;
};

export default async function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const { id } = await params

    if (!id) {
      return (
        <div className="flex items-center justify-center h-screen text-xl">
          Movie not found.
        </div>
      );
    }

    const movie = await fetchMovieDetails(id);

    if (!movie) {
      return (
        <div className="flex items-center justify-center h-screen text-xl">
          Movie not found.
        </div>
      );
    }

    return (
      <div className="max-w-5xl mx-auto p-4 grid md:grid-cols-2 gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : ""}
          alt={movie.Title}
          className="w-full rounded-lg shadow-lg"
        />
        <div className="text-white space-y-4">
          <h1 className="text-4xl font-bold">{movie.Title}</h1>
          <p className="italic text-oakflix-forest">{movie.Genre}</p>
          <p>
            <strong>Released:</strong> {movie.Released}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
          <p className="text-sm mt-4">{movie.Plot}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading movie details:", error);
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Something went wrong loading this movie.
      </div>
    );
  }
}
