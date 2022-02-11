import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";

const AddChanges = ({ profil }) => {
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
              .put(
                `http://localhost:5000/divinities/put/${profil.znak}/${values.kategoria}/${values.tekst}`,
                { update: values.tekst }
              )
              .then(() => {
                navigate("/");
              });
            console.log(values);
          }}
        >
          <Form>
            <Field name="kategoria" as="select">
              <option value="dzienny">dzienny</option>
              <option value="kariera">kariera</option>
              <option value="relacje">relacje</option>
              <option value="zdrowie">zdrowie</option>
            </Field>

            <Field name="tekst" component="textarea"></Field>
            <button type="submit">Edytuj wróżbę</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddChanges;
