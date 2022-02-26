import React from 'react';
import './DisplayMessage';

class DisplayMessage extends React.Component {

    render() {
        return (
            <div className="ui segment message">
                <div className="content">
                    <div className ="description">
                    {this.props.message}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <button className="circular ui icon button" onClick={this.props.onApprove}>Approve</button>
                        <button className="circular ui icon button" onClick={this.props.onDecline}>Decline</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayMessage;