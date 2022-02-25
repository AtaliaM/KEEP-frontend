import React from "react";
import NoteForm from "../NoteForm/NoteForm";
import KEEPApi from '../../apis/KEEPApi';

class EditNoteButton extends React.Component {

    state = { showForm: false }

    onClick = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }));
    }

    onEditingNote = async(e, reqBody) => {
        e.preventDefault();
        try {
            await KEEPApi.patch(`/notes/${this.props.id}`, reqBody);
            window.location.reload()
        } catch(e) {
            console.log(e);
        }

    }

    render() {
        return (
            <div>
                <button className="circular ui icon button" onClick={() => this.onClick()}>
                    Edit note
                </button>
                {this.state.showForm ? <NoteForm typeRequest="PATCH" onSubmit={this.onEditingNote} existingNote={true} existingNoteData={this.props.existingNoteData}/> : null}
            </div>
        )
    }
}

export default EditNoteButton;