import React, { Component } from 'react'
import "./Navbar.css";

class Navbar extends Component {

  state = { clicked: false };
  handleclick = ()=>{
    this.setState({clicked: !this.state.clicked});
  }

  render() {

    return (
      <>
        <nav>
          <a href="/" className='logo'>Raptors <span>Sustainerz</span></a>
          <div>
            <ul id='navbar' className={this.state.clicked  ? "#navbar active" : "#navbar"}>
              <li><a href="#">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Skill">Login</a></li>
              <li><a href="#Services">Sign up</a></li>
            
            </ul>
          </div>

          <div id="mobile" onClick={this.handleclick}>
            <i id='bar' className={this.state.clicked ? "bx bx-x" : "bx bx-menu"}></i>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar