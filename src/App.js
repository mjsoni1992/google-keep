import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import CreateNoteForm from './components/CreateNoteForm';
import Notes from './components/Notes';

import { db } from "./Firebase";



function App() {
  const [notes, setNotes] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // get firebase data
  useEffect(() => {
    const notesData = []
    db.collection("notes").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        //console.log(doc.id, " => ", doc.data());
        let currentID = doc.id;
        let noteOBJ = { ...doc.data(), ['id']: currentID };
        //console.log(noteOBJ);
        notesData.push(noteOBJ);
      });
      setNotes(notesData);
      setIsLoading(false);
    });
  }, [fetchAgain]);

  const handleSubmitFromApp = (data) => {
    //console.log("Data from App", data);
    setNotes((prevData) => (
      [data, ...prevData]
    ));
  }
  const handleEdit = (data) => {
    console.log("From App Data", data);
    setNotes((prevData) => (
      [data, ...prevData]
    ));
  }

  const handleDelete = (id) => {
    db.collection("notes").doc(id).delete().then(() => {
      //alert("Document successfully deleted!");
      setFetchAgain(true);
    }).catch((error) => {
      //alert("Error removing document: ", error);
    });

  }





  return (
    <div className="App">
      <Header />
      <CreateNoteForm handleSubmitFromApp={handleSubmitFromApp} />
      <div className="container">
        <div className="row">
          {isLoading ? <h3 className='col-md-12 text-white text-center'>Loading...</h3> : ""}
          {!isLoading && notes && notes.map(({ noteTitle, noteContent, id }) =>
            <Notes id={id} noteTitle={noteTitle} noteContent={noteContent} handleEdit={handleEdit} handleDelete={handleDelete} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
