import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import EditNote from "./EditNote";

export default function Notes({ noteTitle, noteContent, handleEdit, id, handleDelete, grid }) {


    const handleDeleteNotes = () => {
        handleDelete(`${id}`);
    }


    return (
        <>
            <div className={grid}>
                <div className="noteWrapper">
                    <h3>{noteTitle}</h3>
                    <p>{noteContent}</p>
                    <div className="actionButtons">
                        <button type="button" className="btn btn-warning"><DeleteForeverIcon onClick={handleDeleteNotes} /></button>
                        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#exampleModal-${id}`}><EditIcon /></button>
                    </div>
                    <EditNote noteTitle={noteTitle} noteContent={noteContent} handleEdit={handleEdit} id={id} />

                </div>
            </div>
        </>
    )
}
