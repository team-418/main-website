import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';

class Availability extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formInformation: {
        skills: []
      }
    }

    this.updateSkills = this.updateSkills.bind(this);
  }

  updateSkills(e) {
    var currentFormInformation = Object.assign({}, this.state.formInformation),
        currentSkills = currentFormInformation.skills,
        currentSkill = e.currentTarget.value;

    if(e.currentTarget.checked) {
      currentSkills.push(e.currentTarget.value);
    } else {
      currentSkills.splice(currentSkills.indexOf(currentSkill), 1);
    }

    this.setState({
      ...this.state,
      formInformation: currentFormInformation
    });
  }

  getDisplayClass(skill) {
    return classNames(
      'signup-form-boolean', 
      { active: this.state.formInformation.skills.indexOf(skill) != -1 }
    );
  }

  getFormData() {
    return this.state.formInformation;
  }

  render() {
    return (
      <form className="signup-form" onSubmit={this.props.formSubmit}>
        <h1>How could you help?</h1>
        <p>Select the category or categories that best describe what ways you can help principals. This will help us show you relevant opportunities</p>
        <div>
          <label className={this.getDisplayClass('legal')}>
            <input onChange={this.updateSkills} type="checkbox" name="legal" id="legal" value="legal" />
            <p className="signup-form-boolean-description">
              Legal<br/>
              Examples of these tasks could go here to give them some idea
            </p>
          </label>
          <label className={this.getDisplayClass('budgeting')}>
            <input onChange={this.updateSkills} type="checkbox" name="budgeting" id="budgeting" value="budgeting" />
            <p className="signup-form-boolean-description">
              Budgeting<br/>
              Examples of these tasks could go here to give them some idea
            </p>          
          </label>
        </div>
        <div>
          <label className={this.getDisplayClass('accounting')}>
            <input onChange={this.updateSkills} type="checkbox" name="accounting" id="accounting" value="accounting"/>
            <p className="signup-form-boolean-description">
              Accounting<br/>
              Examples of these tasks could go here to give them some idea
            </p>          
          </label>
          <label className={this.getDisplayClass('public_relations')}>
            <input onChange={this.updateSkills} type="checkbox" name="public_relations" id="public-relations" value="public_relations" />
            <p className="signup-form-boolean-description">
              Public Relations<br/>
              Examples of these tasks could go here to give them some idea
            </p>
          </label>
        </div>
        <div>
          <label className={this.getDisplayClass('conflict_resolution')}>
            <input onChange={this.updateSkills} type="checkbox" name="conflict_resolution" id="conflict-resolution" value="conflict_resolution" />
            <p className="signup-form-boolean-description">
              Conflict Resolution<br/>
              Examples of these tasks could go here to give them some idea
            </p>
          </label>
          <label className={this.getDisplayClass('teacher_training')}>
            <input onChange={this.updateSkills} type="checkbox" name="teacher_training" id="teacher-training" value="teacher_training" />
            <p className="signup-form-boolean-description">
              Teacher Training<br/>
              Examples of these tasks could go here to give them some idea
            </p>
          </label>
        </div>
        <div>
          <label className={this.getDisplayClass('it')}>
            <input onChange={this.updateSkills} type="checkbox" name="it" id="it" value="it" />
            <p className="signup-form-boolean-description">
              IT<br/>
              Examples of these tasks could go here to give them some idea
            </p>
          </label>
          <label className={this.getDisplayClass('policy_making')}>
            <input onChange={this.updateSkills} type="checkbox" name="policy_making" id="policy-making" value="policy_making" />
            <p className="signup-form-boolean-description">
              Policy Making<br/>
              Examples of these tasks could go here to give them some idea
            </p>
          </label>
        </div>
        <input type="submit" value="submit" className="btn btn-primary pull-right" />
      </form>
    )
  }
}

export default Availability;