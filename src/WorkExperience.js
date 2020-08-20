import React from 'react';
import ReactDOM from 'react-dom';
import startImage from './opeingImage.jpg';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import {Rectangle, Ellipse, Line} from 'react-shapes';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class WorkExperience extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div className="Work-Experience">
        <p className="Body-Header" align="center"> <font> WORK EXPERIENCE </font> <br/> <br/> </p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2016 - August 2016"
            iconStyle={{ background: 'Maroon', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Marketing and Administrative Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Exton Region Chamber of Commerce | Exton, PA</h4>
            <p>
              Customer Service, Data Entry, Advertising, Graphic Design.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2018 - August 2018"
            iconStyle={{ background: 'Maroon', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Kaizen Learning Center | Malvern, PA</h4>
            <p>
              Quality Management of Testing Material, Tutoring, Grading.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2019 - August 2019"
            iconStyle={{ background: 'Maroon', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Cloud Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Vertex Inc | King of Prussia, PA</h4>
            <p>
              Java Development of Connector applications for clients who use the Oracle ERP. Full Stack Development for cloud application using Java and ReactJS.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2020 - August 2020"
            iconStyle={{ background: 'Maroon', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Software Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">JPMorgan Chase & Co. | Wilmington, DE</h4>
            <p>
              Designed and developed a mobile application for Goodwill Delaware non profit organization to help incentivize donations and improve public outreach. App was created in Python using a cross-platform app development framework known as Kivy.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }

}
