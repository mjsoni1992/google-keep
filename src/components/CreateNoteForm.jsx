import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function CreateNoteForm() {
    return (
        <div className="container">
            <form className="form mt-5 mb-5">
                <div className="form-group">
                    <input placeholder="Add Title Here...!" className="form-control" type="text" name="noteTitle" />
                </div>
                <div className="form-group">
                    <textarea placeholder="Add Content Here...!" className="form-control" name="noteContent"></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" name="submit" className="addButton">
                        <AddCircleIcon fontSize="large" />
                    </button>
                </div>
            </form>
        </div>

    )
}
