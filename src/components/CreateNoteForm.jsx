import React, { useState, useRef } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { useForm } from "react-hook-form";

//import firebase from 'firebase/app'
import { db } from "../Firebase"


export default function CreateNoteForm({ handleSubmitFromApp }) {


    const [show, setShow] = useState(false);

    const formReset = useRef();
    // form hooks 
    const [notes, setNotes] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        handleSubmitFromApp(data);
        setNotes((prevData) => (
            [...prevData, data]
        ));


        // firebase insert data
        db.collection("notes").add(data)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });




        e.target.reset();
        console.log(data);
        setShow(false);






    }


    // check the click target
    window.addEventListener('click', function (e) {
        if (document.getElementById('createNoteForm').contains(e.target)) {
            setShow(true);
        } else {
            setShow(false);

        }
    });



    return (
        <div className="container">
            <form ref={formReset} className="form" id="createNoteForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input autoComplete="off" placeholder="Take a note..." className="form-control" type="text" name="noteTitle" onClick={() => setShow(true)} {...register("noteTitle")} />
                </div>
                <div className={!show ? "d-none" : "form-group"}>
                    <textarea {...register("noteContent")} placeholder="Add Content Here...!" className="form-control" name="noteContent" />

                    <button type="submit" name="submit" className="addButton">
                        <AddIcon />
                    </button>
                </div>

            </form>


        </div >

    )
}
