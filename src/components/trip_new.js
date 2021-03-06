import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import constants from '../constants';
const { c } = constants;
import { createTrip } from '../actions';
import { connect } from 'react-redux';

class TripsNew extends Component {
  renderField(field) {

    const { meta: { touched, error } } = field;
    const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className={className}
          type="text"
          {...field.input}
        />
        <div className="invalid-feedback">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  // this.props.history.push('/trips');
  onSubmit(values) {
    this.props.createTrip(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Experience"
          name="title"
          component={this.renderField} />
        <Field
          label="Description for Experience"
          name="description"
          component={this.renderField} />
        <Field
          label="Price"
          name="price"
          component={this.renderField} />
        <Field
          label="Length in Days"
          name="days"
          component={this.renderField} />
        <Field
          label="City or Town Name"
          name="location"
          component={this.renderField} />
        <button type="submit" className="btn btn-info">Save</button>
        <Link to="/" className="btn btn-danger cancel">Cancel</Link>
        <Link to="/trips" className="btn btn-success">Trips</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please Enter a Title';
  }
  if (!values.description) {
    errors.description = 'Please add a Description';
  }
  if (!values.price) {
    errors.price = 'Please List a Price';
  }
  if (!values.days) {
    errors.days = 'Please Enter Amount of Days';
  }
  if (!values.location) {
    errors.location = 'Please Enter a Location';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'TripsNewForm'
})(
  connect(null, { createTrip })(TripsNew)
);
