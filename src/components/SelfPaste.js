import React from 'react';
import { withRouter } from "react-router-dom";
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
            paste = this.fetchPasteFromId(this.props.match.params.id);
        } else {
            paste = new Promise((resolve, reject) => {
                resolve(null);
            });
        }

        return (
            <div id="main">
                <Titlebar onSaveButtonClick={this.savePaste} />
                <Pastebox paste={paste} onUpdatePastebox={this.updatePasteState} />
            </div>
        );
    }

    updatePasteState = (e) => {
        this.setState({
            pasteValue: e.target.value
        });
    }

    savePaste = (e) => {
        console.log("Posting...")
        fetch(`https://localhost:44354/api/pastes`, {
            method: 'POST',
            body: JSON.stringify({
                content: this.state.pasteValue
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(`Rerouting... ${JSON.stringify(data)}`)
            this.props.history.push(`/${data.friendlyId}`)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
    }

    fetchPasteFromId = (id) => {
        return fetch(`https://localhost:44354/api/pastes/${id}`)
            .then(response => response.json())
            .then(data => {
                return data.content;
            })
            .catch(err => {
                return `An error occured while fetching the paste with id ${id}: ${err}`
            })
    }
}

export default withRouter(SelfPaste);