import React, { Component } from 'react';
import { dataApi } from '../../../../Services';

class TagReviewMovies extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }
    
    componentDidMount(){
        this.__promisAll();
    }
    __listgenreMovie = () => {
            const params = {
                'param1'  : 'genre',
                'param2'  : 'movie',
                'param3'  : 'list',
                'language' : 'en-US'
            }
            const dataGenreMovies = dataApi(params);
            //console.log(dataGenreMovies);
            return dataGenreMovies;
    }
    __promisAll = () => {
        const getListGenreMovies = this.__listgenreMovie();
        const combinePromise = Promise.all([getListGenreMovies]);
        var arrayData = [];
        combinePromise.then((values)=>{
            const getListGenreMovies = values[0].data;
            //console.log(getListGenreMovies);
            let listTopMovies =  getListGenreMovies.genres.map( (genre,index) => {
                arrayData.push(genre.name);
            });
           // console.log(listTopMovies);
           return listTopMovies;
           
        });
        //console.log(arrayData);
           
    }
    
    render() {
        this.__listgenreMovie();
        return (
            <div className="col-md-2 footer-grid">
                <h4>Review Movies</h4>
                <ul className="w3-tag2">
                <li><a href="comedy.html">Comedy</a></li>
                <li><a href="horror.html">Horror</a></li>
                <li><a href="series.html">Historical</a></li>
                <li><a href="series.html">Romantic</a></li>
                <li><a href="series.html">Love</a></li>
                <li><a href="genre.html">Action</a></li>
                <li><a href="single.html">Reviews</a></li>
                <li><a href="comedy.html">Comedy</a></li>
                <li><a href="horror.html">Horror</a></li>
                <li><a href="series.html">Historical</a></li>
                <li><a href="series.html">Romantic</a></li>
                <li><a href="genre.html">Love</a></li>
                <li><a href="comedy.html">Comedy</a></li>
                <li><a href="horror.html">Horror</a></li>
                <li><a href="genre.html">Historical</a></li>
                </ul>
            </div>
        );
    }
}

export default TagReviewMovies;