import React, { Component } from 'react';
import Item from './Item/Item'
import ItemDetail from './ItemDetail/ItemDetail';

import {dataApi} from '../../../Services';
class TabContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data : [],
            taps : ['recent','popularity','topRating']
        };
    }
    componentDidMount(){
        this.getMovieList();
    }
    renderAllTap = ( () => {
         const elementAllTap = this.state.taps.map( (tap,index) => {
            //console.log(tap);
            let classIndexKey = "tab" + (index+1);
            return (
                <div className={classIndexKey} id={tap} key={index}>
                    <div className="tab_movies_agileinfo">
                        <div className="w3_agile_featured_movies">
                            <div className="col-md-5 video_agile_player">
                                {/* start Item Detail  */}
                                {this.listItemDetailPopularMovie()}
                                {/* end Item Detail  */}
                            </div>
                            <div className="col-md-7 wthree_agile-movies_list">
                                {/* start item */}
                                
                                {this.listItemPopularMovie()}
                                {/* end item */}                                                                           
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="cleafix" />
                    </div>	
                </div>
            )
         });
         return elementAllTap;
    }); 
    
    getMovieList = () =>{
        const params = {
            'param1' : 'movie',
            'param2' : 'popular'
        }
        const dataPopularMovies = dataApi(params);
        //console.log(dataRecentMovies);
        dataPopularMovies.then((response)=>{
            const data = response.data.results;
            //console.log(data);
            this.setState({
                data : data
            });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(()=>{
            
        });
        
    }
    shouldComponentUpdate(nextProps, nextState){
        //console.log(this.state.data);
        const oldData = this.state.data;
        const newData = nextState;
        if(oldData !== newData){
            //console.log('1');
            return true;
        }else{
            return false;
        }
    }
    listItemPopularMovie = ( () => {
        const base_url = "http://image.tmdb.org/t/p/";
        const backdrop_sizes = "w300";
        const configPath = base_url + backdrop_sizes;

        const elementItem = this.state.data.map((product,index) => {
            // lấy ra phần tử thứ 0 đến 9 trong mảng _ContentProductList
            //console.log(this._ContentProductList.slice(0,8).length);
            //console.log(product);
            if(index !== 0 && index < this._ContentProductList.slice(0,9).length ){
                return (
                    <Item 
                        key = {index}
                        id = {product.id} 
                        title = {product.title}
                        poster_path =  {configPath + product.poster_path}
                        backdrop_path = { configPath + product.backdrop_path}
                        vote_average =  {product.vote_average}
                        release_date =  {product.release_date}
                        // href = {product.href}
                    />
                )
            }
        });
        return elementItem;
    });
    listItemDetailPopularMovie = (()=>{
        const base_url = "http://image.tmdb.org/t/p/";
        const backdrop_sizes = "w500";
        const configPath = base_url + backdrop_sizes;

        const elementItem = this.state.data.map((product,index) => {
            // lấy ra phần tử thứ 0 đến 9 trong mảng _ContentProductList
            //console.log(this._ContentProductList.slice(0,8).length);
            //console.log(product);
           
            if(index === 0){
                return (
                        <ItemDetail 
                            key = {index}
                            id = {product.id} 
                            title = {product.title}
                            overview = {product.overview}
                            poster_path =  {configPath + product.poster_path}
                            backdrop_path = {configPath + product.backdrop_path}
                            vote_average =  {product.vote_average}
                            release_date =  {product.release_date}
                            genre_ids = {product.genre_ids}
                        />
                )
            }
        });
        return elementItem;
    });

    _ContentProductList = [
        {
            id: "1",
            image: "assets/images/11.jpg",
            name: "Force 1",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2016",
            category: "Drama |Adventure |Family",
            ratting: 3.5,
            year: 2016,
            href: "Force.html",
        },
        {
            id: "2",
            image: "assets/images/m1.jpg",
            name: "Swiss Army Man",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2016",
            category: "Comedy |Horror |Family",
            ratting: 2.5,
            year: 2016,
            href: "SwissArmyMan.html"
        },
        {
            id: "3",
            image: "assets/images/m2.jpg",
            name: "Me Before you",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2013",
            category: "Comedy |Horror |Family",
            ratting: 2,
            year: 2013,
            href: "MeBeforeYou.html"
        },
        {
            id: "4",
            image: "assets/images/m3.jpg",
            name: "Deadpool",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2019",
            category: "Comedy |Horror |Family",
            ratting: 4.5,
            year: 2019,
            href:"Deadpool.html"
        },
        {
            id: "5",
            image: "assets/images/m4.jpg",
            name: "Rogue One",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2015",
            category: "Comedy |Horror |Family",
            ratting: 3,
            year: 2015,
            href:"RogueOne.html"
        },
        {
            id: "6",
            image: "assets/images/m7.jpg",
            name: "Mechanic",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2015",
            category: "Comedy |Horror |Family",
            ratting: 4,
            year: 2015,
            href: "Mechanic.html"
            
        },
        {
            id: "7",
            image: "assets/images/m6.jpg",
            name: "Hopeless",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2015",
            category: "Comedy |Horror |Family",
            ratting: 2.5,
            year: 2015,
            href: "Hopeless.html"
        },
        {
            id: "8",
            image: "assets/images/m5.jpg",
            name: "Storks",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2015",
            category: "Comedy |Horror |Family",
            ratting: 3,
            year: 2015,
            href: "Storks.html"
        },
        {
            id: "9",
            image: "assets/images/m8.jpg",
            name: "Timeless",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2011",
            category: "Comedy |Horror |Family",
            ratting: 3,
            year: 2011,
            href: "Timeless.html"
        },
        {
            id: "10",
            image: "assets/images/m11.jpg",
            name: "Warcraft",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2019",
            category: "Comedy |Horror |Family",
            ratting: 3,
            year: 2019,
            href: "Warcraft.html"
        },
        {
            id: "11",
            image: "assets/images/m14.jpg",
            name: "Rambo 4",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2019",
            category: "Comedy |Horror |Family",
            ratting: 3.5,
            year: 2019,
            href: "Rambo_4.html"
        },
        {
            id: "12",
            image: "assets/images/m9.jpg",
            name: "Inferno",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2019",
            category: "Comedy |Horror |Family",
            ratting: 3.5,
            year: 2019,
            href: "Inferno.html"
        },
        {
            id: "13",
            image: "assets/images/m10.jpg",
            name: "Now You See Me 2",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2019",
            category: "Comedy |Horror |Family",
            ratting: 2,
            year: 2019,
            href: "NowYouSeeMe2.html"
        },
        {
            id: "14",
            image: "assets/images/m12.jpg",
            name: "Money Monster",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2019",
            category: "Comedy |Horror |Family",
            ratting: 3,
            year: 2019,
            href: "MoneyMonster.html"
        },
        {
            id: "15",
            image: "assets/images/m13.jpg",
            name: "Ghostbuster",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2019",
            category: "Comedy |Horror |Family",
            ratting: 2.5,
            year: 2015,
            href: "Ghostbuster.html"
        },
        {
            id: "16",
            image: "assets/images/m15.jpg",
            name: "RoboCop",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2019",
            category: "Comedy |Horror |Family",
            ratting: 1.5,
            year: 2017,
            href: "RoboCop.html"
        },
        {
            id: "17",
            image: "assets/images/m13.jpg",
            name: "X-Men",
            desc: "Presenting the official trailer of Force 2 starring John Abraham, Sonakshi Sinha and Tahir Raj BhasinA film by Abhinay Deo, Produced by Vipul Amrutlal Shah, JA entertainment Pvt. Ltd....",
            release:  "Sep 29, 2019",
            category: "Comedy |Horror |Family",
            ratting: 4.5,
            year: 2018,
            href: "X-Men.html"
        }
    ]
    

    // display item detail home page
    // elememtItemDetail = this._ContentProductList.map((product, index) => {

    //     if(index === 0){
    //         return (
    //                 <ItemDetail 
    //                     key = {product.id} 
    //                     name = {product.name}
    //                     image =  {product.image}
    //                     desc = {product.desc}
    //                     release = {product.release}
    //                     category =  {product.category}
    //                     ratting =  {product.ratting}

    //                 />
    //         )
    //     }
        
    // });

    render() {
        //console.log(this.state.data);
        // display item home page
        return (
            <div className="resp-tabs-container">
                {this.renderAllTap()}
                <div className="tab1">
                    <div className="tab_movies_agileinfo">
                        <div className="w3_agile_featured_movies">
                            <div className="col-md-5 video_agile_player">
                                {/* start Item Detail  */}
                                {/* {this.elememtItemDetail} */}
                                {/* end Item Detail  */}
                            </div>
                            <div className="col-md-7 wthree_agile-movies_list">
                                {/* start item */}
                                
                                {/* {this.elementItem} */}
                                {/* end item */}                                                                           
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="cleafix" />
                    </div>	
                </div>
                <div className="tab2">
                    <div className="tab_movies_agileinfo">
                        <div className="w3_agile_featured_movies">
                            <div className="col-md-5 video_agile_player">
                                {/* start Item Detail  */}
                                {this.listItemDetailPopularMovie()}
                                {/* end Item Detail  */}
                            </div>
                            <div className="col-md-7 wthree_agile-movies_list">
                                {/* start item */}
                                {this.listItemPopularMovie()}
                                {/* end item */}
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="cleafix" />
                    </div>	
                </div>
                <div className="tab3">
                    <div className="tab_movies_agileinfo">
                    <div className="w3_agile_featured_movies">
                        <div className="col-md-5 video_agile_player">
                        <div className="video-grid-single-page-agileits">
                            <div data-video="BXEZFd0RT5Y" id="video2"> <img src="assets/images/44.jpg" alt="" className="img-responsive" /> </div>
                        </div>
                        <div className="player-text">
                            <p className="fexi_header">Storks </p>
                            <p className="fexi_header_para"><span className="conjuring_w3">Story Line<label>:</label></span>Starring: Andy Samberg, Jennifer Aniston, Ty Burrell Storks Official Trailer 3 (2016) - Andy Samberg Movie the company's top delivery stork, lands in hot water when the Baby Factory produces an adorable....... </p>
                            <p className="fexi_header_para"><span>Release On<label>:</label></span>Aug 1, 2016 </p>
                            <p className="fexi_header_para">
                            <span>Genres<label>:</label> </span>
                            <a href="genre.html">Drama</a> | 
                            <a href="genre.html">Adventure</a> | 
                            <a href="genre.html">Family</a>								
                            </p>
                            <p className="fexi_header_para fexi_header_para1"><span>Star Rating<label>:</label></span>
                            <a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a>
                            <a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a>
                            <a href="index.html"><i className="fa fa-star-half-o" aria-hidden="true" /></a>
                            <a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a>
                            <a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a>
                            </p>
                        </div>
                        </div>
                        <div className="col-md-7 wthree_agile-movies_list">
                            <div className="w3l-movie-gride-agile">
                                <a href="single.html" className="hvr-sweep-to-bottom"><img src="assets/images/m8.jpg" title="Movies Pro" className="img-responsive" alt=" " />
                                <div className="w3l-action-icon"><i className="fa fa-play-circle-o" aria-hidden="true" /></div>
                                </a>
                                <div className="mid-1 agileits_w3layouts_mid_1_home">
                                <div className="w3l-movie-text">
                                    <h6><a href="single.html">Timeless</a></h6>							
                                </div>
                                <div className="mid-2 agile_mid_2_home">
                                    <p>2016</p>
                                    <div className="block-stars">
                                    <ul className="w3l-ratings">
                                        <li><a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                        <li><a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                        <li><a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                                        <li><a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                                        <li><a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                                    </ul>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                </div>
                                <div className="ribben">
                                <p>NEW</p>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="cleafix" />
                    </div>	
                </div>
            </div>
        );
    }
}

export default TabContainer;