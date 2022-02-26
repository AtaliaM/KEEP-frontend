import React from 'react';
import './DisplayMessage';

class DisplayMessage extends React.Component {

    render() {
        return (
            <div class="ui segment message">
                <div class="content">
                    <div class ="description">
                    {this.props.message}
                    </div>
                </div>
                <div class="extra content">
                    <div class="ui two buttons">
                        <button class="circular ui icon button" onClick={this.props.onApprove}>Approve</button>
                        <button class="circular ui icon button" onClick={this.props.onDecline}>Decline</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayMessage;