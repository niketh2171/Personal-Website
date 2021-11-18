import React from 'react';
import ReactDOM from 'react-dom';
import startImage from './opeingImage.jpg';
import downArrow from './whiteDownArrow.png'
import './App.css';
import { SocialIcon } from 'react-social-icons';
import {Rectangle, Ellipse, Line} from 'react-shapes';
import ReactTooltip from 'react-tooltip'
import WorkExperience from './WorkExperience';
import {Link} from 'react-scroll';

export default class OpeningSection extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div id="opening-section" className="Opening-Section">
        <div>
          <h1 className="FirstName"> NIKETH </h1> <h1 className="LastName">CHARPANJERI </h1>
          <div className="Rectangle" />
          <h1 className="Title"> Software Engineer </h1>
          <h2 className="Welcome"> Thanks for visiting! </h2>
          <h2 className="Welcome"> Click the arrow to check out some of my experience and projects.</h2>
        </div>
        <div className="Down-Arrow" >
            <Link to="work" smooth={true}>
              <img src={downArrow} width="80" height="70"/>
            </Link>
        </div>
      </div>
    );
  }

}
