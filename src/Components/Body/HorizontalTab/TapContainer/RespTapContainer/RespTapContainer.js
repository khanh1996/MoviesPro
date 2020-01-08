import React, { Component } from 'react';
import {dataApi} from '../../../../Services';
import {getConfiguration} from '../../../../Services'
import ItemDetail from '../ItemDetail/ItemDetail';
import Item from '../Item/Item';
class RespTapContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          data : []
        }
    }
    
    renderALLTap = (() => {
        console.log(this.props.tab);
    });
    componentDidUpdate(){
        //console.log('componentDidUpdate::');
        window.tabSlide();
    }
    componentDidMount(){
        this.__promisAll();
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
            const poster_sizes = getConfigurationImage.images.poster_sizes[4];
            let pathImagePoster = '';
            let pathImageBackdrop = '';
            let listTopMovies =  getListTopMovies.results.map( (product,index) => {
                pathImagePoster = base_url + poster_sizes + product.poster_path;
                pathImageBackdrop = base_url + poster_sizes + product.backdrop_path;
                return {
                    id : `${product.id}`,
                    original_title: `${product.original_title}`,
                    overview: `${product.overview}`,
                    poster_path: `${pathImagePoster}`,
                    backdrop_path:`${pathImageBackdrop}`,
                    release_date: `${product.release_date}`,
                    vote_average: `${product.vote_average}`
                }
            });
            
            this.setState({
                data : listTopMovies
            });
        });
    }
    __listItemTopMovie = (() =>{
        //console.log('listItemLastMovie::');
        // const base_url = "http://image.tmdb.org/t/p/";
        // const backdrop_sizes = "w300";
        // const configPath = base_url + backdrop_sizes;
        const elementListItemTopMovies = this.state.data.map((product,index) => {
            //console.log(product);

            if(index !== 0 && index < this.state.data.slice(0,9).length ){
                return (
                    <Item 
                        key = {index}
                        id = {product.id} 
                        title = {product.title}
                        poster_path =  {product.poster_path}
                        backdrop_path = {product.backdrop_path}
                        vote_average =  {product.vote_average}
                        release_date =  {product.release_date}
                        // href = {product.href}
                    />
                )
            }
        });
        //console.log(elementItemTopMovies);
        return elementListItemTopMovies;
    });
    __itemDetailTopMovie = (()=>{
        const itemDetailTopMovie = this.state.data.map((product,index) => {
            //console.log(product);

            if(index === 0 ){
                return (
                    <ItemDetail 
                            key = {index}
                            id = {product.id} 
                            title = {product.title}
                            overview = {product.overview}
                            poster_path =  {product.poster_path}
                            backdrop_path = {product.backdrop_path}
                            vote_average =  {product.vote_average}
                            release_date =  {product.release_date}
                            genre_ids = {product.genre_ids}
                        />
                )
            }
        });
        //console.log(itemDetailTopMovie);
        return itemDetailTopMovie;
    });
    
    render() {
        this.renderALLTap();
        return (
            <div className="tab_movies_agileinfo">
                <div className="w3_agile_featured_movies">
                    <div className="col-md-5 video_agile_player">
                        { this.__itemDetailTopMovie() }
                    </div>
                    <div className="col-md-7 wthree_agile-movies_list">
                        {this.__listItemTopMovie()}
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="cleafix" />
            </div>
        );
    }
}

export default RespTapContainer;