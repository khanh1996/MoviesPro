import React, { Component } from 'react';
import {dataApi} from '../../../../Services';
class ItemDetail extends Component {
    
    listGenres = ( () => {
        const params = {
            'param1' : 'genre/movie',
            'param2' : 'list'
        }
        const dataPopularMovies = dataApi(params);
        //console.log(dataPopularMovies);
        dataPopularMovies.then( (response) => {
            const data = response.data.genres;
            console.log(data);
        });
    }); 
    render() {
        console.log('render:::');
        this.listGenres();
        // function showRatting(ratting) {
        //     //console.log(ratting);
        //     var arr = [];
        //     for(let i = 1 ; i <= 5; i++){
        //         if(i <= ratting){
        //             arr.push(<a key={i} href="index.html"><i className="fa fa-star" aria-hidden="true" /> </a>)   
        //         }
        //         else{
        //             if( i-0.5 === ratting){
        //                 arr.push(<a key={i} href="index.html"><i className="fa fa-star-half-o" aria-hidden="true" /> </a>)   
        //             }else{
        //                 arr.push(<a key={i} href="index.html"><i className="fa fa-star-o" aria-hidden="true" /> </a>)   
        //             }
        //         }
        //     }
        //     //console.log(arr);
        //     return arr ;
        // }

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
        const {id,title,poster_path,vote_average,release_date,overview, genre_ids } = this.props
        //console.log(genre_ids);
        return (
            
            <div>
                <div className="video-grid-single-page-agileits">
                    <div data-video="f2Z65fobH2I" id="video"> 
                        <img src={poster_path} alt={title} className="img-responsive" /> 
                    </div>
                </div>
                
                <div className="player-text">
                    <p className="fexi_header">{title}</p>
                    <p className="fexi_header_para"><span className="conjuring_w3">Story Line<label>:</label></span>{overview}</p>
                    <p className="fexi_header_para"><span>Release On<label>:</label></span>{release_date}</p>
                    {/* <p className="fexi_header_para">
                        <span>Genres<label>:</label> </span>
                        Show category movies home page
                        {showCategory(this.props.category)}
                        <a href="genre.html">Drama</a> | 
                        <a href="genre.html">Adventure</a> | 
                        <a href="genre.html">Family</a>
                    </p> */}
                    <p className="fexi_header_para">
                        <span>Genres<label>:</label> </span>
                        <a href="genre.html">Drama</a> | 
                        <a href="genre.html">Adventure</a> | 
                        <a href="genre.html">Family</a>								
                    </p>
                    <p className="fexi_header_para fexi_header_para1"><span>Star Rating<label>:</label></span>
                    {/* Show ratting home page */}
                    {/* {showRatting(this.props.ratting)} */}
                
                    
                    {/* <a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a>
                    <a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a>
                    <a href="index.html"><i className="fa fa-star-half-o" aria-hidden="true" /></a>
                    <a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a>
                    <a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a> */}
                    </p>
                </div>
            </div>
        );
    }
}

export default ItemDetail;