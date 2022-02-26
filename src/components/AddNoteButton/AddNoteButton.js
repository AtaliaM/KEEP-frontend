import React from "react";
import NoteForm from "../NoteForm/NoteForm";
import KEEPApi from '../../apis/KEEPApi';

class AddNoteButton extends React.Component {

    state = { showForm: false }

    onClick = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }));
    }

    onAddingNote = async(e, reqBody) => {
        e.preventDefault();
        try {
            await KEEPApi.post('/notes', reqBody);
            window.location.reload();
        } catch(e) {
            console.log(e);
        }

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