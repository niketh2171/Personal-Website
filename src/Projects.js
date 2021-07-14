import React from 'react';
import ReactDOM from 'react-dom';
import startImage from './opeingImage.jpg';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div className="Projects">
        <p className="Body-Header" align="center"> <font> PROJECTS AND ACTIVITIES </font> <br/> <br/> </p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2018 - April 2018"
            iconStyle={{ background: 'Navy', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Freshman Engineering Conference </h3>
            <h4 className="vertical-timeline-element-subtitle">The Importance of Cryptocurrency and Blockchain Technology</h4>
            <p>
              Project for the Pitt Freshman Engineering Conference. Professional grade Engineering Research paper. Read it <a href={"https://things-for-personal-website.s3.us-east-2.amazonaws.com/ConferencePaper.pdf"} target="_blank">{"here."}</a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2018 - April 2018"
            iconStyle={{ background: 'Navy', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> MiniSumo </h3>
            <h4 className="vertical-timeline-element-subtitle"> Pitt Robotics and Automation Society </h4>
            <p>
              Autonomous sumo fighting robot. Hardware design. Software development working with IR sensors and motors among other robotic components. First place at Pitt IEEE regional competition.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2018 - Present"
            iconStyle={{ background: 'Navy', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Avionics Team Member </h3>
            <h4 className="vertical-timeline-element-subtitle"> Pitt Rocketry Team </h4>
            <p>
              Lead hardware designer. First year team at the University. Successfully built a high powered rocket to compete at the NASA student launch.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2019"
            iconStyle={{ background: 'Navy', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Amazon Web Services </h3>
            <h4 className="vertical-timeline-element-subtitle"> AWS Certified Cloud Practitioner </h4>
            <p>
              Wanted to learn more about AWS and its uses. Earned the entry level certification with hopes to go further in the path. See certificate <a href={"https://niketh-charpanjeri-aws-cert-cp.s3.us-east-2.amazonaws.com/AWS+Certified+Cloud+Practitioner+certificate.pdf"} target="_blank">{"here."}</a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2020"
            iconStyle={{ background: 'Navy', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Software Development Volunteer </h3>
            <h4 className="vertical-timeline-element-subtitle"> Pitt iServe Program </h4>
            <p>
              Collaborated with 2 other Pitt students on full stack development of an online portal for a local weekend school to manage class enrollment, scheduling, and payments. Designed with JavaScript and PHP with MariaDB and a RESTFUL architecture.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }

}
