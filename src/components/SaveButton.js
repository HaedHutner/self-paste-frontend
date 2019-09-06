import React from 'react';

export class SaveButton extends React.Component {
    render() {
        return <button className="button" onClick={this.props.onClick}>Save</button>;
    }
}