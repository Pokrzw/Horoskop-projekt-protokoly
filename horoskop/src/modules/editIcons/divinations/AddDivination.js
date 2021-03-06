import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";
import "../../../styles/loginForm/loginform.scss";

const AddDivination = ({ profil }) => {
  const navigate = useNavigate();
  return (
    <div className="AddDivination">
      <div>
        <Formik
          initialValues={{
            kategoria: "dzienny",
            tekst: "",
          }}
          onSubmit={async (values) => {
            axios
              .post(
                `http://localhost:5000/divinities/add/${profil.znak}/${values.kategoria}/${values.tekst}`
              )
              .then(() => {
                navigate("/");
              });
            console.log(values);
          }}
        >
          <Form>
            <Field className="dropdown" name="kategoria" as="select">
              <option value="dzienny">dzienny</option>
              <option value="kariera">kariera</option>
              <option value="relacje">relacje</option>
              <option value="zdrowie">zdrowie</option>
            </Field>

            <Field
              className="textArea"
              name="tekst"
              component="textarea"
            ></Field>
            <button type="submit">Dodaj wróżbę</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddDivination;
