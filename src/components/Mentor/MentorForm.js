
// Table details - object inputed into DB table

// Custom_mentor:
//
// {Goals: {object of booleans}
// *HelpPara: “string” (personal information)
// Mentoring: “string”
// weekTalk: “string"
// Contact:{object of booleans}
// Availability : {object of {object of strings}}
// ManagementTool: boolean}
//
//
// Mentor specific:
// *expertisePara: “string” (personal information)
// *experiencePara: “string” (personal information)
// *studiesPara: “string” (personal information)
// education:”string"
//


import React, {Component} from "react";

export default class MentorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {
        goals:{},
        contact:{},
        availability:{}
      }
    }
  }

  handleChange(event) {
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;
    let type = event.target.type
    type === "checkbox" ? this.checkedBox(event,formValues,name,value) : formValues[name] = value;
    type === "time" ? this.inputTime(event,formValues,name,value):null
    this.setState({formValues})
  }
  checkedBox(event, formValues,name,value) {
    let checked = event.target.checked;
    checked ? formValues[name][value]=checked:formValues[name][value]=checked
    console.log(formValues)
    this.setState({formValues})
  }
  timeChange(event){
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;
    let checked = event.target.checked;
    checked ? formValues[name][value]=[] :formValues[name][value]=false
    this.setState({formValues})
    console.log(formValues)
    console.log("time event", event.target)
  }
  timeSet(event){
    console.log("time now", event.target)
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;
    formValues.availability[name].push(value)
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    // this.props.onMentorSubmit(this.state.formValues)
  }

  render() {
    return (
      <div>
        <h2>Mentor Profile</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p>Goals: What area(s) do you want to mentor in?</p>
          <label>
            <input name="goals" value='educational' type="checkbox" checked={this.state.formValues["educational"]} onChange={this.handleChange.bind(this)}/>
            Educational
          </label>
          <br/>
          <label>
            <input name="goals" value="financial" type="checkbox" checked={this.state.formValues["financial"]} onChange={this.handleChange.bind(this)}/>
            Financial
          </label>
          <br/>
          <label>
            <input name="goals" value="physical" type="checkbox" checked={this.state.formValues["physical"]} onChange={this.handleChange.bind(this)}/>
            Physical (health)
          </label>
          <br/>
          <label>
            <input name="goals" value="spiritual" type="checkbox" checked={this.state.formValues["spiritual"]} onChange={this.handleChange.bind(this)}/>
            Spiritual
          </label>
          <br/>
          <label>
            <input name="goals" value="other" type="checkbox" checked={this.state.formValues["other"]} onChange={this.handleChange.bind(this)}/>
            Other
          </label>
          <br/>

          <label>
            Explain how you can help:
          </label>
          <br/>
          <textarea style={{
            width: '50%',
            height: '200%'
          }} name="helpPara" value={this.state.formValues["helpPara"]} onChange={this.handleChange.bind(this)}/>
          <br/>
          <p>Note: mentors should be able to sign up to mentor in different areas.</p>

          <label>
            What level of mentoring do you wish to provide?
          </label>

          <div className="radio">
            <label>
              <input name="mentoring" value={"cheerleader"} type="radio" onChange={this.handleChange.bind(this)}/>
              Cheerleader – Most basic level of service the provides accountability and positive feedback with brief communications
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="mentoring" value={"mentor"} type="radio" onChange={this.handleChange.bind(this)}/>
              Mentor – More in-depth interaction, providing advice, advocacy and support at whatever level you desire. This person may not have specific experience or knowledge with the goals you are pursuing.
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="mentoring" value={"coach"} type="radio" onChange={this.handleChange.bind(this)}/>
              Coach – A mentor on steroids that provides specific advice based on experience or education in with the goal(s) you want to achieve.
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="mentoring" value={"tutor"} type="radio" onChange={this.handleChange.bind(this)}/>
              Tutor – An expert in a certain field who will provide instruction in accomplishing a specific task.
            </label>
          </div>
          <p>Note: Mentors should be able to sign up to offer more than one level of mentoring.</p>

          <p>How do you prefer to contact the mentee? (choose any combination)</p>
          <label>
            <input value="email"  name = "contact" type="checkbox" checked={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}/>
            Email
          </label>
          <br/>
          <label>
            <input value="phone" name = "contact" type="checkbox" checked={this.state.formValues["phone"]} onChange={this.handleChange.bind(this)}/>
            Phone
          </label>
          <br/>
          <label>
            <input value="text" name = "contact" type="checkbox" checked={this.state.formValues["text"]} onChange={this.handleChange.bind(this)}/>
            Text
          </label>

          <p>How often are you willing to communicate per week?</p>
          <div className="radio">
            <label>
              <input name="weekTalk" value={"once"} type="radio" onChange={this.handleChange.bind(this)}/>
              Once
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="weekTalk" value={"twice"} type="radio" onChange={this.handleChange.bind(this)}/>
              Twice
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="weekTalk" value={"three"} type="radio" onChange={this.handleChange.bind(this)}/>
              Three times
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="weekTalk" value={"everyday"} type="radio" onChange={this.handleChange.bind(this)}/>
              Every day
            </label>
          </div>

          <p>When are you available to contact the mentee?</p>
          <label>
            <input value="monday" name = "availability" type="checkbox" checked={this.state.formValues["monday"]} onChange={this.timeChange.bind(this)}/>
            Monday {this.state.formValues.availability.monday
              ? <div><input type="time" name="monday" onChange={this.timeSet.bind(this)}/><input type="time" name="monday" onChange={this.timeSet.bind(this)}/></div>
              : null
}
          </label>
          <br/>
          {/* <label>
            <input value="tuesday" name = "availability" type="checkbox" checked={this.state.formValues["tuesday"]} onChange={this.handleChange.bind(this)}/>
            Tuesday {this.state.formValues.availability.indexOf("tuesday")>=0
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>
          <label>
            <input value="wednesday" name = "availability" type="checkbox" checked={this.state.formValues["wednesday"]} onChange={this.handleChange.bind(this)}/>
            Wednesday {this.state.formValues.availability.indexOf("wednesday")>=0
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>
          <label>
            <input value="thursday" name = "availability" type="checkbox" checked={this.state.formValues["thursday"]} onChange={this.handleChange.bind(this)}/>
            Thursday {this.state.formValues.availability.indexOf("thursday")>=0
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>
          <label>
            <input value="friday" name = "availability" type="checkbox" checked={this.state.formValues["friday"]} onChange={this.handleChange.bind(this)}/>
            Friday {this.state.formValues.availability.indexOf("friday")>=0
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>
          <label>
            <input value="saturday" name = "availability" type="checkbox" checked={this.state.formValues["saturday"]} onChange={this.handleChange.bind(this)}/>
            Saturday {this.state.formValues.availability.indexOf("saturday")>=0
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/>
          <label>
            <input value="sunday" name = "availability" type="checkbox" checked={this.state.formValues["sunday"]} onChange={this.handleChange.bind(this)}/>
            Sunday {this.state.formValues.availability.indexOf("sunday")>=0
              ? <div><input type="time" name="timeStart"/><input type="time" name="timeEnd"/></div>
              : null
}
          </label>
          <br/> */}

          <label>
            In what area(s) do you have expertise? (Separate different areas with a comma.)
          </label>
          <br/>
          <textarea style={{
            width: '50%',
            height: '200%'
          }} name="expertisePara" value={this.state.formValues["expertisePara"]} onChange={this.handleChange.bind(this)}/>
          <br/>

          <label>
            What experience do you have?
          </label>
          <br/>
          <textarea style={{
            width: '50%',
            height: '500%'
          }} name="experiencePara" value={this.state.formValues["experiencePara"]} onChange={this.handleChange.bind(this)}/>
          <br/>

          <label>
            What is/was your field of study in school? (Separate different fields with a comma.)
          </label>
          <br/>
          <textarea style={{
            width: '50%',
            height: '200%'
          }} name="studiesPara" value={this.state.formValues["studiesPara"]} onChange={this.handleChange.bind(this)}/>
          <br/>

          <label>What is your highest education level attained?</label>
          <div className="radio">
            <label>
              <input name="education" value={"HSStudent"} type="radio" onChange={this.handleChange.bind(this)}/>
              High School Student
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value={"HSGrade"} type="radio" onChange={this.handleChange.bind(this)}/>
              High School Graduate

            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value={"UStudent"} type="radio" onChange={this.handleChange.bind(this)}/>
              College Student
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value={"ADGrade"} type="radio" onChange={this.handleChange.bind(this)}/>
              Associates Degree
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value={"BDGrade"} type="radio" onChange={this.handleChange.bind(this)}/>
              Bachelors Degree
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value={"Master"} type="radio" onChange={this.handleChange.bind(this)}/>
              Masters
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value={"PHD"} type="radio" onChange={this.handleChange.bind(this)}/>
              PHD
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="education" value={"Additional"} type="radio" onChange={this.handleChange.bind(this)}/>
              Additional Degrees and Certifications
            </label>
            <br/>

            <textarea style={{
              width: '50%',
              height: '200%'
            }} name="additionalDegrees" value={this.state.formValues["additionalDegrees"]} onChange={this.handleChange.bind(this)}/>
            <br/>
          </div>

          <p>Do you want to use the CustomMentor suite of relationship management tools?</p>
          <div className="radio">
            <label>
              <input name="managementTool" value={true} type="radio" onChange={this.handleChange.bind(this)}/>
              Yes
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="managementTool" value={false} type="radio" onChange={this.handleChange.bind(this)}/>
              No
            </label>
          </div>

          <br/><input className="btn btn-primary" type="submit" value="Submit"/>

        </form>
      </div>
    );
  }
}