import React from 'react';
import './NoteForm.css';

class NoteForm extends React.Component {

    state = {existingNote:false, existingNoteData: null}

    componentDidMount = () => {
        if(this.props.existingNote) {
            this.setState({existingNoteData:{...this.props.existingNoteData}});
        }
    }


    render() {
        return (
            <div className="ui centered card">
            <form className="ui form" onSubmit={this.props.onSubmit}>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="first-name" placeholder="title" value={this.state.existingNote ? this.state.existingNoteData.title : ""}/>
                </div>
                <div className="field">
                    <label>Take a note</label>
                    <textarea type="text" name="last-name" value={this.state.existingNote ? this.state.existingNoteData.body : ""}/>
                </div>
                <button className="ui button" type="submit">Add note</button>
            </form>
            </div>
        )
    }
}

export default NoteForm;