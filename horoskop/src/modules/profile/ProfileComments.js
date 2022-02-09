import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import Cookies from "js-cookie";

function ProfileComments({id, profil}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {(async () => {
        await axios.get(`http://localhost:5000/comments/${id}`).then(res => {setComments(res.data.comments);})
    })()}, []);

    const handleSubmit = (values, actions) => {
        (async (values, actions) => {
            const userId = Cookies.get("user-id")
            await axios.post(`http://localhost:5000/comments/${id}`, {
                content: values.content,
                author: userId ? userId : "Anon",
                author_name: profil.login ? profil.login : "Anon"
            })
            .then(() => {
                actions.resetForm();
            }
        )})(values, actions)}

    const initialValues = {
        content: ""
    }

    return ( <div>
        <div>
            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            >
                <Form>
                    <label>Dodaj komentarz</label>
                    <Field name="content" component="textarea"></Field>
                    <button type="submit">Dodaj</button>
                </Form>
            </Formik>
        </div>
        <ul>
            {comments.length !== 0 && comments.map(comment => {
                return (
                    <div>{comment.author_name}-{comment.content}
                    {comment.author === Cookies.get("user-id") && 
                    <div>
                        <button>Edytuj</button>
                        <button>Usuń</button>
                    </div>}
                    </div>
                )
            })}
        </ul>
    </div> );
}

export default ProfileComments;