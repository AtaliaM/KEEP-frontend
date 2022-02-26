import React from "react";
import KEEPApi from '../../apis/KEEPApi';
import DisplayMessage from "../DisplayMessage/DisplayMessage";

class DeleteNoteButton extends React.Component {

    state = { showDeleteMsg: false }

    onDeclineDeletingNote = () => {
        this.setState(prevState => ({
            showDeleteMsg: !prevState.showDeleteMsg
        }));
    }

    onDeletingNote = async(e) => {
        e.preventDefault();
        try {
            await KEEPApi.delete(`/notes/${this.props.id}`);
            window.location.reload()
        } catch(e) {
            console.log(e);
        }

    }

    render() {
        return (
            <div>
                <button className="circular ui icon button" onClick={() => this.onDeclineDeletingNote()}>
                    Delete note
                </button>
                {this.state.showDeleteMsg ? <DisplayMessage onApprove={this.onDeletingNote} onDecline={this.onDeclineDeletingNote} message={"Are you sure you want to delete this note?"}/> : null}
            </div>
        )
    }
}

export default DeleteNoteButton;