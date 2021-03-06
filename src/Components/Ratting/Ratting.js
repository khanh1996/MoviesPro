import React, { Component } from 'react';

class Ratting extends Component {
    renderRatting = () => {
        const vote_average = this.props.vote_average/2;
        //console.log(vote_average);
        var arr = [];
        for(let i = 1 ; i <= 5; i++){
            if(i <= vote_average){
                arr.push(<li key={i} ><a href="index.html"><i className="fa fa-star" aria-hidden="true" /> </a></li>)   
            }
            else{ 
                if(vote_average > i - 1){
                    arr.push(<li key={i}><a  href="index.html"><i className="fa fa-star-half-o" aria-hidden="true" /> </a></li>)   
                }else{
                    arr.push(<li key={i}><a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /> </a></li>)   
                }
            }
        }
        //console.log(arr);
        return arr ;
        
    }
    
    render() {
        var { vote_average } = this.props;
        return (
            
            <ul className="w3l-ratings">
                { this.renderRatting(vote_average) }
                {/* <li><a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a></li>
                <li><a href="index.html"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li> */}
            </ul>
        );
    }
}

export default Ratting;