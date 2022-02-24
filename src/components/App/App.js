import React from 'react';
import './App.css';
// import NotesPage from '../NotesPage/NotesPage';
import NoteForm from '../NoteForm/NoteForm';

class App extends React.Component {

  
  render() {
    console.log(process.env.NODE_ENV)
    return (
      <div className="App">
       {/* <NotesPage/> */}
       <NoteForm/>
      </div>
    );
  }
}

export default App;
