import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
export default function Notes() {
    return (
        <div className="col-md-4">
            <div className="noteWrapper">
                <div className="actionButtons">
                    <DeleteForeverIcon fontSize="large" />
                    <EditIcon />
                </div>

                <h3>Note Title</h3>
                <p>Note Content</p>
            </div>
        </div>
    )
}
