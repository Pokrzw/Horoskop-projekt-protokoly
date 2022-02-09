import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/loginForm/loginform.scss";
import Cookies from "js-cookie";

const LoginForm = ({ register, setUser }) => {
  const navigate = useNavigate();

  const initialValues = {
    login: "",
    haslo: "",
    znak: "Wodnik",
  };

  const handleSubmit = (values, actions) => {
    (async (values, actions) => {
      if (register) {
        actions.setSubmitting(true);
        await axios
          .post("http://localhost:5000/accounts/register", values)
          .then((res) => {
            navigate("/login");
            actions.setSubmitting(false);
        })
        .catch(err => {});
      } else {
        await axios
          .post("http://localhost:5000/accounts/login", {
            login: values.login,
            haslo: values.haslo,
          })
          .then(async (res) => {
            Cookies.set("sessionID", res.data.sessionID);
            Cookies.set("user-id", res.data.user_id);
            await axios
              .get(`http://localhost:5000/accounts/${res.data.user_id}`)
              .then((result) => {
                setUser(result.data);
            })
            .catch(err => {});
            navigate("/");
          });
      }
    })(values, actions);
  };

  return (
    <div className="LoginForm">
      <div className="ProfileInfo">
        <div className="ProfileBasic">
          <p>{register ? "Załóż konto" : "Zaloguj się"}</p>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <label>Login</label>
                <Field name="login"></Field>
                <ErrorMessage name="login"></ErrorMessage>
                <label>Hasło</label>
                <Field name="haslo" type="password"></Field>
                <ErrorMessage name="haslo"></ErrorMessage>
                {register && (
                  <div>
                    <label>Znak</label>
                    <Field name="znak" component="select">
                      {[
                        "Wodnik",
                        "Ryby",
                        "Baran",
                        "Byk",
                        "Bliźnięta",
                        "Rak",
                        "Lew",
                        "Panna",
                        "Waga",
                        "Skorpion",
                        "Koziorożec",
                        "Strzelec",
                      ].map((znak) => {
                        return (
                          <option key={znak} value={znak}>
                            {znak}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                )}
                <button disabled={isSubmitting} type="submit">
                  {register ? "Zarejestruj się" : "Zaloguj się"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
