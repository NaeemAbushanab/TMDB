import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAccessTokenAuth } from "../user/userSlice";
import MovieCard from "../../components/movieCard/MovieCard";
import LoadingScreen from "../../components/LoadingScreen";
import Pagination from "../../components/Pagination";
import MovieList from "../../components/movieList/MovieList";

function TrendMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataApi, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const accessTokenAuth = useSelector(selectAccessTokenAuth);

  const getData = async (_currentPage) => {
    setIsLoading(true);
    return axios
      .get(`https://api.themoviedb.org/3/trending/movie/day`, {
        params: { language: "en-US", page: _currentPage },
        headers: {
          accept: "application/json",
          Authorization: accessTokenAuth,
        },
      })
      .then(({ data }) => {
        const curData = dataApi.concat(data.results);
        setData(curData);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    getData(1);
  }, []);

  const handleLoadMoreButtom = () => {
    setCurrentPage(currentPage + 1);
    getData(currentPage + 1);
  };
  // if (isLoading) return <LoadingScreen />;
  return (
    <>
      <MovieList movies={dataApi} />
      <div className="py-10 flex justify-center">
        {!isLoading ? (
          <button
            onClick={handleLoadMoreButtom}
            className="bg-slate-700 rounded-full px-5 py-2 text-white"
          >
            Load more
          </button>
        ) : (
          <LoadingScreen />
        )}
      </div>
    </>
  );
}

export default TrendMovies;
