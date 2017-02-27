import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import PrimaryNavigation from './primary_navigation';
import MainFooter from './main_footer';

class Faqs extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    var questions = [
      {
        question: "How do I become a PC Adviser Volunteer?",
        answer: "PC Advisers apply on line. First, we look at your background to determine if your skill set matches our principals needs. Because Advisers are around children, there is a background check. Our Founder, Carol Hallquist meets with you. You attend a 20 -hour class which prepares you for volunteering in urban schools."
      },
      {
        question: "What are the requirements of PC Advisers?",
        answer: "PC Advisers must exhibit integrity, a passion for volunteering, have high integrity and exhibit humbleness. We’re looking for business professional who have people management experience. We balance the number of professionals of certain backgrounds so that many skill sets are available to our principals."
      },
      {
        question: "Do I have to commit to volunteering a number of hours each month?",
        answer: "No. The beauty of PrincipalsConnect is that you volunteer when you have time. We want you to enjoy the flexibility of retirement, while volunteering your skills when you have time."
      },
      {
        question: "What if I need to cancel my appointment?",
        answer: "You’ll have the email of the principal or the PC Adviser with whom you’re working. If you cancel several times, with no rescheduling, you’ll be suspended from the program."
      },
      {
        question: "What types of talent/experience levels are you looking for in PC Advisers?",
        answer: "We’re looking for individuals who have managed people. Those with backgrounds in IT, finance, public relations/marketing, engineering/building construction, law, human relations and project management are our top needs."
      },
      {
        question: "What training do I receive?",
        answer: "Every PC Advisor attends a 20-hour class that prepares them to volunteer in urban schools. The urban education landscape in Kansas City, the culture of poverty, and a review of how the education system works will be covered."
      },
      {
        question: "I don’t have a background in education. Are principals going to need my advice/help?",
        answer: "You bet! PC Advisers provide a needed business perspective and outside point of view that can be very helpful to principals of large urban schools."
      },
      {
        question: "I’m a principal. How do I get PC Advisers for my school?",
        answer: "We are currently working with three KCPublic schools to test our process, system and needs. We’ll be expanding to more schools in 2018."
      }
    ]

    var questionElements = questions.map(function(item, i) {
      return (
        <div key={'faq-question-' + i} className="panel panel-default">
          <div className="panel-heading" role="tab" id={"heading-" + i}>
            <h4 className="panel-title">
              <a className={"collapsed"} role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapse-" + i} aria-expanded="false" aria-controls={"collapse-" + i}>
                {item.question}
              </a>
            </h4>
          </div>
          <div id={"#collapse-" + i} className="panel-collapse collapse in" role="tabpanel" aria-labelledby={"heading-" + i}>
            <div className="panel-body">
              {item.answer}
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <PrimaryNavigation additionalNavBarClasses={[ "navbar-primary", "navbar-default", "navbar-collapse"]} 
            rightLinks={[
              <Link to="/example_opportunities">Volunteer Opportunities</Link>,
              <a href="#">About Us</a>,
              <Link to="/faqs">FAQs</Link>,
              <Link to="/signup" className={'btn btn-success'}>Sign Up</Link>,
              <Link to="/signup" className={'btn btn-primary'}>Log In</Link>
            ]} />
        <div className={"container"}>
          <div className="panel-group" id="faq-accordion" role="tablist" aria-multiselectable="true">
            {questionElements}
          </div>
        </div>
        <MainFooter />
      </div>
    );
  }
}

export default Faqs;
