import React, { Component } from 'react';
import Item from './Item/Item'
import ItemDetail from './ItemDetail/ItemDetail';

import {dataApi} from '../../../Services';
import {getConfiguration} from '../../../Services';
import RespTapContainer from './RespTapContainer/RespTapContainer';
class TabContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            taps : ['recent','popularity','topRating']
        };
    }
    // elementTap = this.state.taps.map((tap,index) => {
    //     console.log(tap);
    // });
   

    render() {
       
        // display item home page
        return (
            
            <div className="resp-tabs-container">
                <RespTapContainer tab="recent"/>
                <RespTapContainer tab="popularity"/>
                <RespTapContainer tab="top_rating"/>
            </div>
        );
    }
}

export default TabContainer;