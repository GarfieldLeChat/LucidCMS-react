import React, { Component } from "react";
 
class ContentDisplay extends Component {
  render() {
    return (
      <div>
        <h2>Content Display</h2>
    
          <h1>Select from the sections in the menu to see examples of the frame work</h1>
          
          <h1>Typography</h1>
          
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          
          <p>Paragraph</p>
          <p><strong>Bold</strong></p>
          <p><em>Italic</em></p>
          <p>Lorium <sub>Sub</sub> Ipsum</p>
          <p>Lorium <sup>Super</sup> Ipsum</p>
          <p>&nbsp;</p>
          <table>
          <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
          </tr>    
          <tr>
            <td>Table Row</td>
            <td>Table Row</td>
            <td>Table Row</td>
          </tr>        
          <tr>
            <td>Table Row</td>
            <td>Table Row</td>
            <td>Table Row</td>
          </tr>        
          <tr>
            <td>Table Row</td>
            <td>Table Row</td>
            <td>Table Row</td>
          </tr>      
        </table>
        
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
      </div>
    );
  }
}
 
export default ContentDisplay;