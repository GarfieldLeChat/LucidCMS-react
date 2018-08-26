import React, { Component } from "react";
 
class Forms extends Component {
  render() {
    return (
      <div>
        <h2>Forms</h2>
        <div className="formContainer">
            <form action="#" method="post" className="form" id="form1">
                <div className="formElement">
                
                    <div className="formItem">
                        <input id="checkbox" name="checkbox" className="checkbox checkbox-option" type="checkbox"/>
                        <label className="label label-checkbox" for="checkbox" form="">checkbox option</label>
                    </div>
                    
                    <div className="formItem">
                        <input id="checkbox1" name="checkbox" className="checkbox checkbox-option" type="checkbox"/>
                        <label className="label label-checkbox" for="checkbox1" form="">checkbox option</label>
                    </div>
                </div>

                <div className="formElement">
                    <div className="formItem">
                        <input id="radio" name="radio" className="radio radio-button-option" type="radio"/>
                        <label className="label label-radio-button" for="radio" form="">radio button label option</label>
                    </div>

                    <div className="formItem">
                        <input id="radio1" name="radio" className="radio  radio-button-option" type="radio"/>
                        <label className="label label-radio-button" for="radio1" form="">radio button label option</label>
                    </div>
                </div>

                <div className="formElement">
                    <div className="formLabel">
                        <label className="label label-password" for="password" form="">password</label>
                    </div>
                    <div className="formItem">
                        <input id="password" name="password" className="password" type="password" placeholder="Please enter your password" required="required"/>
                        <label className="label label-checkbox button checkbox-password" for="checkbox-password">Show Password</label>
                        <input id="checkbox-password" name="checkbox-password" className="checkbox checkbox-option showPassword" type="checkbox"/>
                    </div>
                </div>

                <div className="formElement">
                    <div className="formLabel">
                        <label className="label label-select-box" for="select-box">select box</label>
                    </div>
                    <div className="formItem">
                        <select id="select-box" name="select-box" className="select-box chosen-select">
                            <option value="0" data-attribute="option-0" className="option" disabled selected>Please Select</option>
                            <option value="1" data-attribute="option-1" className="option">option 1</option>
                            <option value="2" data-attribute="option-2" className="option">option 2</option>
                            <option value="3" data-attribute="option-3" className="option">option 3</option>
                        </select>
                    </div>
                </div>

                <div className="formElement">
                    <div className="formLabel">
                        <label className="label label-file" for="file" form="">File Upload</label>
                    </div>
                    <div className="formItem">
                        <input id="uploadFile" className="uploadFile" placeholder="Choose File" disabled="disabled"/>
                        <div className="fileUpload button">
                            <span>Upload</span>
                            <input id="file" name="file" className="upload" type="file"/>
                        </div>
                    </div>
                </div>

                <div className="formElement">
                    <div className="formLabel">
                        <label className="label label-submit" for="submit" form="">submit</label>
                    </div>
                    <div className="formItem">
                        <input id="submit" name="submit" className="submit button" type="submit"/>
                    </div>
                </div>

                <div className="formElement">
                    <div className="formLabel">
                        <label className="label label-text" for="text" form="">text</label>
                    </div>
                    <div className="formItem">
                        <input id="text" name="text" className="text" type="text" placeholder="Please input text"/>
                    </div>
                </div>

                <div className="formElement">
                    <div className="formLabel">
                        <label className="label label-email" for="email" form="">email</label>
                    </div>
                    <div className="formItem">
                        <input id="email" name="email" className="email" type="email" placeholder="Please enter your email" required="required"/>
                    </div>
                </div>

                <div className="formElement">
                    <div className="formLabel">
                        <label className="label label-url" for="url" form="">url</label>
                    </div>
                    <div className="formItem">
                        <input id="url" name="url" className="url" type="url" placeholder="Please enter a valid URL" />
                    </div>
                </div>

                <div className="formElement">
                    <div className="formLabel">
                        <label className="label label-number" for="number" form="">number (incremental, step change = 2, initial = 6, max = 10)</label>
                    </div>
                    <div className="formItem">
                        <input id="number" name="number" className="number" type="number"
                            min="0"
                            max="10"
                            step="2"
                            value="6" />
                    </div>
                </div>

                <div className="formElement">
                    <div className="formLabel">
                        <label className="label label-range" for="range" form="">range (incremental slider, step change = 1, initial = 50, max = 100)</label>
                    </div>
                    <div className="formItem">
                        <input id="range1" name="range" className="range" type="range" min="0" max="100" />
                        <span id="rangeValue1" className="rangeValue1">50</span>
                    </div>
                </div>

                <div className="formElement">
                    <div className="formLabel">
                        <label className="label label-button" for="button" form="">button</label>
                    </div>
                    <div className="formItem">
                        <input id="button" name="button" className="button" type="button" value="Click Me!" />
                    </div>
                </div>
         </form>
        </div>
        <div className="content-item">
            <h3>Form Elements : Error States</h3>
            <div className="formContainer">
                <form action="#" method="post" className="form" id="form1">
                    <div className="formElement error">

                        <div className="formItem">
                            <input id="checkbox2" name="checkbox" className="error checkbox checkbox-option" type="checkbox"/>
                            <label className="error label label-checkbox" for="checkbox2" form="">checkbox option</label>
                        </div>

                        <div className="formError"><div className="errorIcon">!</div> Error Please Correct</div>

                    </div>

                    <div className="formElement error">
                        <div className="formItem">
                            <input id="radio2" name="radio" className="error radio radio-button-option" type="radio"/>
                            <label className="error label label-radio-button" for="radio2" form="">radio button label option</label>
                        </div> 

                        <div className="formError error"><div className="errorIcon">!</div> Error Please Correct</div>

                    </div>

                    <div className="formElement error">
                        <div className="formLabel">
                            <label className="error label label-password" for="password1" form="">password</label>
                        </div>
                        <div className="formItem">
                            <input id="password1" name="password1" className="error password" type="password" placeholder="Please enter your password" required="required"/>
                            <label className="error label label-checkbox button checkbox-password" for="checkbox-password1">Show Password</label>
                            <input id="checkbox-password1" name="checkbox-password" className="checkbox checkbox-option showPassword" type="checkbox"/>
                        </div>

                        <div className="formError"><div className="errorIcon">!</div> Error Please Correct</div>

                    </div>

                    <div className="formElement error">
                    <div className="formLabel">
                        <label className="error label label-select-box" for="select-box">select box</label>
                    </div>
                    <div className="formItem">
                        <select id="select-box" name="select-box" className="error select-box chosen-select">
                            <option value="0" data-attribute="option-0" className="option" disabled selected>Please Select</option>
                            <option value="1" data-attribute="option-1" className="option">option 1</option>
                            <option value="2" data-attribute="option-2" className="option">option 2</option>
                            <option value="3" data-attribute="option-1" className="option">option 3</option>
                        </select>
                    </div>

                    <div className="formError"><div className="errorIcon">!</div> Error Please Correct</div>

                    </div>

                    <div className="formElement error">
                        <div className="formLabel">
                            <label className="error label label-text" for="text1" form="">text</label>
                        </div>
                        <div className="formItem">
                            <input id="text1" name="text" className="error text" type="text" placeholder="Please input text"/>
                        </div>

                        <div className="formError"><div className="errorIcon">!</div> Error Please Correct</div>

                    </div>

                    <div className="formElement error">
                        <div className="formLabel">
                            <label className="error label label-email" for="email1" form="">email</label>
                        </div>
                        <div className="formItem">
                            <input id="email1" name="email" className="error email" type="email" placeholder="Please enter your email" required="required"/>
                        </div>

                        <div className="formError"><div className="errorIcon">!</div> Error Please Correct</div>

                    </div>

                    <div className="formElement error">
                        <div className="formLabel">
                            <label className="error label label-url" for="url1" form="">url</label>
                        </div>
                        <div className="formItem">
                            <input id="url1" name="url" className="error url" type="url" placeholder="Please enter a valid URL"/>
                        </div>

                        <div className="formError"><div className="errorIcon">!</div> Error Please Correct</div>

                    </div>

                    <div className="formElement error">
                        <div className="formLabel">
                            <label className="error label label-submit" for="submit1" form="">submit</label>
                        </div>
                        <div className="formItem">
                            <input id="submit1" name="submit" className="submit button" type="submit"/>
                        </div>
                    </div>
                </form> 
            </div>
        </div>
    </div>
    );
  }
}
 
export default Forms;