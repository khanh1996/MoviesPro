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
    componentDidUpdate(){
        //console.log('componentDidUpdate::');
        window.tabSlide();
    }
   

    render() {
       
        // display item home page
        return (
            <div>
            <div className="tab1">
                <RespTapContainer tab="recent"/>
            </div>
            <div className="tab2">
            <RespTapContainer tab="recent"/>
            </div>
            </div>            
        );
    }
}

export default TabContainer;