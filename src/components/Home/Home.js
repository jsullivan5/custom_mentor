import React, {Component} from "react";

import {Title} from "./Title";
import SignFormContainer from "./SignFormContainer";
import {About} from "./About";
import {Contact} from "./Contact";
import {Header} from "./Header";
import {MenteeInfo} from "../Mentee/MenteeInfo";
import {MentorInfo} from "../Mentor/MentorInfo";



export class Home extends Component {
      toPage(page){
        console.log("page", page);
        console.log("route", this.props.route)
      }
    render() {
        return (
              <div className="row">
                  <div className="col-xs-2">
                      <Header/>
                  </div>
                  <div className="col-xs-10 home">
                      <div id ="title"><Title /></div>
                      <div id ="signin"><SignFormContainer /></div>
                      <div id ="menteeInfo"><MenteeInfo /></div>
                      <div id ="mentorInfo"><MentorInfo /></div>

                      <div id ="about"><About /></div>
                      <div id ="contact"><Contact /></div>
                  </div>
                </div>


        );
    }
}
