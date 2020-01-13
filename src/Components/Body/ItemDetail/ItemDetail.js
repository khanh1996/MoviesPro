import React, { Component } from 'react';
import './ItemDetail.css';
import Ratting from '../../Ratting/Ratting';
import {genreDataApi} from '../../Services';
class ItemDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            genres : []
        }
    }
    componentDidMount(){
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
            // data truyền sang
            const genre_ids = this.props.genre_ids; 
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
    __listGenres = () => {
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
    __getfomatDate = (release_date) => {
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
          ];
          
        
          var day = release_date.getDate();
          var monthIndex = release_date.getMonth();
          var year = release_date.getFullYear();
          //console.log(monthNames[monthIndex]+ ' ' + day + ',' + year);
        return monthNames[monthIndex]+ ' ' + day + ', ' + year;
    }
    render() {
        const {original_title,poster_path,vote_average,release_date,overview,profile_sizes,still_sizes,backdrop_path } = this.props;
        return (
            <React.Fragment>
                <div className="video-grid-single-page-agileits">
                    <div data-video="f2Z65fobH2I" id="video"> 
                        <img src={poster_path} alt={original_title} className="img-responsive" /> 
                    </div>
                </div>
                <div className="player-text">
                    <div className="fexi_header">{original_title}</div>
                    <div className="fexi_header_para ">
                        <span className="conjuring_w3">Story Line<label>:</label></span>
                        <p className="fix-text-3-line">{overview}</p>
                    </div>
                    <div className="fexi_header_para"><span>Release On<label>:</label></span>{this.__getfomatDate(new Date(release_date))}</div>
                    <div className="fexi_header_para">
                        <span>Genres<label>:</label></span>
                        { this.__listGenres()}
                    </div>
                    
                    <div className="fexi_header_para fexi_header_para1"><span>Star Rating<label>:</label></span>
                        <Ratting vote_average={vote_average} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ItemDetail;