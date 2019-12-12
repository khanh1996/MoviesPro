import React, { Component } from 'react';
import ItemLatestMovies from './ItemLatestMovies/ItemLatestMovies';
import {dataApi} from '../../Services';
import {getConfiguration} from '../../Services'
class LastMovies extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data : [],
            configuration: {
                images: {
                    "base_url": "",
                    "secure_base_url": "",
                    "backdrop_sizes": [
                        "w300",
                        "w780",
                        "w1280",
                        "original"
                    ],
                    "poster_sizes": [
                        "w92",
                        "w154",
                        "w185",
                        "w342",
                        "w500",
                        "w780",
                        "original"
                    ]
                }
            }
        }
    }
    componentDidMount(){
        console.log('componentDidMount::');
        this.__promisAll();
        
    }
    __getListLastMovies = () => {
        console.log('getListLastMovies::');
        const params = {
            'param1' : 'movie',
            'param2' : 'now_playing'
        }
        const dataLastMovies = dataApi(params);
        //console.log(dataRecentMovies);
        // dataLastMovies.then((response)=>{
        //     const data = response.data.results;
        //     //console.log(data);
        //     this.setState({
        //         data : data
        //     });
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
        // .finally(()=>{
            
        // });
        return dataLastMovies;
    }
    __getConfigurationImage = () => {
        const params = {
            'param1' : 'configuration'
        }
        const getConfig = getConfiguration(params);
        // getConfig.then((response)=>{
        //     const data = response.data.images;
        //     //console.log(data);
        //     this.setState({
        //         configuration : {
        //             images : data
        //         }
        //     })
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
        // .finally(() => {

        // });
        return getConfig;
    }
    __promisAll = () => {
        console.log('__promisAll');
        const getListLastMovies = this.__getListLastMovies();
        const getConfigurationImage = this.__getConfigurationImage();
        //console.log(getConfigurationImage);
        const combinePromise = Promise.all([getListLastMovies, getConfigurationImage]);
        combinePromise.then( (values)=>{
            const getListLastMovies = values[0].data;
            const getConfigurationImage = values[1].data;
            console.log(getConfigurationImage);
            let listLastMovies = getListLastMovies.results.map((product,index) =>{
               
                return {
                    _id: `${product.id}`,
                    _name: `${product.original_title}`,
                    _desc: `${product.overview}`,
                };
            });
            // let configurationImage = getConfigurationImage.images.map((image,index) =>{
            //     console.log(image)
            //     return {
            //         _id: `${product.id}`,
            //         _name: `${product.original_title}`,
            //         _desc: `${product.overview}`,
            //     };
            // });
            // //console.log(listLastMovies);
            // this.setState({
            //     data: listLastMovies,
            //     configuration : {
            //         image : configurationImage
            //     }

            // });
        });
    }
    componentDidUpdate(){
        console.log('componentDidUpdate::');
        window.initSlider();
    }
    shouldComponentUpdate(nextProps, nextState){
        
        console.log('shouldComponentUpdate::');
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
        console.log('listItemLastMovie::');
        const base_url = "http://image.tmdb.org/t/p/";
        const backdrop_sizes = "w300";
        const configPath = base_url + backdrop_sizes;
        const elementItemLatestMovies = this.state.data.map((product,index) => {
            return (
                <ItemLatestMovies
                    key = {index} 
                    original_title = {product.original_title}
                    poster_path =  {configPath + product.poster_path}
                    backdrop_path = {configPath + product.backdrop_path}
                    vote_average =  {product.vote_average}
                    release_date =  {product.release_date}
                    href = {product.href}
                />
            )
        });
        //console.log(elementItemLatestMovies);
        return elementItemLatestMovies;
    });
    

    render() {
        
        console.log('render:::');
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