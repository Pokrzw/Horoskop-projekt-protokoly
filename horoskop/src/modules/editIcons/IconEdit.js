import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function IconEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initalVals, setInitalVals] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/icons/${id}`).then((data) => {
      setInitalVals(data.data.all);
    });
  }, []);
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initalVals}
        onSubmit={async (values) => {
          axios.put(`http://localhost:5000/icons`, values).then(() => {
            navigate("/");
          });
        }}
      >
        <Form>
          <label>Nazwa</label>
          <Field name="nazwa" type="text"></Field>
          <label>Wodnik</label>
          <Field name="Wodnik" type="text"></Field>
          <label>Ryby</label>
          <Field name="Ryby" type="text"></Field>
          <label>Baran</label>
          <Field name="Baran" type="text"></Field>
          <label>Byk</label>
          <Field name="Byk" type="text"></Field>
          <label>Bliźnięta</label>
          <Field name="Bliźnięta" type="text"></Field>
          <label>Rak</label>
          <Field name="Rak" type="text"></Field>
          <label>Lew</label>
          <Field name="Lew" type="text"></Field>
          <label>Panna</label>
          <Field name="Panna" type="text"></Field>
          <label>Waga</label>
          <Field name="Waga" type="text"></Field>
          <label>Skorpion</label>
          <Field name="Skorpion" type="text"></Field>
          <label>Koziorożec</label>
          <Field name="Koziorożec" type="text"></Field>
          <label>Strzelec</label>
          <Field name="Strzelec" type="text"></Field>
          <button type="submit">Edytuj zestaw</button>
        </Form>
      </Formik>
    </div>
  );
}

export default IconEdit;
