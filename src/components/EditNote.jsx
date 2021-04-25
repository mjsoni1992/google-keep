import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import { db } from "../Firebase"
const EditNote = ({ noteTitle, noteContent, handleEdit, id }) => {

    const closePopupRef = useRef();
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            noteTitle: noteTitle,
            noteContent: noteContent,
        }
    });
    const onSubmit = (data) => {

        var docRef = db.collection('notes').doc(id);

        // Updatem Notes data
        var updateNotesFields = docRef.update(data);


        formState.isSubmitted = true;
        if (formState.isSubmitted) {
            handleEdit(data);
            document.getElementsByClassName("modal-backdrop")[0].remove();
        }



    }

    return (
        <div>

            <div ref={closePopupRef} className="modal fade" id={`exampleModal-${id}`} HTMLtabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times; </span>
                            </button>
                        </div>

                        <form className="editForm" id={`editNoteForm-${id}`} onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">

                                <input autoComplete="off" placeholder="Take a note..." className="form-control" type="text" name="noteTitle" {...register("noteTitle")} />
                            </div>
                            <div className="form-group">
                                <textarea {...register("noteContent")} placeholder="Add Content Here...!" className="form-control" name="noteContent" />
                                <button type="submit" name="submit" className="addButton">
                                    Update
                                </button>
                            </div>
                        </form>
                        <div className="modal-footer">
                            <button type="button" className="btn closePopup" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EditNote
