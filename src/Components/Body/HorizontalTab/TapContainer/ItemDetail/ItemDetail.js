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
        //console.log(genre_ids);
        const params = {
            'param1'  : 'genre',
            'param2'  : 'movie',
            'param3'  : 'list',
            'language': 'en-US',
        }
        const dataGenreAll = genreDataApi(params);
        // console.log('dataGenre:::');
        // console.log(dataGenre);
        dataGenreAll.then( (response) => {
            // data danh sách thể loại lấy từ api
            const dataGenreAll = response.data.genres;
            //console.log(dataGenreAll);
            //genre_ids : thể loại của một movie
            //dataGenreAll : tất cả các thể loại movie
            var arrayGenres = [];
            const genreOfMovie = genre_ids.split(',');
            for (const elementgenre of genreOfMovie){
                const  element = parseInt(elementgenre);
                //console.log(element);
                for (const elementGenreAll of dataGenreAll){
                   if (element === elementGenreAll.id){
                       arrayGenres.push(elementGenreAll.name);
                   }
                }
            }
            //console.log(arrayGenres);
            this.setState({
                genres : arrayGenres
            });
          
        }).catch(error => console.log(error));
    }
    __listGenres = () =>{
        const elementListGenre = this.state.genres.map( (genre,index) => {
            const lastItem = this.state.genres[this.state.genres.length-1];
            return (
                <a key={index} href="genre.html">{genre}{ lastItem === genre ? '' : ' | '}</a>
            )
        });
        // console.log(elementListGenre);
        return elementListGenre;
    }
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
        const {title,poster_path,vote_average,release_date,overview } = this.props;
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
                        { this.__listGenres()}
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