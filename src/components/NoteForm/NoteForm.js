import React from 'react';
import './NoteForm.css';

class NoteForm extends React.Component {

    state = {existingNote:false, title:"", body:""}

    componentDidMount = () => {
        if(this.props.existingNote) {
            this.setState({existingNote:true, title: this.props.existingNoteData.title, body: this.props.existingNoteData.body});
        }
    }

    onChange = (e, propName) => {
        this.setState({[propName]: e.target.value});
    }


    render() {
        return (
            <div className="ui centered card">
            <form className="ui form" onSubmit={(e)=>this.props.onSubmit(e,{title:this.state.title, body:this.state.body})}>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="first-name" placeholder="title" value={this.state.title} onChange={(e)=>this.onChange(e, "title")}/>
                </div>
                <div className="field">
                    <label>Take a note</label>
                    <textarea type="text" name="last-name" value={this.state.body} onChange={(e)=>this.onChange(e, "body")}/>
                </div>
                <button className="ui button" type="submit">{this.state.existingNote? "Update Note": "Add note"}</button>
            </form>
            </div>
        )
    }
}

export default NoteForm;