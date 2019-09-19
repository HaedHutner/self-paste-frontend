import React from 'react';
import hljs from 'highlight.js';

export const PASTEBOX_ID = "text-area";

export class Pastebox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            paste: null
        };

        this.props.paste.then(result => {
            console.log(`Found paste ${result}`);
            this.setState({
                paste: result
            });
        });
    }

    componentDidMount() {
        hljs.highlightBlock(document.getElementById(PASTEBOX_ID));
    }

    render() {
        var codeblock;

        if (this.state.paste) {
            codeblock = <pre id={PASTEBOX_ID}><code>{this.state.paste}</code></pre>;
        } else {
            codeblock = <textarea id={PASTEBOX_ID} onChange={this.props.onUpdatePastebox}></textarea>
        }

        return <div id="pastebox">
            {codeblock}
        </div>
    }
}

export default Pastebox;