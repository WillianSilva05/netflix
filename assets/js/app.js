let views = document.getElementById("views");
let movies = document.getElementById("movies");

let images = document.getElementsByTagName("img")

let loop_series = 0;

function carrousel_series() {
    loop_series++;
    if(loop_series >= 1) loop_series = 0;

    views.append(images[loop_series+2])
}

setInterval(carrousel_series, 2000)


let loop_movies = 0;

function carrousel_movies() {
    loop_movies++;
    if(loop_movies >= 1) loop_movies = 0;

    movies.append(images[loop_movies+22])
}

setInterval(carrousel_movies, 2000)