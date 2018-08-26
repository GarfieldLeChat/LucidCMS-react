import React, { Component } from "react";
import plp from "./assets/images/products/teeshirt-small.jpg";
import pdp from "./assets/images/products/teeshirt-big.jpg";
 
class PromoImageUploaderPositioner extends Component {
  render() {
    return (
    <div>
        <h2>PromoImageUploaderPositioner</h2>

        {/* Divide content area into 2 */}
        <div class="content-50"> 
            {/* Content Image */}
            <div class="content-image-holder">
                <div id="preview" >
                    <div class="productImage">
                        <h1>PLP Image</h1>
                        <img src={plp} alt="Dummy Product Lister Page Image" class="promoRoundel" />
                        <div class="promoRoundelOutput"></div>
                    </div>
                    <div class="productImage lineLeft">
                        <h1>PDP Image</h1>
                        <img src={pdp} alt="Dummy Product Decription Page Image" class="promoRoundel" />
                        <div class="promoRoundelOutput"></div>
                    </div>
                </div>

                {/* Returned Data on Submit */} 
                {/* Image Data */}
                <div id="data" class="uploadedDataImage">
                    <h1 class="fileNameHeading">The filename is: <span id="name"></span></h1>
                    <p class="fileSize">The file size is: <span id="size"></span></p>
                    <p class="fileType">The file type is: <span id="type"></span></p>
                    <h2>The Promotions Text is: <span id="promoTextOutput"></span></h2>
                    <h3>The Promotions Roundel CSS: <span id="promoRoundelOutputCSS"></span></h3>
                    <h4>The Roundel Colour: <span id="roundelColor"></span></h4>
                </div>
            </div>
        </div>

        {/* Slide Elements */}
        <div class="content-50">
            <h3>Promotion Roundel Elements</h3>
            <div class="formContainer">
                <form action="#" method="post" class="form" id="uploader">
                    <div class="accordion"> 
                        {/* Form Section */}
                        {/* File upload */}

                        <hr />

                        <a class="accordion-section-title default active" href="#ColorFileUploadObject">

                        <div class="formElement">
                            <div class="formLabel">
                                <label class="label label-file" for="file" form="">Choose Your Roundel</label>
                            </div>

                            <div class="formItem"></div>

                        </div>

                        </a>

                        <hr />

                        <div id="ColorFileUploadObject" class="accordion-section-content open">
                            <div class="formElement">
                                <div class="formLabel">
                                    <label class="label label-select-box" for="select-box">Roundel Colour:</label>
                                </div>
                                <div class="formItem">
                                    <select id="color-select-box" name="select-box" class="select-box chosen-select">
                                    <option value="0" data-attribute="option-0" class="option" disabled selected>Please Select</option>
                                    <option value="blue" data-attribute="blue" class="option">Blue</option>
                                    <option value="red" data-attribute="red" class="option">Red</option>
                                    <option value="yellow" data-attribute="yellow" class="option">Yellow</option>
                                    <option value="newColor" data-attribute="newColor" class="option">New Colour</option>
                                    <option value="newFile" data-attribute="newFile" class="option">New File</option>
                                    </select>
                                </div>
                            </div>

                            {/* File Upload */}
                            <div class="formElement uploadPromo">
                                <div class="formLabel">
                                    <label class="label label-file" for="file" form="">File Upload</label>
                                </div>

                                <div class="formItem">
                                    <input id="uploadImage" class="uploadImage" placeholder="Choose Image" disabled="disabled"/>

                                    <div class="fileUpload button"> <span>Select</span>
                                        <input id="photoUpload" name="photoUpload" class="photoUpload" type="file"/>
                                    </div>
                                </div>
                            </div>
                        {/* Roundel Background */}
                        <div class="formElement newPromoColor">
                            <div class="formLabel">
                                <label class="label label-roundelNewColorpicker" for="roundelNewColorpicker" form="">Roundel Background Colour:</label>
                            </div>
                            <div class="formItem">
                                <input id="roundelNewColorpicker" name="roundelNewColorpicker" class="roundelNewColorpicker" type="text"/>
                            </div>
                            <p id="basic-log"></p>
                        </div>

                        </div>

                        {/* Slide Text */}
                        <hr />

                        <a class="accordion-section-title default" href="#promoTextOutput">
                            <div class="formElement">
                                <div class="formLabel">
                                    <label class="label label-file" for="file" form="">Promotion Text</label>
                                </div>

                                <div class="formItem"></div>

                            </div>
                        </a>

                        <hr />

                        {/* Title */}
                        <div id="promoTextOutput" class="accordion-section-content">
                            <div class="formElement">
                                <div class="formLabel">
                                    <label class="label label-text" for="text" form="">Text</label>
                                </div>
                                <div class="formItem">
                                    <input id="promoText" name="text" class="text" type="text" placeholder="Please input text" maxlength="10"/>
                                    <p class="warning">Limit reached</p>
                                </div>
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
 
export default PromoImageUploaderPositioner;