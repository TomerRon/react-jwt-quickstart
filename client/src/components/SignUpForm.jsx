import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div>
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>
      {errors.summary && <p>{errors.summary}</p>}

      <div>
        <label htmlFor="email">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            onChange={onChange}
            value={user.email}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
            type="password"
            name="password"
            id="password"
            onChange={onChange}
            value={user.password}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>

      <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
    </form>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
