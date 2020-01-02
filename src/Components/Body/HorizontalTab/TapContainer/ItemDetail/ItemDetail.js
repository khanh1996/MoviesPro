import React, { Component } from 'react';
import './ItemDetail.css';
import Ratting from '../../../../Ratting/Ratting';
import {genreDataApi} from '../../../../Services';
class ItemDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            genres : []
        }
    }
    
    componentDidMount(){
        // data truyền sang
        const genre_ids = this.props.genre_ids;
        const params = {
            'param1'  : 'genre',
            'param2'  : 'movie',
            'param3'  : 'list',
            'language': 'en-US',
        }
        const dataPopularMovies = genreDataApi(params);
        //console.log('dataPopularMovies:::');
        //console.log(dataPopularMovies);
        dataPopularMovies.then( (response) => {
            // data danh sách thể loại lấy từ api
            const dataGenres = response.data.genres;
            //console.log(dataGenres);
            //console.log(genre_ids);
            var genres = [];
            for (const elementGenre of genre_ids) {
                for (const element of dataGenres) {
                   if (elementGenre === element.id){
                        genres.push(element.name);
                   }
                }
            }
            // console.log(genres);
            this.setState({
                genres : genres
            });
        }).catch(error => console.log(error));
    }
    // componentDidMount(){
    //     this.__promisAll();
    // }
    // __getListGenres = () => {
    //     const params = {
    //         'param1'  : 'genre',
    //         'param2'  : 'movie',
    //         'param3'  : 'list',
    //         'language': 'en-US',
    //     }
    //     const dataGenres = genreDataApi(params);
    //     return dataGenres;
    // }
    // __promisAll = () => {
    //     const getListGenre= this.__getListGenres();
    //     const combinePromise = Promise.all([getListGenre]);
    //     combinePromise.then((values)=>{
    //         const getListGenre = values[0].data;
    //         //console.log(getListGenre.genres);
    //         console.log(this.props.genre_ids);
    //         var arrGenreShow = [];
    //         let listGenres = getListGenre.genres.map((genres,index) => {
    //             if(this.props.genre_ids){
    //                 const arrGenre =  this.props.genre_ids.split(",");
    //                 for (const elementGenre of arrGenre) {
    //                     if(parseInt(elementGenre) === genres.id){
    //                         arrGenreShow.push(genres.name);
    //                     }
    //                 }
    //             }
    //         });
    //         console.log(arrGenreShow);
    //         this.setState({
    //             genres : arrGenreShow
    //         });
    //     });
    // }
    shouldComponentUpdate(nextProps, nextState){
        
        //console.log('shouldComponentUpdate::');
        //console.log(this.state.data);
        
        const oldData = this.state.genres;
        const newData = nextState;
        if(oldData !== newData){
            //console.log('1');
            return true;
            
        }else{
            //console.log('2');
            return false;
        }
    }
    renderGenres = () => {
        

            // for (const elementGenre of genresApi) {
            //     for (const element of dataGenres) {
            //        if (elementGenre === element.id){
            //             genres.push(element.name);
            //        }
            //     }
            // }
        // const elementGenres =  this.state.genres.map((genre,index) => {
        //     // lấy ra phần tử cuối cùng
        //     const lastItem = this.state.genres[this.state.genres.length-1];
            
        //     return (
        //         <a key={index} href="genre.html">{genre}{ lastItem === genre ? '' : ' | '}</a>
        //     )
        // });
    }
    
    // renderGenres = () => {
    //     console.log('genre_id:::::::::::');
    //     console.log(this.props.genre_ids);
    //     const elementGenres =  this.state.genres.map((genre,index)=>{
    //         // lấy ra phần tử cuối cùng
    //         const lastItem = this.state.genres[this.state.genres.length-1];
            
    //         return (
    //             <a key={index} href="genre.html">{genre}{ lastItem === genre ? '' : ' | '}</a>
    //         )
    //     });
    //     return elementGenres;
    // }
    render() {
        //console.log('render:::');
        const {title,poster_path,vote_average,release_date,overview } = this.props;
        //console.log(overview);
        //console.log(genre_ids);
        // this.listGenres(genre_ids);

        // function showCategory(category) {
        //     let string = category;
        //     //console.log(string.split(" |"));
        //     let lenghtCategory = string.split("  ").length;   
        //     var arr = [];
        //     for(let i=0; i < lenghtCategory; i++){
        //         arr.push(<a key={i} href="genre.html">{string.split("  ")[i]}</a>);
        //    }
        //    //console.log(arr[0]);
        //    return arr;
        // }
        
        
        return (
            <div>
                <div className="video-grid-single-page-agileits">
                    <div data-video="f2Z65fobH2I" id="video"> 
                        <img src={poster_path} alt={title} className="img-responsive" /> 
                    </div>
                </div>
                <div className="player-text">
                    <div className="fexi_header">{title}</div>
                    <div className="fexi_header_para fix-text-3-line">
                        <span className="conjuring_w3">Story Line<label>:</label></span>
                        {overview}
                    </div>
					<div className="fexi_header_para"><span>Release On<label>:</label></span>{release_date} </div>
                    <div className="fexi_header_para">
                        <span>Genres<label>:</label></span>
                        {/* {this.renderGenres()}							 */}
                        {this.renderGenres()}
                    </div>
                    
                    <div className="fexi_header_para fexi_header_para1"><span>Star Rating<label>:</label></span>
                        <Ratting vote_average={vote_average} />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDetail;