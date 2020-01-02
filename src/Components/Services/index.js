
import axios from 'axios'

export const dataApi = (params) => {
    //console.log('dataApi');
    const param1 = params.param1; // discover
    const param2 = params.param2; // movie
    const language = params.language;
    const sort_by = params.sort_by;
    const include_adult = params.include_adult;
    const include_video = params.include_video;
    const page = params.page;
    const year = params.year;
    //console.log(movie);
    const URL = 'https://api.themoviedb.org/3/'+ param1 + '/'+ param2 +'?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language='+ language +'&sort_by='+ sort_by +'&include_adult='+ include_adult +'&include_video='+ include_video +'&page='+ page + '&year='+ year;
    //console.log(URL);
    const path = axios.get(URL);
    //console.log(path);
    return path;
}
export const getConfiguration = (params) => {
    //console.log('getConfiguration');
    const param = params.param1; // movie
    // const param2 = params.param2; // now_playing/pupular
    const URL = 'https://api.themoviedb.org/3/'+ param +'?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1';
    const path = axios.get(URL);
    //console.log(URL);
    return path;
}

export const genreDataApi = (params) => {
    //console.log('dataApi');
    const param1 = params.param1; // genre
    const param2 = params.param2; // movie
    const param3 = params.param3; // list
    const language = params.language; //language
   
    const URL = 'https://api.themoviedb.org/3/'+ param1 +'/'+ param2 +'/'+ param3 +'?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language='+language+'';
    //console.log(URL);
    const path = axios.get(URL);
    //console.log(path);
    return path;
}