import React from 'react';
import ReactDOM from 'react-dom';
import startImage from './opeingImage.jpg';
import downArrow from './whiteDownArrow.png'
import './App.css';
import { SocialIcon } from 'react-social-icons';
import {Rectangle, Ellipse, Line} from 'react-shapes';
import ReactTooltip from 'react-tooltip'

export default class OpeningSection extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div className="Opening-Section">
        <div>
          <h1 className="FirstName"> NIKETH </h1> <h1 className="LastName">CHARPANJERI </h1>
          <div className="Rectangle" />
          <h1 className="Title"> Software Engineer </h1>
        </div>
        <div className="Down-Arrow">
            <img src={downArrow} width="80" height="70" />
        </div>
      </div>
    );
  }

}
