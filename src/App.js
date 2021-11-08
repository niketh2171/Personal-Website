import React from 'react';
import ReactDOM from 'react-dom';
import startImage from './opeingImage.jpg';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import OpeningSection from './OpeningSection';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.WorkExperience = React.createRef();
    this.state={

    }
  }
  render(){

    return (
      <div id="parent">
        <div id="open">
          <OpeningSection/>
        </div>
        <div id="work" ref={this.WorkExperience}>
          <WorkExperience/>
        </div>
        <div id="projects">
          <Projects/>
        </div>
        <div id="footer">
          <Footer/>
        </div>
      </div>
    );
  }

}
