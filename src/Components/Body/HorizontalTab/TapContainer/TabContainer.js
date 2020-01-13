import React, { Component } from 'react';
import TabItemRecent from './TabItemRecent';
import TabItemPopularity from './TabItemPopularity';
import TabItemTopRating from './TabItemTopRating';
import TabItem from './TabItem';

class TabContainer extends Component {
    __arrTab = () => {
        var arrTab = [
            {
                key  : 1,
                name : 'now_playing'
            },
            {
                key  : 2,
                name : 'popular'
            },
            {
                key  : 3,
                name : 'top_rated'
            }
        ]
        return arrTab;
    }
    
    __renderTab = () => {
      const getArrTab = this.__arrTab();
      const arrItemTab = [];
      if(Array.isArray(getArrTab)){
        for (let i = 0; i < getArrTab.length; i++) {
            const name = getArrTab[i].name;
            const key = "tab"+getArrTab[i].key;
            //console.log(key);
            arrItemTab.push(<TabItem key={i} className={key} name={name}/>);
        }
      }
      //console.log(arrItemTab);
      return arrItemTab;
    }
    render() {
        return (
            <div className="resp-tabs-container">
                {/* <TabItemRecent/>
                <TabItemPopularity/>
                <TabItemTopRating/> */}
                { this.__renderTab() }
            </div>
        );
    }
}

export default TabContainer;