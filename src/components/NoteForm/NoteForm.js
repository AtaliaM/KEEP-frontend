import React from 'react';
import './NoteForm.css';

class NoteForm extends React.Component {

    render() {
        return (
            <div className="ui centered card">
            <form className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="first-name" placeholder="title"/>
                </div>
                <div className="field">
                    <label>Take a note</label>
                    <textarea type="text" name="last-name"/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default NoteForm;