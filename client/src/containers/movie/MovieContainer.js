import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import MovieList from "../../components/movie/MovieList";
import Modal from "../../components/cinema/Cinema";
import { listPosts, upcomingPosts } from "../../modules/currentmovie";

const MovieContainer = () => {
  const dispatch = useDispatch();
  const { movielist } = useSelector((state) => ({
    movielist: state.movielist.movielist,
    upcominglist: state.movielist.upcominglist,
  }));

  const [currentList, setCurrentList] = useState(movielist);
  console.log("1111111111111111->", currentList)
  const handleCurrentMovies = () => {
    setCurrentList(movielist.movielist);
  };

  const handleUpcomingMovies = () => {
    setCurrentList(movielist.upcominglist);
  };

  const handleSortByPopularity = () => {
    const sortedList = [...currentList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setCurrentList(sortedList);
  };

  const handleSortByStar = () => {
    const sortedList = [...currentList].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setCurrentList(sortedList);
  };
  const handleSortByCount = () => {
    const sortedList = [...currentList].sort(
      (a, b) => b.vote_count - a.vote_count
    );
    setCurrentList(sortedList);
  };

  useEffect(() => {
    dispatch(listPosts());
    dispatch(upcomingPosts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentList(movielist.movielist);
  }, [movielist.movielist]);

  return (
    <div>
      <MovieList
        movielist={currentList}
        handleCurrentMovies={handleCurrentMovies}
        handleUpcomingMovies={handleUpcomingMovies}
        handleSortByPopularity={handleSortByPopularity}
        handleSortByStar={handleSortByStar}
        handleSortByCount={handleSortByCount}
      />
    </div>
  );
};

export default MovieContainer;
