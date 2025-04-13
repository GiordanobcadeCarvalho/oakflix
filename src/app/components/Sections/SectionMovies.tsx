"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/custom.css";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/types";

interface SectionMoviesProps {
  movies: Movie[];
}

export const SectionMovies = ({ movies }: SectionMoviesProps) => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={3}
        slidesPerGroup={3}
        loop={movies.length >= 3}
        pagination={false}
        breakpoints={{
          1280: { slidesPerView: 4, slidesPerGroup: 4 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
          640: { slidesPerView: 2, slidesPerGroup: 2 },
          0: { slidesPerView: 1, slidesPerGroup: 1 },
        }}
        navigation
        className="py-4"
      >
        {movies.map((movie, index) => (
          <SwiperSlide
            key={`${movie.imdbID}+${index}`}
            className="max-w-[540px]"
          >
            <Link
              href={`/movie/details/${movie.imdbID}`}
              className="group w-full h-[572px] bg-neutral-800 rounded-xl flex flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:brightness-110"
            >
              <div className="relative w-full h-[80%]">
                <Image
                  src={
                    movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"
                  }
                  alt={movie.Title}
                  fill
                />
              </div>
              <div className="h-[20%] flex items-center justify-center text-white text-center p-2 text-lg font-semibold group-hover:underline">
                {movie.Title}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
