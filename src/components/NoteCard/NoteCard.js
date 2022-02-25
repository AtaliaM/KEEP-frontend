import React from 'react';
import './NoteCard.css';
import ShowMoreText from "react-show-more-text";
import EditNoteButton from '../EditNoteButton/EditNoteButton';

class NoteCard extends React.Component {

    render() {
        return (
            <div className="ui card centered">
                <div className="content">
                    <h3 className="title">{this.props.title}</h3>
                    <ShowMoreText
                        lines={10}
                        more="Show more"
                        less="Show less"
                        className="content-css"
                        anchorClass="my-anchor-css-class"
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={0}
                        truncatedEndingComponent={"... "}
                    >
                        {this.props.body}
                    </ShowMoreText>
                </div>
                <EditNoteButton id={this.props.id} existingNoteData={{title:this.props.title, body:this.props.body}}/>
            </div>
        )
    }

}

export default NoteCard;