import React from "react";
import "./forma.css";
import logo from "../../picturesD/beans_logo-bl.svg";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const phoneRegExp = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;

const a = document.getElementById("name");

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required"),
  phone: Yup.string().matches(phoneRegExp, "<10").required("Required"),
  email: Yup.string().email("Not valid").required("Required"),
  message: Yup.string()
    .min(2, "Too short")
    .max(100, "Too long")
    .required("Required"),
});

const FormContact = () => {
  return (
    <section className="form">
      <p className="text1">Tell us about your tastes</p>
      <img alt="logobl" src={logo} className="img" />
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          fetch("http://localhost:3001/contacts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values, null, "\t"),
          })
            .then((response) => {
              console.log(response);
              return response.json();
            })
            .then(() => {
              document.location.href = "http://localhost:3000/contact/thanks";
            });
        }}
      >
        {({ errors, touched }) => (
          <>
            <Form>
              <div className="flexbox">
                <span className="text2">
                  Name
                  <span className="red" id="name">
                    *
                  </span>
                </span>
                {errors.name && touched.name ? (
                  <span className="erorr">{errors.name}</span>
                ) : null}
                <Field name="name" id="input" />
              </div>

              <div className="flexbox">
                <span className="text2">
                  E-mail
                  <span className="red" id="email">
                    *
                  </span>
                </span>
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Field name="email" id="input" />
              </div>
              <div className="flexbox">
                <span className="text2">
                  Phone
                  <span className="red" id="phone">
                    *
                  </span>
                </span>
                {errors.phone && touched.phone ? (
                  <div>{errors.phone}</div>
                ) : null}
                <Field
                  name="phone"
                  id="input"
                  placeholder="+ 7 (_ _ _)_ _ _ _ _ _ _ _"
                />
              </div>
              <p className="text3">
                Your message
                <span className="red" id="message">
                  *
                </span>
              </p>
              <Field name="message" className="inputMessage" />
              {errors.message && touched.message ? (
                <div>{errors.message}</div>
              ) : null}
              <br />

              <button className="btn" type="submit">
                Send us
              </button>
            </Form>
          </>
        )}
      </Formik>
    </section>
  );
};

export default FormContact;
