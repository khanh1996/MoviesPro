import React, { Component } from 'react';
import ItemRequestMovie from '../RequestedMovies/ItemRequestMovies/ItemRequestMovie';
import {dataApi} from '../../Services';

class RequestedMovies extends Component {

    componentDidMount(){
        this.__getListUpcomingMovies();
    }
    __getListUpcomingMovies = () => {
        const params = {
            'param1' : 'movie',
            'param2' : 'upcoming'
        }
        const dataLastMovies = dataApi(params);
        return dataLastMovies;
    }

    render() {
        return (
            <div className="wthree_agile-requested-movies">
                {/* START ITEM REQUEST MOVIES*/ }
                
                {/* END ITEM REQUEST MOVIES*/ }
                <div className="clearfix" />
            </div>
        );
    }
}

export default RequestedMovies;