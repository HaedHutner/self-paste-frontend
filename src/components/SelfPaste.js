import React from 'react';
import Titlebar from './Titlebar.js'
import Pastebox from './Pastebox.js'

class SelfPaste extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pasteValue: ""
        };
    }

    render() {
        var hasId = this.props.match.params.id && this.props.match.params.id.length !== 0;
        var paste = null;

        if (hasId) {
            paste = this.fetchPasteFromId(this.props.match.params.id)
        }

        return (
            <div id="main">
                <Titlebar onSaveButtonClick={this.savePaste} />
                <Pastebox content={paste} onUpdatePastebox={this.updatePasteState} />
            </div>
        );
    }

    updatePasteState = (e) => {
        this.setState({
            pasteValue: e.target.value
        });
    }

    savePaste = (e) => {
        console.log(this.state.pasteValue);
    }

    fetchPasteFromId = (id) => {
        return "TestPaste";
    }
}

export default SelfPaste;