import React, { Component } from 'react';
import {dataApi} from '../../Services';
import {getConfiguration} from '../../Services'
import Item from '../Item/Item';
class RequestedMovies extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data : [],
            name : "upcoming",
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
    __getListUpcomingMovies = () => {
        const params = {
            'param1' : 'movie',
            'param2' : 'upcoming'
        }
        const dataUpcomingMovies = dataApi(params);
        return dataUpcomingMovies;
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
        const getListUpcomingMovies = this.__getListUpcomingMovies();
        const getConfigurationImage = this.__getConfigurationImage();
        const combinePromise = Promise.all([getListUpcomingMovies, getConfigurationImage]);
        combinePromise.then( (values)=>{
            const getListUpcomingMovies = values[0].data;
            const getConfigurationImage = values[1].data;
            const base_url = getConfigurationImage.images.base_url;
            const poster_sizes = getConfigurationImage.images.poster_sizes[4];
            let pathImagePoster = '';
            let pathImageBackdrop = '';
            //console.log(getListLastMovies);
            let listLastMovies = getListUpcomingMovies.results.map((product,index) =>{
                pathImagePoster = base_url + poster_sizes + product.poster_path;
                pathImageBackdrop = base_url + poster_sizes + product.backdrop_path;
                //console.log(pathImage);
                return {
                    id: `${product.id}`,
                    original_title: `${product.original_title}`,
                    overview: `${product.overview}`,
                    poster_path: `${pathImagePoster}`,
                    backdrop_path:`${pathImageBackdrop}`,
                    release_date: `${product.release_date}`,
                    vote_average: `${product.vote_average}`
                };
            });
            //console.log(listLastMovies);
            this.setState({
                data : listLastMovies
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
    __listItemUpcomingMovie = ( () =>{
        const arrMovie = [];
        for (let index = 0; index < this.state.data.length; index++) {
            arrMovie.push(this.state.data[index]);
        }
        //console.log(arrMovie);
        const elementItemUpcomingMovies = this.state.data.map((product,index) => 
            {
                var random = this.__randomItem(arrMovie);
                //console.log(random);
                // tìm vị trí phần tử random rồi xóa nó đi.
                //console.log(arrMovie);
                var elementMovie = arrMovie.splice(random, 1);
                //console.log(elementID);
                if(index <= 9){
                    return (
                        <div className="col-md-2 w3l-movie-gride-agile requested-movies" key = {index}>
                            <Item
                                id = {elementMovie[0].id}
                                name = {this.state.name}
                                original_title = {elementMovie[0].original_title}
                                poster_path =  {elementMovie[0].poster_path}
                                backdrop_path = {elementMovie[0].backdrop_path}
                                vote_average =  {elementMovie[0].vote_average}
                                release_date =  {elementMovie[0].release_date}
                            />
                        </div>
                    )
                }
            }
        )
        //console.log(elementItemUpcomingMovies);
        // const elementItemUpcomingMovies = this.state.data.map((product,index) => {
        //     //console.log(product);
        //     if (index <= 9) {
        //         return (
        //             <div className="col-md-2 w3l-movie-gride-agile requested-movies" key = {index}>
        //                 <Item
        //                     name = {this.state.name}
        //                     original_title = {product.original_title}
        //                     poster_path =  {product.poster_path}
        //                     backdrop_path = {product.backdrop_path}
        //                     vote_average =  {product.vote_average}
        //                     release_date =  {product.release_date}
        //                 />
        //             </div>
        //         )
        //     }
        // });
        // console.log(elementItemLatestMovies);
        //console.log(elementItemUpcomingMovies);
        //console.log(item);
        return elementItemUpcomingMovies;
    });
    __randomItem = (items) => {
        // truyền vào 1 mảng và trả vè 1 phần tử random trong đó
        return  Math.floor(Math.random() * items.length);
    }
    render() {
        //this.__getRandomMovie();
        return (
            <div className="wthree_agile-requested-movies">
                {/* START ITEM REQUEST MOVIES*/ }
                {this.__listItemUpcomingMovie()}
                {/* END ITEM REQUEST MOVIES*/ }
                <div className="clearfix" />
            </div>
        );
    }
}

export default RequestedMovies;