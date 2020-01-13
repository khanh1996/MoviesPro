import React, { Component } from 'react';
import Item from '../Item/Item';
import ItemDetail from '../ItemDetail/ItemDetail';
import {dataApi} from '../../Services';
import {getConfiguration} from '../../Services'

class TopMovies extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data : [],
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
        this.__promisAll();
    }
    __getListTopMovies = () => {
        const params = {
            'param1'  : 'discover',
            'param2'  : 'movie',
            'language': 'en-US',
            'sort_by' : 'vote_count.desc',
            'include_adult' : true,
            'include_video' : true
        }
        const dataTopMovies = dataApi(params);
        //console.log(dataTopMovies);
        return dataTopMovies;
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
        const getListTopMovies = this.__getListTopMovies();
        const getConfigurationImage = this.__getConfigurationImage();
        const combinePromise = Promise.all([getListTopMovies,getConfigurationImage]);
        combinePromise.then((values)=>{
            const getListTopMovies = values[0].data;
            const getConfigurationImage = values[1].data;
            const base_url = getConfigurationImage.images.base_url;
            const poster_sizes = getConfigurationImage.images.poster_sizes[3];
            const backdrop_sizes = getConfigurationImage.images.backdrop_sizes[3];
            const profile_sizes = getConfigurationImage.images.profile_sizes[1];
            const still_sizes = getConfigurationImage.images.still_sizes[1];
            let pathImagePoster = '';
            let pathImageBackdrop = '';
            let pathImageProfile = '';
            let pathImageStill = '';
            let listTopMovies =  getListTopMovies.results.map( (product,index) => {
                pathImagePoster = base_url + poster_sizes + product.poster_path;
                pathImageBackdrop = base_url + backdrop_sizes + product.backdrop_path;
                pathImageProfile = base_url + profile_sizes + product.poster_path;
                pathImageStill = base_url + still_sizes + product.poster_path;
                return {
                    id : `${product.id}`,
                    original_title: `${product.original_title}`,
                    overview: `${product.overview}`,
                    poster_path: `${pathImagePoster}`,
                    backdrop_path:`${pathImageBackdrop}`,
                    profile_sizes:`${pathImageProfile}`,
                    still_sizes:`${pathImageStill}`,
                    release_date: `${product.release_date}`,
                    vote_average: `${product.vote_average}`,
                    genre_ids : `${product.genre_ids}`
                }
            });
            
            this.setState({
                data : listTopMovies
            });
        });
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
    __listItemTopMovie = (() =>{
        const arrMovie = [];
        for (let index = 0; index < this.state.data.length; index++) {
           arrMovie.push(this.state.data[index]);
        }
        
        const elementListItemTopMovies = this.state.data.map((product,index) => {
            //console.log(product);
            const random = this.__randomItem(arrMovie);
            const elementMovie = arrMovie.splice(random,1);
            //console.log(elementMovie);
            if(index !== 0 && index < this.state.data.slice(0,9).length ){
                return (
                    <div className="w3l-movie-gride-agile" key = {index}>
                    <Item 
                        key = {index}
                        id = {elementMovie[0].id} 
                        original_title = {elementMovie[0].original_title}
                        poster_path =  {elementMovie[0].poster_path}
                        backdrop_path = {elementMovie[0].backdrop_path}
                        vote_average =  {elementMovie[0].vote_average}
                        release_date =  {elementMovie[0].release_date}
                        // href = {product.href}
                    />
                    </div>
                )
            }
        });
        //console.log(elementItemTopMovies);
        return elementListItemTopMovies;
    });
    __itemDetailTopMovie = (()=>{
        const arrMovie = [];
        for (let index = 0; index < this.state.data.length; index++) {
           arrMovie.push(this.state.data[index]);
        }
        const itemDetailTopMovie = this.state.data.map((product,index) => {
            const random = this.__randomItem(arrMovie);
            const elementMovie = arrMovie.splice(random,1);
            if(index === 0 ){
                return (
                    <ItemDetail 
                            key = {index}
                            id = {elementMovie[0].id} 
                            original_title = {elementMovie[0].original_title}
                            overview = {elementMovie[0].overview}
                            poster_path =  {elementMovie[0].poster_path}
                            backdrop_path = {elementMovie[0].backdrop_path}
                            profile_sizes = {elementMovie[0].profile_sizes}
                            still_sizes = {elementMovie[0].still_sizes}
                            vote_average =  {elementMovie[0].vote_average}
                            release_date =  {elementMovie[0].release_date}
                            genre_ids = {elementMovie[0].genre_ids}
                        />
                )
            }
        });
        //console.log(itemDetailTopMovie);
        return itemDetailTopMovie;
    });
    __randomItem = (items) => {
        // truyền vào 1 mảng và trả vè 1 phần tử random trong đó
        return  Math.floor(Math.random() * items.length);
    }
    render() {
        
        return (
            <div className="top_movies">
                <div className="tab_movies_agileinfo">
                    <div className="w3_agile_featured_movies two">
                    <div className="col-md-7 wthree_agile-movies_list second-top">
                        
                        {this.__listItemTopMovie()}
                    </div>
                    <div className="col-md-5 video_agile_player second-top">
                        
                        { this.__itemDetailTopMovie()}
                        
                    </div>
                    <div className="clearfix"> </div>
                    </div>
                    <div className="cleafix" />
                </div>	
            </div>
        );
    }
}

export default TopMovies;