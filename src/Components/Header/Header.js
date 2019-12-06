import React, { Component } from 'react';

import Nav from './Navigation/Nav';
import Search from './Search/Search';
import BannerInfo from './BannerInfo/BannerInfo';
class Header extends Component {
    render() {
        return (
                /*/main-header*/ 
                /*/banner-section*/
                <div id="demo-1" data-zs-src='[&quot;assets/images/1.jpg&quot;, &quot;assets/images/2.jpg&quot;, &quot;assets/images/3.jpg&quot;,&quot;assets/images/4.jpg&quot;]' data-zs-overlay="dots">
                    <div className="demo-inner-content">
                        {/*/header-w3l*/}
                        <div className="header-w3-agileits" id="home">
                            <div className="inner-header-agile">
                                {/* Navigation Header */}
                                <Nav/>	
                                {/* Search Header  */}
                                <Search/>
                            </div> 
                        </div>
                        {/*//header-w3l*/}
                        {/*/banner-info*/}
                        <BannerInfo/>
                        {/*/banner-ingo*/}		
                    </div>
                </div>
                /*/banner-section*/
                /*//main-header*/

        );
    }
}


export default Header;
