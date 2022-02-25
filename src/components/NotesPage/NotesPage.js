import React from "react";
import DisplayNotes from "../DisplayNotes/DisplayNotes";

class NotesPage extends React.Component {

    render() {
        return (
            <div className="ui five cards doubling">
                <DisplayNotes />
            </div>
        )
    }
}

export default NotesPage;