import React, { Component } from 'react';
import {dataApi} from '../../../../Services';
import './ItemDetail.css';
import Ratting from '../../../../Ratting/Ratting';
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
            'param1' : 'genre/movie',
            'param2' : 'list'
        }
        const dataPopularMovies = dataApi(params);
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
            //console.log(genres);
            this.setState({
                genres : genres
            });
        }).catch(error => console.log(error));
    }
    renderGenres = () => {
        const elementGenres =  this.state.genres.map((genre,index)=>{
            // lấy ra phần tử cuối cùng
            const lastItem = this.state.genres[this.state.genres.length-1];
            
            return (
                <a key={index} href="genre.html">{genre}{ lastItem === genre ? '' : ' | '}</a>
            )
        });
        return elementGenres;
    }
    render() {
        console.log('render:::');
        const {id,title,poster_path,backdrop_path,vote_average,release_date,overview } = this.props;
        //console.log(overview);
        //console.log(genre_ids);
        // this.listGenres(genre_ids);
        function showRatting(ratting) {
            //console.log(ratting);
            var arr = [];
            for(let i = 1 ; i <= 5; i++){
                if(i <= ratting){
                    arr.push(<a key={i} href="index.html"><i className="fa fa-star" aria-hidden="true" /> </a>)   
                }
                else{
                    if( i-0.5 === ratting){
                        arr.push(<a key={i} href="index.html"><i className="fa fa-star-half-o" aria-hidden="true" /> </a>)   
                    }else{
                        arr.push(<a key={i} href="index.html"><i className="fa fa-star-o" aria-hidden="true" /> </a>)   
                    }
                }
            }
            //console.log(arr);
            return arr ;
        }

        function showCategory(category) {
            let string = category;
            //console.log(string.split(" |"));
            let lenghtCategory = string.split("  ").length;   
            var arr = [];
            for(let i=0; i < lenghtCategory; i++){
                arr.push(<a key={i} href="genre.html">{string.split("  ")[i]}</a>);
           }
           //console.log(arr[0]);
           return arr;
        }
        
        
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