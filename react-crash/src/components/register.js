import React, {Component} from "react";
import axios from "axios";

class Register extends Component {
  
  constructor(){
    super();
    this.state ={
      fname : "",
      lname : "",
      email : "",
      subject : "",
      message : ""
    }
  }

  onChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value})
  }

  onSubmit = (e)=>{
    e.preventDefault();

    const visitorData ={
      fname : this.state.fname,
      lname : this.state.lname,
      email : this.state.email,
      subject : this.state.subject,
      message : this.state.message
    }
    axios
      .post("/", visitorData)
      .then(res => console.log("Data Sent"))
      .catch(err => console.log(err))

  }

    render(){
        return (
            <form id="contact-form" onSubmit={this.onSubmit}>
        <div className="messages" />
        <div className="controls">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_name">Firstname *</label>
                <input id="form_name" type="text" name="fname" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." value={this.state.fname} onChange={this.onChange} />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_lastname">Lastname *</label>
                <input id="form_lastname" type="text" name="lname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." value={this.state.lname} onChange={this.onChange} />
                <div className="help-block with-errors" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_email">Email *</label>
                <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." value={this.state.email} onChange={this.onChange} />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_subject">Please specify your subject *</label>
                <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Please enter your subject *" required="required" data-error="Valid email is required." value={this.state.subject} onChange={this.onChange} />
                <div className="help-block with-errors" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="form_message">Message *</label>
                <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows={4} required="required" data-error="Please, leave us a message." value={this.state.message} onChange={this.onChange} />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-md-12">
              <input type="submit" className="btn btn-success btn-send" defaultValue="Send message" />
            </div>
          </div>
        </div>
      </form>

        )
    }
}

export default Register;