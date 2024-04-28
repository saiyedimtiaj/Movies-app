import React, { useState, useEffect } from "react";
import moviesData from "../../public/data.json";
import Movie from "./Movie";
import Select from "./Select";

const AllMovies = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectGenres, setSelectGenres] = useState("all");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const countries = [
    ...new Set(moviesData.flatMap((movie) => movie.moviecountries)),
  ];
  const languages = [
    ...new Set(moviesData.flatMap((movie) => movie.movielanguages)),
  ];
  const genres = [...new Set(moviesData.flatMap((movie) => movie.moviegenres))];

  useEffect(() => {
    let filtered = moviesData;

    if (selectedCountry !== "all") {
      filtered = filtered.filter((movie) =>
        movie.moviecountries.includes(selectedCountry)
      );
    }

    if (selectedLanguage !== "all") {
      filtered = filtered.filter((movie) =>
        movie.movielanguages.includes(selectedLanguage)
      );
    }

    if (selectGenres !== "all") {
      filtered = filtered.filter((movie) =>
        movie.moviegenres.includes(selectGenres)
      );
    }

    setFilteredMovies(filtered);
  }, [selectedCountry, selectedLanguage, selectGenres]);

  return (
    <div>
      <div className="mb-5 mt-6 flex flex-wrap gap-4 items-center justify-center">
        <Select
          allData={countries}
          defaultOption={"Country"}
          initValue={selectedCountry}
          setFunc={setSelectedCountry}
        />
       <Select
          allData={languages}
          defaultOption={"Language"}
          initValue={selectedLanguage}
          setFunc={setSelectedLanguage}
        />
       <Select
          allData={genres}
          defaultOption={"Genres"}
          initValue={selectGenres}
          setFunc={setSelectGenres}
        /> 
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
          <Movie key={movie?.imdbmovieid} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
