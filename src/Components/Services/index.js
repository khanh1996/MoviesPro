import React, { Component } from 'react'
import axios from 'axios'

export const dataApi = (params) => {
    const param1 = params.param1; // movie
    const param2 = params.param2; // now_playing
    //console.log(movie);
    const URL = 'https://api.themoviedb.org/3/'+ param1 + '/'+ param2 +'?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US&page=1';
    //console.log(URL);
    const path = axios.get(URL);
    //console.log(path);
    return path;
}