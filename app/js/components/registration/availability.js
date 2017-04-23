import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';

class Availability extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formInformation: {
        availability: {
          monday: {},
          tuesday: {},
          wednesday: {},
          thursday: {},
          friday: {}
        }
      }
    }

    this.updateAvailability = this.updateAvailability.bind(this);
  }

  updateAvailability(e) {
    var formInformation = Object.assign({}, this.state.formInformation),
        availability = formInformation.availability,
        availabiltyInput = e.currentTarget.value,
        day = e.currentTarget.getAttribute('data-day'),
        selectedAvailability = availability[day][availabiltyInput] || false;


    availability[day][availabiltyInput] = !selectedAvailability;
    console.log(formInformation);

    this.setState({
      ...this.state,
      formInformation: formInformation
    });
  }

  getDayDisplayClass(day) {
    let currentAvailability = this.state.formInformation.availability;
    let isCurrentlyActive = Object.values(currentAvailability[day]).indexOf(true);

    return classNames(
      'signup-form-boolean',
      {'active': isCurrentlyActive != -1}
    );
  }

  getButtonDisplayClass(day, time) {
    let currentAvailability = this.state.formInformation.availability;

    return classNames(
      {'active': currentAvailability[day][time]}
    );
  }

  getFormData() {
    return this.state.formInformation;
  }

  renderDay(day) {
    return (
      <div className={this.getDayDisplayClass(day)}>
        <div>
          <p>{day.charAt(0).toUpperCase() + day.slice(1)}</p>
          <div>
            <button 
              className={this.getButtonDisplayClass(day, "morning")}
              type="button"
              onClick={this.updateAvailability} 
              data-day={day} 
              value="morning"
            >
              Morning
            </button>
            <button
              className={this.getButtonDisplayClass(day, "afternoon")}
              type="button"
              onClick={this.updateAvailability}
              data-day={day}
              value="afternoon"
            >
              Afternoon
            </button>
            <button 
              className={this.getButtonDisplayClass(day, "evening")}
              type="button"
              onClick={this.updateAvailability} 
              data-day={day} 
              value="evening"
            >
              Evening
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <form className="signup-form" onSubmit={this.props.formSubmit}>
        <h1>When are you available to help?</h1>
        <p>
          This information will help us show you opportunities that best fit your schedule. 
          You can still apply for specific postings at other times and can always edit your preferences later.
        </p>
        {this.renderDay('monday')}
        {this.renderDay('tuesday')}
        {this.renderDay('wednesday')}
        {this.renderDay('thursday')}
        {this.renderDay('friday')}
        <div className="container">
          <div className="signup-actions">
            <span>Skip this step for now</span>
            <input type="submit" value="submit" className="btn btn-primary pull-right" />
          </div>
        </div>
      </form>
    )
  }
}

export default Availability;
