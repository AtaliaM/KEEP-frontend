import React from "react";
import NoteForm from "../NoteForm/NoteForm";

class AddNoteButton extends React.Component {

    state = { showForm: false }

    onClick = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }));
    }

    onAddingNote = async(e) => {
        e.preventDefault();
        console.log("adding note");
    }

    render() {
        return (
            <div>
                <button className="circular ui icon button" onClick={() => this.onClick()}>
                    <i className="plus icon"></i>
                </button>
                {this.state.showForm ? <NoteForm typeRequest="POST" onSubmit={this.onAddingNote} /> : null}
            </div>
        )
    }
}

export default AddNoteButton;