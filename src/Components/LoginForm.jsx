import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const onSubmit = (values, { resetForm }) => {
  // You can handle form submission here, e.g., make an API request.
  console.log('Form values submitted:', values);
  resetForm();
};

const LoginForm = () => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
