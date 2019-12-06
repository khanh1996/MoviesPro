import React, { Component } from 'react';
import ItemRequestMovie from '../RequestedMovies/ItemRequestMovies/ItemRequestMovie';

class RequestedMovies extends Component {

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
    // display item request movies .reverse()
    elememtItemRequestMovie = this._ContentProductList.map((product, index) => {
        
        if(index < this._ContentProductList.slice(0,11).length && product.name !== "Force 1"){
            return (
                <ItemRequestMovie
                    key = {index} 
                    name = {product.name}
                    image =  {product.image}
                    ratting =  {product.ratting}
                    year =  {product.year}
                    href = {product.href}
                />
            )
        }
    });

    render() {
        return (
            <div className="wthree_agile-requested-movies">
                {/* START ITEM REQUEST MOVIES*/ }
                {this.elememtItemRequestMovie}
                {/* END ITEM REQUEST MOVIES*/ }
                <div className="clearfix" />
            </div>
        );
    }
}

export default RequestedMovies;