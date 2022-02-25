import React from 'react';
import NoteCard from '../NoteCard/NoteCard';
import KEEPApi from '../../apis/KEEPApi';

class DisplayNotes extends React.Component {

    state = {notes: []}

    componentDidMount = async () => {
        try {
            const res = await KEEPApi.get('/notes');
            this.setState({notes: [...res.data]});
        } catch(e) {
            console.log(e);
        }
    }

    renderNotes = () => {
        return ( 
            this.state.notes.map((note)=> {
                return (
                    <NoteCard key={note._id} title={note.title} body={note.body}/>
                )
        })
        )
    }

    render() {
        return (
            this.state.notes.length !== 0 ?
            this.renderNotes() : null
        )
    }

}

export default DisplayNotes;