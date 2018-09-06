import React, { Component } from 'react';

import { Route, NavLink, HashRouter } from 'react-router-dom';

import Accordion from './Accordion';
import Carousel from './Carousel';
import ContentDisplay from './HTMLElements/ContentDisplay';
import Forms from './Forms';
import Home from './Home';
import ImageUploaderPositioner from './ImageUploaderPositioner';
import Menus from './Menus';
import PromoImageUploaderPositioner from './PromoImageUploaderPositioner';
import TabIndex from './TabsIndex';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Lucid CMS - React</h1>
          <nav className="menu">
            <ul className="active clearfix">
              <li className="current-item"><NavLink to="/">Home</NavLink></li>
              <li><NavLink exact to="/content-display">HTMLContent Display/Typography</NavLink></li>
              <li><NavLink to="/tabs">Tabs</NavLink></li>
              <li><NavLink to="/accordion">Accordion</NavLink></li>
              <li><NavLink to="/forms">Forms</NavLink></li>
              <li><NavLink to="/menus">Menus</NavLink></li>
              <li><NavLink to="/carousel">Carousel</NavLink></li>
              <li><NavLink to="/image-uploader-positioner">Image uploader</NavLink></li>
              <li><NavLink to="/promo-image-uploader-positioner">Promo Roundels</NavLink></li>
            </ul>

            <a className="toggle-nav" href="">&#9776;</a>

            {/*  -- React formm to add in here -- 
                            -- make generic form for entire SearchForm.js build as single componet and reuse -- */}

            <form className="search-form">
              <input type="text" placeholder="Search..." />
              <button>Search</button>
            </form>
          </nav>

          <div className="seperator" />

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/content-display" component={ContentDisplay} />
            <Route path="/tabs" component={TabIndex} />
            <Route path="/accordion" component={Accordion} />
            <Route path="/forms" component={Forms} />
            <Route path="/menus" component={Menus} />
            <Route path="/carousel" component={Carousel} />
            <Route path="/image-uploader-positioner" component={ImageUploaderPositioner} />
            <Route path="/promo-image-uploader-positioner" component={PromoImageUploaderPositioner} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
