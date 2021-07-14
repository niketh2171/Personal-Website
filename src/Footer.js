import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div className="Footer">
      <p className="Footer-Text-Left">
        © Copyright Niketh Charpanjeri | Last Modified July 2021 <br/>         niketh2171@gmail.com | 646-873-0379
      </p>
      <p className="Footer-Text-Right">
      </p>
      </div>
    )
  }

}
