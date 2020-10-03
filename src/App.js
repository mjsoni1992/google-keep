import React from 'react';

import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNoteForm from './components/CreateNoteForm';
import Notes from './components/Notes';
function App() {
  return (
    <div className="App">
      <Header />
      <CreateNoteForm />
      <div className="container">
        <div className="row">
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
