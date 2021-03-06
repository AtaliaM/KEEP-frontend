import React from 'react';
import './App.css';
import NotesPage from '../NotesPage/NotesPage';
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import Header from '../Header/Header';

class App extends React.Component {


  render() {
    console.log(process.env.NODE_ENV)
    return (
      <div className="App">
        <Header />
        <AddNoteButton />
          <NotesPage />
      </div>
    );
  }
}

export default App;
