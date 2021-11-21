import React from 'react';
import ReactDOM from 'react-dom';
import startImage from './opeingImage.jpg';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import {Rectangle, Ellipse, Line} from 'react-shapes';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsFillBriefcaseFill, BsPencilFill } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
import { FaDonate } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

export default class WorkExperience extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div className="Work-Experience">
        <p className="Body-Header" align="center"> <font> WORK EXPERIENCE </font> <br/> <br/> <br/> </p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2018 - August 2018"
            iconStyle={{ background: 'Maroon', color: '#fff' }}
            icon={<BsPencilFill />}
          >
            <h3 className="vertical-timeline-element-title"> Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Kaizen Learning Center | Malvern, PA</h4>
            <p>
              Quality Management of Testing Material, Tutoring, Grading for standardized testing prep center.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2019 - August 2019"
            iconStyle={{ background: 'Maroon', color: '#fff' }}
            icon={<AiFillCloud />}
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
            icon={<FaDonate />}
          >
            <h3 className="vertical-timeline-element-title"> Software Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">JPMorgan Chase & Co. | Wilmington, DE</h4>
            <p>
              Designed and developed a python mobile application for Goodwill Delaware non profit organization to help
              incentivize donations and improve public outreach.
              Here's a <a href="https://youtu.be/F4S3Eiqv60E" target="_blank"> demo video </a> of the completed app.
              No audio because the presentation was done with a live voiceover by me and my teammates.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2021 - Present"
            iconStyle={{ background: 'Maroon', color: '#fff' }}
            icon={<MdPayment />}
          >
            <h3 className="vertical-timeline-element-title"> Software Development Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">JPMorgan Chase & Co. | Plano, TX</h4>
            <p>
              Microservice and API Development for application that allows merchants to accept mobile payments from
              customers through the Chase mobile app. It's been a fun experience getting
              to combine my two interests of tech and finance.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <br/>
      </div>
    );
  }

}
