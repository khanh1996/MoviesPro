import React, { Component } from 'react';
import { dataApi, getConfiguration } from '../../../Services';
import Item from '../../Item/Item';
import ItemDetail from '../../ItemDetail/ItemDetail';

class TabItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          data : []
        }
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
    __getListTabMovies = () => {
        const params = {
            'param1'  : 'movie',
            'param2'  : this.props.name,
            'language': 'en-US'
        }
        const dataTabMovies = dataApi(params);
        //console.log(dataRecentMovies);
        return dataTabMovies;
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
        const getListTabMovies = this.__getListTabMovies();
        const getConfigurationImage = this.__getConfigurationImage();
        const combinePromise = Promise.all([getListTabMovies,getConfigurationImage]);
        combinePromise.then((values)=>{
            const getListTabMovies = values[0].data;
            const getConfigurationImage = values[1].data;
            const base_url = getConfigurationImage.images.base_url;
            const poster_sizes = getConfigurationImage.images.poster_sizes[4];
            let pathImagePoster = '';
            let pathImageBackdrop = '';
            let listTabMovies =  getListTabMovies.results.map( (product,index) => {
                pathImagePoster = base_url + poster_sizes + product.poster_path;
                pathImageBackdrop = base_url + poster_sizes + product.backdrop_path;
                return {
                    id : `${product.id}`,
                    original_title: `${product.original_title}`,
                    overview: `${product.overview}`,
                    poster_path: `${pathImagePoster}`,
                    backdrop_path:`${pathImageBackdrop}`,
                    release_date: `${product.release_date}`,
                    vote_average: `${product.vote_average}`,
                    genre_ids: `${product.genre_ids}`
                }
            });
            
            this.setState({
                data : listTabMovies
            });
        });
    }
    __listItemTabMovie = (() =>{
        //console.log('listItemLastMovie::');
        // const base_url = "http://image.tmdb.org/t/p/";
        // const backdrop_sizes = "w300";
        // const configPath = base_url + backdrop_sizes;
        const elementListItemTabMovies = this.state.data.map((product,index) => {
            //console.log(product);

            if(index !== 0 && index < this.state.data.slice(0,9).length ){
                return (
                    <div className="w3l-movie-gride-agile" key = {index}>
                        <Item 
                            id = {product.id} 
                            original_title = {product.original_title}
                            poster_path =  {product.poster_path}
                            backdrop_path = {product.backdrop_path}
                            vote_average =  {product.vote_average}
                            release_date =  {product.release_date}
                            // href = {product.href}
                        />
                    </div>
                )
            }
        });
        //console.log(elementListItemTabMovies);
        return elementListItemTabMovies;
    });
    __itemDetailTabMovie = (()=>{
        const itemDetailTabMovie = this.state.data.map((product,index) => {
            //console.log(product);

            if(index === 0 ){
                return (
                    <ItemDetail 
                            key = {index}
                            id = {product.id} 
                            original_title = {product.original_title}
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
        //console.log(itemDetailRecentMovie);
        return itemDetailTabMovie;
    });
    render() {
        return (
            <React.Fragment>
            <div className={this.props.className}>
                <div className="tab_movies_agileinfo">
                    <div className="w3_agile_featured_movies">
                    <div className="col-md-5 video_agile_player">
                        { this.__itemDetailTabMovie()}
                    </div>
                    <div className="col-md-7 wthree_agile-movies_list">
                        { this.__listItemTabMovie() }
                    </div>
                    <div className="clearfix"> </div>
                    </div>
                    <div className="cleafix" />
                </div>	
            </div>
            </React.Fragment>
        );
    }
}

export default TabItem;