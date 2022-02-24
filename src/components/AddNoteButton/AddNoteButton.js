import React from "react";
import NoteForm from "../NoteForm/NoteForm";

class AddNoteButton extends React.Component {

    state = { showForm: false }

    onClick = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }));
    }

    render() {
        return (
            <div>
                <button className="circular ui icon button" onClick={() => this.onClick()}>
                    <i className="plus icon"></i>
                </button>
                {this.state.showForm ? <NoteForm /> : null}
            </div>
        )
    }
}

export default AddNoteButton;