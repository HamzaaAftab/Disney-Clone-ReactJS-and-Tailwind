import GlobalApi from "../Services/GlobalApi";
import { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ genreId }) => {
    const [movieList, setMovieList] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then((resp) => {
            setMovieList(resp.data.results);
        });
    };

    const scrollLeft = () => {
        scrollRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    };

    const scrollRight = () => {
        scrollRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    };

    return (
        <div className="relative">
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 z-10"
                onClick={scrollLeft}
            >
                {"<"}
            </button>
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-4 pb-4 sdff"
            >
                {movieList.map((item, index) => (
                    <MovieCard key={index} movie={item} />
                ))}
            </div>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 z-10"
                onClick={scrollRight}
            >
                {">"}
            </button>
        </div>
    );
};

export default MovieList;
