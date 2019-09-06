import React from 'react';
import hljs from 'highlight.js';

export const PASTEBOX_ID = "text-area";

export class Pastebox extends React.Component {

    componentDidMount() {
        hljs.highlightBlock(document.getElementById(PASTEBOX_ID));
    }

    render() {
        var codeblock;

        if (this.props.content) {
            codeblock = <pre id={PASTEBOX_ID}><code>{this.props.content}</code></pre>
        } else {
            codeblock = <textarea id={PASTEBOX_ID} onChange={this.props.onUpdatePastebox}></textarea>
        }

        return <div id="pastebox">
            {codeblock}
        </div>
    }
}

export default Pastebox;