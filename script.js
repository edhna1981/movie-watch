let movieName = document.getElementById("movieName");
let genre = document.getElementById("genre");
let releaseYear = document.getElementById("releaseYear");
let rating = document.getElementById("rating");


function addMovie(){

    let name = movieName.value;
    let movieGenre = genre.value;
    let year = releaseYear.value;
    let movieRating = rating.value;

    let movies = JSON.parse(sessionStorage.getItem("movies")) || [];

    // console.log(name);
    // console.log(movieGenre);
    // console.log(year);
    // console.log(movieRating);

   let movie = {
        name: name,
        genre: movieGenre,
        releaseYear: year,
        rating:movieRating,
        watched:false
    };

    movies.push(movie);

    sessionStorage.setItem("movies", JSON.stringify(movies));

    console.log(movies);
    
}