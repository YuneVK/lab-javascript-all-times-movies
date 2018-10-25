/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  var arr = movies.map(function(movie) {
    var minutes = movie.duration.split(' ').map(function(arrTime) { 

      var time = parseInt(arrTime);

      if (arrTime.endsWith('h')) {
        return time * 60;
      } else {
        return time;
      }
    }).reduce(function(acumulator, current) {
      return acumulator + current;
    }, 0);
    return Object.assign({}, movie, {duration: minutes});
  });
  return arr;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  if (movies.length === 0) return;

  var moviesCopy = Object.assign([], movies);
  
  var average = moviesCopy.reduce(function(acumulator, current) {
    return acumulator + current.rate;
  }, 0) / moviesCopy.length;
  return Math.round(average * 100) / 100;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  if (movies.length === 0) return;

  var result = movies.filter(function(movie) {
    return movie.genre.includes("Drama"); 
  });

  if (result.length === 0) return;

  return ratesAverage(result);
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
