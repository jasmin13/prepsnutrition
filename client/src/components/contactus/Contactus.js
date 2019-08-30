import React, { Component } from "react";
//import map from "./../../assets/images/map.png";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContactData } from "./../../store/actions/contactAction";
//import classnames from "classnames";
import { Field, reduxForm } from "redux-form";
import { required, phoneNumber, email } from "../../validation/validate";
import { renderField, Checkbox } from "./../../utils/renderField";

const form = reduxForm({
  form: "Contactus"
});

class Contactus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      phone: "",
      query: "",
      errors: {},
      success: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  handleFormSubmit = () => {
    const contactData = {
      email: this.state.email,
      phone: this.state.phone,
      query: this.state.query
    };

    this.props.getContactData(contactData);
    this.props.reset();
  };

  render() {
    const { success, handleSubmit, submitting, invalid, pristine } = this.props;

    return (
      <div>
        <section className="contactSection" id="contactus">
          <div className="row top30">
            <div className="col">
              <div className="contact-title">
                <h1>Contact us</h1>
                <hr className="contact-hr" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="map">
                {/* <img id="mapimg" src={map} alt="map" /> */}
              </div>
              <div className="contact-form">
                {success.message ? (
                  <div className="alert alert-success" role="alert">
                    {success.message}
                  </div>
                ) : (
                  ""
                )}
                <form
                  id="contact-us"
                  autoComplete="off"
                  className="form"
                  onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
                >
                  <div className="form-group">
                    <Field
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      name="email"
                      id="email"
                      onChange={this.handleChange}
                      value={this.state.email}
                      component={renderField}
                      validate={[required, email]}
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      className="form-control"
                      type="text"
                      placeholder="Phone No"
                      name="phone"
                      id="phone"
                      onChange={this.handleChange}
                      value={this.state.phone}
                      component={renderField}
                      validate={[required, phoneNumber]}
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      className="form-control"
                      rows="3"
                      name="query"
                      id="query"
                      onChange={this.handleChange}
                      value={this.state.query}
                      placeholder="What would you like to order? Do you have any queries?"
                      component={renderField}
                      validate={[required]}
                      textarea={true}
                    />
                  </div>
                  <div>
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      id="term"
                      name="term"
                      component={Checkbox}
                      validate={[required]}
                      checkbox={true}
                    />
                  </div>
                  <div className="form-group text-center">
                    <button
                      className="btn contact-btn my-2 my-sm-0"
                      type="submit"
                      name="submit"
                      disabled={invalid || submitting || pristine}
                    >
                      Request Call Back
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Contactus.propTypes = {
  getContactData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  success: state.success
});

export default connect(
  mapStateToProps,
  { getContactData }
)(withRouter(form(Contactus)));
