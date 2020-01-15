import React, { Component } from 'react';
import { dataApi } from '../../../../Services';

class TagReviewMovies extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            genres : []
        }
    }
    componentDidMount(){
        this.__promisAll();
    }
    __getListgenreMovie = () => {
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
        const getListGenreMovies = this.__getListgenreMovie();
        const combinePromise = Promise.all([getListGenreMovies]);
        var arrayData = [];
        combinePromise.then((values)=>{
            // console.log(values);
            const getListGenreMovies = values[0].data;
            //console.log(getListGenreMovies.genres);
            //console.log(getListGenreMovies);
            let listGenres =  getListGenreMovies.genres.map( (genre,index) => {
                return {
                    id: `${genre.id}`,
                    name: `${genre.name}`,
                }
            });
            this.setState({
                genres : listGenres
            });
        });
        //console.log(arrayData);
    }
    __listgenreMovie  = () => {

        let listGenres =  this.state.genres.map( (genre,index) => {
            return (
                 <li key={index}><a href="comedy.html" id={genre.id}>{genre.name}</a></li>
            )
        });
        return listGenres
    }
    
    render() {
        this.__listgenreMovie();
        return (
            <div className="col-md-2 footer-grid">
                <h4>Review Movies</h4>
                <ul className="w3-tag2">
                {this.__listgenreMovie()}
                </ul>
            </div>
        );
    }
}

export default TagReviewMovies;