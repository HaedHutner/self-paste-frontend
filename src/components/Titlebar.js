import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SaveButton } from './SaveButton';

class Titlebar extends React.Component {
    render() {
        return <nav id="titlebar">
            <span className="logo">Self-Paste</span>
            <Router>
                <Route exact path="/" component={this.SaveButton} />
            </Router>
        </nav>
    }

    SaveButton = () => {
        return (
            <SaveButton
                onClick={this.props.onSaveButtonClick}
            />
        );
    }
}

export default Titlebar;