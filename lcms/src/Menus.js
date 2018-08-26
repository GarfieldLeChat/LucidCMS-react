import React, { Component } from "react";
 
class Menus extends Component {
  render() {
    return (
    <div>
        <h2>Responsive Menu and Drop down</h2>

        <nav class="menu">
            <ul class="active clearfix">
                <li class="current-item"><a href="#">Home</a></li>
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 2<span class="arrow">&nbsp;&#9660;</span></a>
                    <ul class="sub-menu">
                        <li><a href="#">Sub Item 1</a></li>
                        <li><a href="#">Sub Item 2</a></li>
                        <li><a href="#">Sub Item 3</a></li>
                        <li><a href="#">Sub Item 4</a></li>
                    </ul>
                </li>
                <li><a href="#">Menu 3</a></li>
                <li><a href="#">Menu 4</a></li>
            </ul>
        
            <a class="toggle-nav" href="#">&#9776;</a>
        
            <form class="search-form">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </form>
        </nav>
        <div class="seperator"></div> 

    </div>
    );
  }
}
 
export default Menus;