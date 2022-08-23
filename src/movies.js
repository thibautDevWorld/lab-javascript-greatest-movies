// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((elm) => elm.director);
}

let allDirectorsArr = getAllDirectors(movies);

function cleanMultipleDirectorName(allDirectorsArr) {
  let directorsNameFiltered = [...new Set(allDirectorsArr)];
  return directorsNameFiltered;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramaNumber = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spielbergDramaNumber.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avgScore = moviesArray.reduce((acc, elm) => {
    if (!elm.score) return acc;
    return acc + elm.score / moviesArray.length;
  }, 0);
  return Math.round(avgScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  let avgDramaScore = scoresAverage(dramaMovies);
  return avgDramaScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesSorted = [...moviesArray];
  moviesSorted.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }
  });
  return moviesSorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titleSorted = moviesArray.map((movie) => movie.title).sort();
  titleSorted.splice(20);
  return titleSorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let timeUpdated = [...moviesArray]
    
  let timeInMinute = timeUpdated.map((movie) => {
    if (movie.duration.length <= 2) {
      return movie.duration[0] * 60;
    } else if (movie.duration.indexOf("min")) {
      if (Number(movie.duration[4])) {
        return (
          Number(movie.duration[0]) * 60 +
          Number(movie.duration[3]) * 10 +
          Number(movie.duration[4])
        );
      } else {
        return Number(movie.duration[0]) * 60 + Number(movie.duration[3]);
      }
    }
  });
  timeUpdated.map((movie, idx) => movie.duration = timeInMinute[idx])
  console.log( timeUpdated)
  return timeUpdated
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
