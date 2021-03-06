import React, { Component } from 'react';
import {getConfiguration} from '../../Services'
import {dataApi} from '../../Services';
import Item from '../Item/Item';
class LastMovies extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data : [],
            name : 'latest-movies',
            configuration: {
                images: {
                    "base_url": "",
                    "secure_base_url": "",
                    "backdrop_sizes": [],
                    "poster_sizes": []
                }
            }
        }
    }
    componentDidMount(){
        //console.log('componentDidMount::');
        this.__promisAll();
        
    }
    __getListLastMovies = () => {
        //console.log('getListLastMovies::');
        const params = {
            'param1'  : 'discover',
            'param2'  : 'movie',
            'language': 'en-US',
            'sort_by' : 'release_date.desc',
            'include_adult' : false,
            'include_video' : false,
            'page' : 1,
            'year' : 2019
        }
        const dataLastMovies = dataApi(params);
        return dataLastMovies;
    }
    __getConfigurationImage = () => {
        //console.log('getConfigurationImage::');
        const params = {
            'param1' : 'configuration'
        }
        const getConfig = getConfiguration(params);
        return getConfig;
    }
    __promisAll = () => {
        //console.log('__promisAll');
        const getListLastMovies = this.__getListLastMovies();
        const getConfigurationImage = this.__getConfigurationImage();
        const combinePromise = Promise.all([getListLastMovies, getConfigurationImage]);
        combinePromise.then( (values)=>{
            const getListLastMovies = values[0].data;
            const getConfigurationImage = values[1].data;
            const base_url = getConfigurationImage.images.base_url;
            const poster_sizes = getConfigurationImage.images.poster_sizes[2];
            const backdrop_sizes = getConfigurationImage.images.backdrop_sizes[0];
            const profile_sizes = getConfigurationImage.images.profile_sizes[1];
            const still_sizes = getConfigurationImage.images.still_sizes[1];
            let pathImagePoster = '';
            let pathImageBackdrop = '';
            let pathImageProfile = '';
            let pathImageStill = '';
            //console.log(getListLastMovies);
            let listLastMovies = getListLastMovies.results.map((product,index) =>{
                pathImagePoster = base_url + poster_sizes + product.poster_path;
                pathImageBackdrop = base_url + backdrop_sizes + product.poster_path;
                pathImageProfile = base_url + profile_sizes + product.poster_path;
                pathImageStill = base_url + still_sizes + product.poster_path;
                //console.log(pathImageStill);
                return {
                    id: `${product.id}`,
                    original_title: `${product.original_title}`,
                    overview: `${product.overview}`,
                    poster_path: `${pathImagePoster}`,
                    backdrop_path:`${pathImageBackdrop}`,
                    profile_sizes: `${pathImageProfile}`,
                    still_sizes: `${pathImageStill}`,
                    release_date: `${product.release_date}`,
                    vote_average: `${product.vote_average}`,
                    poster_sizes: `${poster_sizes}`
                };
            });
            //console.log(listLastMovies);
            this.setState({
                data : listLastMovies
            });
           
        });
    }
    componentDidUpdate(){
        //console.log('componentDidUpdate::');
        window.initSlider();
    }
    shouldComponentUpdate(nextProps, nextState){
        
        //console.log('shouldComponentUpdate::');
        //console.log(this.state.data);
        
        const oldData = this.state.data;
        const newData = nextState;
        if(oldData !== newData){
            //console.log('1');
            return true;
            
        }else{
            //console.log('2');
            return false;
        }
    }

    __listItemLastMovie = ( () =>{
        //console.log('listItemLastMovie::');
        // const base_url = "http://image.tmdb.org/t/p/";
        // const backdrop_sizes = "w300";
        // const configPath = base_url + backdrop_sizes;
        const elementItemLatestMovies = this.state.data.map((product,index) => {
            //console.log(product);
            return (
                <div className="item" key = {index}>
                    <div className="w3l-movie-gride-agile w3l-movie-gride-slider">
                        <Item
                            name = {this.state.name}
                            original_title = {product.original_title}
                            poster_path =  {product.poster_path}
                            backdrop_path = {product.backdrop_path}
                            vote_average =  {product.vote_average}
                            release_date =  {product.release_date}
                            poster_sizes = {product.poster_sizes}
                            profile_sizes = {product.profile_sizes}
                            still_sizes = {product.still_sizes}
                        />
                    </div>
                </div>
            )
        });
        //console.log(elementItemLatestMovies);
        return elementItemLatestMovies;
    });
    render() {
        //console.log('render:::');
        //console.log(this.state.data);
        return (
            <div className="w3_agile_latest_movies">
                <div id="owl-demo" className="owl-carousel owl-theme">
                    {/* start Item Latest Movies */}
                    {this.__listItemLastMovie()}
                    {/* end Item Latest Movies */}
                </div>
                
            </div>
            
        );
    }
}

export default LastMovies;