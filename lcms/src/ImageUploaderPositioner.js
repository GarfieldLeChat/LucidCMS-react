import React, { Component } from "react";
 
class ImageUploaderPositioner extends Component {
  render() {
    return (
    <div>
        <h2>ImageUploaderPositioner</h2>

        {/* Divide content area into 2 */}
        <div class="content-50"> 
            {/* Content Image */}
            <div class="content-image-holder">
                <div id="preview" >
                    <p class="holdingText">Add Image or Video</p>
                </div>
                
                {/* Returned Data on Submit */} 

                {/* Image Data */}
                <div id="data" class="uploadedDataImage">
                    <h1>The filename is: <span id="name"></span></h1>
                    <p>The file size is: <span id="size"></span></p>
                    <p>The file type is: <span id="type"></span></p>
                    <p>The file is for : <span id="fileLocation"></span></p>
                    <p>The container CSS is: <span id="slideTextContainerStyle"></span></p>
                    <p>The background CSS: <span id="slideTextContainerBGStyle"></span></p>
                    <h2>The Title: <span id="slideTitleTextOutput"></span></h2>
                    <p>The Title CSS: <span id="slideTitleTextStyle"></span></p>
                    <h3>The Sub Title: <span id="slideSubTitleTextOutput"></span></h3>
                    <p>The Sub Title CSS: <span id="slideSubTitleTextStyle"></span></p>
                    <h4>The Link Text: <span id="slideLinkTextOutput"></span></h4>
                    <p>The file link is: <span id="slideLinkUrlStyle"></span></p>
                    <p>The Link CSS: <span id="slideLinkTextStyle"></span></p>
                </div>

                {/* Video Data */}
                <div id="data-vid" class="uploadedDataVideo">
                    <h1>The filename is: <span id="name-vid"></span></h1>
                    <p>The file size is: <span id="size-vid"></span></p>
                    <p>The file type is: <span id="type-vid"></span></p>
                    <p>The file is for : <span id="vid-fileLocation"></span></p>
                    <p>The container CSS is: <span id="vid-slideTextContainerStyle"></span></p>
                    <p>The background CSS: <span id="vid-slideTextContainerBGStyle"></span></p>
                    <h2>The Title: <span id="vid-slideTitleTextOutput"></span></h2>
                    <p>The Title CSS: <span id="vid-slideTitleTextStyle"></span></p>
                    <h3>The Sub Title: <span id="vid-slideSubTitleTextOutput"></span></h3>
                    <p>The Sub Title CSS: <span id="vid-slideSubTitleTextStyle"></span></p>
                    <h4>The Link Text: <span id="vid-slideLinkTextOutput"></span></h4>
                    <p>The file link is: <span id="vid-slideLinkUrlStyle"></span></p>
                    <p>The Link CSS: <span id="vid-slideLinkTextStyle"></span></p>
                </div>
            </div>
        </div>
  {/* Slide Elements */}
  <div class="content-50">
    <h3>Slide Elements</h3>
    <div class="formContainer">
      <form action="#" method="post" class="form" id="uploader">
        <div class="accordion"> 
          {/* Form Section */}
          <hr />
          {/* Slide Type */} 
          <a class="accordion-section-title default active" href="#SideType">
          <div class="formElement">
            <div class="formLabel">
              <label class="label label-file" for="file" form="">Type of Slide</label>
            </div>
            <div class="formItem"></div>
          </div>
          </a>
          <hr />
          <div id="SideType" class="accordion-section-content open">
            <div class="formElement">
              <div class="formLabel">
                <label class="label label-select-box" for="select-box">Slide For:</label>
              </div>
              <div class="formItem">
                <select id="slide-select-box" name="select-box" class="select-box chosen-select">
                  <option value="0" data-attribute="option-0" class="option" disabled selected>Please Select</option>
                  <option value="carousel" data-attribute="carousel" class="option">Carousel</option>
                  <option value="banner" data-attribute="banner" class="option">Banner</option>
                  <option value="content-spot" data-attribute="content-spot" class="option">Content Spot</option>
                </select>
              </div>
            </div>
          </div>
          {/* File upload */}
          <hr />
          <a class="accordion-section-title default" href="#FileUploadObject">
          <div class="formElement">
            <div class="formLabel">
              <label class="label label-file" for="file" form="">File Upload</label>
            </div>
            <div class="formItem"></div>
          </div>
          </a>
          <hr />
          <div id="FileUploadObject" class="accordion-section-content">
            <div class="formElement">
              <div class="formLabel">
                <label class="label label-select-box" for="select-box">File Type:</label>
              </div>
              <div class="formItem">
                <select id="file-type-select-box" name="file-type-select-box" class="select-box chosen-select">
                  <option value="0" data-attribute="option-0" class="option" disabled selected>Please Select</option>
                  <option value="image" data-attribute="image" class="option">Image</option>
                  <option value="video" data-attribute="video" class="option">Video</option>
                </select>
              </div>
            </div>
            <div class="formElement imageFile">
              <div class="formLabel">
                <label class="label label-file" for="file" form="">Image Upload</label>
              </div>
              <div class="formItem">
                <input id="uploadImage" class="uploadImage" placeholder="Choose Image" disabled="disabled"/>
                <div class="fileUpload button"> <span>Select</span>
                  <input id="photoUpload" name="photoUpload" class="photoUpload" type="file"/>
                </div>
              </div>
            </div>
            <div class="formElement videoFile">
              <div class="formLabel">
                <label class="label label-file" for="file" form="">Video Upload</label>
              </div>
              <div class="formItem">
                <input id="uploadVideo" class="uploadVideo" placeholder="Choose Video" disabled="disabled"/>
                <div class="fileUpload button"> <span>Select</span>
                  <input id="videoUpload" name="videoUpload" class="videoUpload" type="file"/>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Text */}
          <hr />
          <a class="accordion-section-title default" href="#SlideText">
          <div class="formElement">
            <div class="formLabel">
              <label class="label label-file" for="file" form="">Slide Text</label>
            </div>
            <div class="formItem"></div>
          </div>
          </a>
          <hr />

          {/* Title */}
          <div id="SlideText" class="accordion-section-content">
            <div class="formElement">
              <div class="formLabel">
                <label class="label label-text" for="text" form="">Title</label>
              </div>
              <div class="formItem">
                <input id="title" name="text" class="text" type="text" placeholder="Please input text"/>
              </div>
              <ul class="fontOptionsList">
                <li> 

                  {/* Font Size */}
                  <div class="formLabel">
                    <label class="label label-select-box" for="select-box">Font Size</label>
                  </div>
                  <div class="formItem">
                    <select id="title-font-size-select-box" name="select-box" class="select-box chosen-select">
                      <option value="0" data-attribute="option-0" class="option" disabled selected>Please Select</option>
                      <option value="heading1" data-attribute="heading1" class="option">Heading 1</option>
                      <option value="heading2" data-attribute="heading2" class="option">Heading 2</option>
                      <option value="heading3" data-attribute="heading3" class="option">Heading 3</option>
                      <option value="heading4" data-attribute="heading4" class="option">Heading 4</option>
                      <option value="heading5" data-attribute="heading5" class="option">Heading 5</option>
                      <option value="heading6" data-attribute="heading6" class="option">Heading 6</option>
                      <option value="paragraph" data-attribute="paragraph" class="option">Paragraph</option>
                    </select>
                  </div>
                </li>
                <li> 

                  {/* Font Colour */}
                  <div class="formLabel">
                    <label class="label label-colorJS" for="titleColor" form="">Title Text Colour</label>
                  </div>
                  <div class="formItem">
                    <input id="titleColor" name="titleColor" class="colorJS" type="text"/>
                  </div>
                  <p id="title-log"></p>
                </li>
                <li> 

                  {/* Font Family */}
                  <div class="formLabel">
                    <label class="label label-select-box" for="select-box">Font</label>
                  </div>
                  <div class="formItem">
                    <select id="title-font-select-box" name="select-box" class="select-box chosen-select">
                      <option value="0" data-attribute="option-0" class="option" disabled selected>Please Select</option>
                      <option value="baskervilleItalic" data-attribute="baskervilleItalic" class="option">Baskerville Italic</option>
                      <option value="baskervilleMedium" data-attribute="baskervilleMedium" class="option">Baskerville Medium</option>
                      <option value="baskervilleMediumItalic" data-attribute="baskervilleMediumItalic" class="option">Baskerville Medium Italic</option>
                      <option value="itcAvantGardeGothicBold" data-attribute="itcAvantGardeGothicBold" class="option">ITC AvantGardeGothic Bold</option>
                      <option value="itcAvantGardeGothicBook" data-attribute="itcAvantGardeGothicBook" class="option">ITC AvantGardeGothic Book</option>
                      <option value="itcAvantGardeGothicDemi" data-attribute="itcAvantGardeGothicDemi" class="option">ITC AvantGardeGothic Demi</option>
                      <option value="itcAvantGardeGothicMedium" data-attribute="itcAvantGardeGothicMedium" class="option">ITC AvantGardeGothic Medium</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>

            {/* Sub Title */}
            <div class="formElement">
              <div class="formLabel">
                <label class="label label-text" for="text" form="">Sub Title Text</label>
              </div>
              <div class="formItem">
                <input id="subText" name="text" class="text" type="text" placeholder="Please input text"/>
              </div>

              <ul class="fontOptionsList">
                <li> {/* Font Size */}
                  <div class="formLabel">
                    <label class="label label-select-box" for="select-box">Font Size</label>
                  </div>
                  <div class="formItem">
                    <select id="subtitle-font-size-select-box" name="select-box" class="select-box chosen-select">
                      <option value="0" data-attribute="option-0" class="option" disabled selected>Please Select</option>
                      <option value="heading1" data-attribute="heading1" class="option">Heading 1</option>
                      <option value="heading2" data-attribute="heading2" class="option">Heading 2</option>
                      <option value="heading3" data-attribute="heading3" class="option">Heading 3</option>
                      <option value="heading4" data-attribute="heading4" class="option">Heading 4</option>
                      <option value="heading5" data-attribute="heading5" class="option">Heading 5</option>
                      <option value="heading6" data-attribute="heading6" class="option">Heading 6</option>
                      <option value="paragraph" data-attribute="paragraph" class="option">Paragraph</option>
                    </select>
                  </div>
                </li>
                <li> 
                  {/* Font Colour */}
                  <div class="formLabel">
                    <label class="label label-colorJS" for="subTitleColor" form="">Sub Title Colour</label>
                  </div>
                  <div class="formItem">
                    <input id="subTitleColor" name="subTitleColor" class="colorJS" type="text"/>
                  </div>
                  <p id="subtitle-log"></p>
                </li>
                <li> 
                    
                  {/* Font Family */}
                  <div class="formLabel">
                    <label class="label label-select-box" for="select-box">Font</label>
                  </div>
                  <div class="formItem">
                    <select id="subtitle-font-select-box" name="select-box" class="select-box chosen-select">
                      <option value="0" data-attribute="option-0" class="option" disabled selected>Please Select</option>
                      <option value="baskervilleItalic" data-attribute="baskervilleItalic" class="option">Baskerville Italic</option>
                      <option value="baskervilleMedium" data-attribute="baskervilleMedium" class="option">Baskerville Medium</option>
                      <option value="baskervilleMediumItalic" data-attribute="baskervilleMediumItalic" class="option">Baskerville Medium Italic</option>
                      <option value="itcAvantGardeGothicBold" data-attribute="itcAvantGardeGothicBold" class="option">ITC AvantGardeGothic Bold</option>
                      <option value="itcAvantGardeGothicBook" data-attribute="itcAvantGardeGothicBook" class="option">ITC AvantGardeGothic Book</option>
                      <option value="itcAvantGardeGothicDemi" data-attribute="itcAvantGardeGothicDemi" class="option">ITC AvantGardeGothic Demi</option>
                      <option value="itcAvantGardeGothicMedium" data-attribute="itcAvantGardeGothicMedium" class="option">ITC AvantGardeGothic Medium</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
            {/* Link Text */}
            <div class="formElement">
              <div class="formLabel">
                <label class="label label-url" for="url" form="">Link Text</label>
              </div>
              <div class="formItem">
                <input id="linkText" name="linkText" class="text" type="text" placeholder="Please input text"/>
              </div>

              <ul class="fontOptionsList">
                <li> 
                  {/* Font Size */}
                  <div class="formLabel">
                    <label class="label label-select-box" for="select-box">Font Size</label>
                  </div>
                  <div class="formItem">
                    <select id="link-font-size-select-box" name="select-box" class="select-box chosen-select">
                      <option value="0" data-attribute="option-0" class="option" disabled selected>Please Select</option>
                      <option value="heading1" data-attribute="heading1" class="option">Heading 1</option>
                      <option value="heading2" data-attribute="heading2" class="option">Heading 2</option>
                      <option value="heading3" data-attribute="heading3" class="option">Heading 3</option>
                      <option value="heading4" data-attribute="heading4" class="option">Heading 4</option>
                      <option value="heading5" data-attribute="heading5" class="option">Heading 5</option>
                      <option value="heading6" data-attribute="heading6" class="option">Heading 6</option>
                      <option value="paragraph" data-attribute="paragraph" class="option">Paragraph</option>
                    </select>
                  </div>
                </li>
                <li> 
                  {/* Font Colour */}
                  <div class="formLabel">
                    <label class="label label-colorJS" for="linkColor" form="">Link Text Colour</label>
                  </div>
                  <div class="formItem">
                    <input id="linkColor" name="linkColor" class="colorJS" type="text"/>
                  </div>
                  <p id="link-log"></p>
                </li>
                <li> 
                  {/* Font Family */}
                  <div class="formLabel">
                    <label class="label label-select-box" for="select-box">Font</label>
                  </div>
                  <div class="formItem">
                    <select id="link-font-select-box" name="select-box" class="select-box chosen-select">
                      <option value="0" data-attribute="option-0" class="option" disabled selected>Please Select</option>
                      <option value="baskervilleItalic" data-attribute="baskervilleItalic" class="option">Baskerville Italic</option>
                      <option value="baskervilleMedium" data-attribute="baskervilleMedium" class="option">Baskerville Medium</option>
                      <option value="baskervilleMediumItalic" data-attribute="baskervilleMediumItalic" class="option">Baskerville Medium Italic</option>
                      <option value="itcAvantGardeGothicBold" data-attribute="itcAvantGardeGothicBold" class="option">ITC AvantGardeGothic Bold</option>
                      <option value="itcAvantGardeGothicBook" data-attribute="itcAvantGardeGothicBook" class="option">ITC AvantGardeGothic Book</option>
                      <option value="itcAvantGardeGothicDemi" data-attribute="itcAvantGardeGothicDemi" class="option">ITC AvantGardeGothic Demi</option>
                      <option value="itcAvantGardeGothicMedium" data-attribute="itcAvantGardeGothicMedium" class="option">ITC AvantGardeGothic Medium</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
            {/* HREF Link to item */}
            <div class="formElement">
              <div class="formLabel">
                <label class="label label-url" for="url" form="">Link to Item</label>
              </div>
              <div class="formItem">
                <input id="url" name="url" class="url" type="url" placeholder="Please enter a valid URL"/>
              </div>
            </div>
          </div>
          {/* Text Position on slide */}
          <hr />
          <a class="accordion-section-title default" href="#TextPosition">
          <div class="formElement">
            <div class="formLabel">
              <label class="label label-file" for="file" form="">Text Position on Slide</label>
            </div>
            <div class="formItem"></div>
          </div>
          </a>
          <hr />
          <div id="TextPosition" class="accordion-section-content">
            <div class="formElement">
              <div class="formLabel">
                <label class="label label-file" for="file" form="">Choose Text Position</label>
              </div>
              <div class="formItem"></div>
            </div>
            <div class="formElement">
              <div class="formItem">
                <ul id="imageTextPosition">
                  <li>
                    <ul id="imageTextPositionTop">
                      <li>
                        <input id="topLeft" name="radio" class="radio radio-button-option" type="radio"/>
                        <label class="label label-radio-button" for="topLeft" form="">Top Left</label>
                      </li>
                      <li>
                        <input id="topMiddle" name="radio" class="radio  radio-button-option" type="radio"/>
                        <label class="label label-radio-button" for="topMiddle" form="">Top Middle</label>
                      </li>
                      <li>
                        <input id="topRight" name="radio" class="radio  radio-button-option" type="radio"/>
                        <label class="label label-radio-button" for="topRight" form="">Top Right</label>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul id="imageTextPositionMiddle">
                      <li>
                        <input id="middleLeft" name="radio" class="radio  radio-button-option" type="radio"/>
                        <label class="label label-radio-button" for="middleLeft" form="">Middle Left</label>
                      </li>
                      <li>
                        <input id="middleMiddle" name="radio" class="radio  radio-button-option" type="radio"/>
                        <label class="label label-radio-button" for="middleMiddle" form="">Middle Middle</label>
                      </li>
                      <li>
                        <input id="middleRight" name="radio" class="radio  radio-button-option" type="radio"/>
                        <label class="label label-radio-button" for="middleRight" form="">Middle Right</label>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul id="imageTextPositionBottom">
                      <li>
                        <input id="bottomLeft" name="radio" class="radio  radio-button-option" type="radio"/>
                        <label class="label label-radio-button" for="bottomLeft" form="">Bottom Left</label>
                      </li>
                      <li>
                        <input id="bottomMiddle" name="radio" class="radio  radio-button-option" type="radio"/>
                        <label class="label label-radio-button" for="bottomMiddle" form="">Bottom Middle</label>
                      </li>
                      <li>
                        <input id="bottomRight" name="radio" class="radio  radio-button-option" type="radio"/>
                        <label class="label label-radio-button" for="bottomRight" form="">Bottom Right</label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Text Background */}
          <hr />
          <a class="accordion-section-title default" href="#TextBackground">
          <div class="formElement">
            <div class="formLabel">
              <label class="label label-file" for="file" form="">Text Background</label>
            </div>
            <div class="formItem"></div>
          </div>
          </a>
          <hr />
          <div id="TextBackground" class="accordion-section-content">
            <div class="formElement">
              <div class="formLabel">
                <label class="label label-bgOpacity" for="number" form="">Background Transparency <br />
                  (Min = 0.0 (Invisable) Max = 1.0 (Solid Colour))</label>
              </div>
              <div class="formItem">
                <input id="bgOpacity" name="bgOpacity" class="bgOpacity" type="number" min="0.0" max="1.0" step="0.1" value="0.5"/>
              </div>
            </div>
            <div class="formElement"></div>
            <div class="formElement">
              <div class="formLabel">
                <label class="label label-colorJS" for="colorJS" form="">Background Colour</label>
              </div>
              <div class="formItem">
                <input id="colorJS" name="colorJS" class="colorJS" type="text"/>
              </div>
              <p id="basic-log"></p>
            </div>
            <div id="bgShape">
              <ul>
                <li>
                  <div class="formElement">
                    <div class="formLabel">
                      <label class="label label-number" for="number" form="">Vertical</label>
                    </div>
                    <div class="formItem">
                      <input id="bgTop" name="number" class="number" type="number" min="-650" max="650" step="1" value="0"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="formElement">
                    <div class="formLabel">
                      <label class="label label-number" for="number" form="">Horizontal</label>
                    </div>
                    <div class="formItem">
                      <input id="bgLeft" name="number" class="number" type="number" min="-650" max="650" step="1" value="0"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="formElement">
                    <div class="formLabel">
                      <label class="label label-number" for="number" form="">Horizontal Width</label>
                    </div>
                    <div class="formItem">
                      <input id="bgLeftSkew" name="number" class="number" type="number" min="-0.9" max="0.9" step="0.1" value="0.9"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="formElement">
                    <div class="formLabel">
                      <label class="label label-number" for="number" form="">Left Rotation</label>
                    </div>
                    <div class="formItem">
                      <input id="bgRightSkew" name="number" class="number" type="number" min="-0.999" max="0.999" step="0.001" value="0"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="formElement">
                    <div class="formLabel">
                      <label class="label label-number" for="number" form="">Vertical Width</label>
                    </div>
                    <div class="formItem">
                      <input id="bgRotateLeft" name="number" class="number" type="number" min="-0.9" max="0.9" step="0.1" value="0.9"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="formElement">
                    <div class="formLabel">
                      <label class="label label-number" for="number" form="">Right Rotation</label>
                    </div>
                    <div class="formItem">
                      <input id="bgRotateRight" name="number" class="number" type="number" min="-0.999" max="0.999" step="0.001" value="0"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="formElement">
                    <div class="formLabel">
                      <label class="label label-button" for="button" form="">Reset Background Positions</label>
                    </div>
                    <div class="formItem">
                      <input id="resetBackgroundPositions" name="reset" class="button" type="button" value="Reset"/>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Submit */}
        <div class="formElement right">
          <div class="formLabel">
            <label class="label label-submit" for="submit" form="">Save</label>
          </div>
          <div class="formItem">
            <input id="submitImageUploaderForm" name="submit" class="submit button" value="Save" type="submit"/>
          </div>
        </div>
      </form>
    </div>
  </div>

    </div>
    );
  }
}
 
export default ImageUploaderPositioner;