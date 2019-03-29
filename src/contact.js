import React, { Component } from 'react';
import './App.css';
class Contact extends Component {
  render() {
    return (
     <div id="contact"> 
   <form>
  <label for="fname">First Name</label>
  <input type="text" id="fname" name="fname"/>
  <label for="lname">Last Name</label>
  <input type="text" id="lname" name="lname"/>
</form>
     </div>
    );
  }
}

export default Contact;
