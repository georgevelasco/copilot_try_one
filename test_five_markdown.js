/*hello copilot, I want to build a markdown editor in Next.js with the following features:
- use react hooks 
- create state for markdown with default text "type markdown here"
- a text area where users can write markdown - show a live preview of the markdown text as I type
- support ofr basic markdown syntax like headers, bold, italics - use react markdown npm package
- the markdown text and resulting HTML should b esaved in the component's state and updated in real time */ 

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
    const [markdown, setMarkdown] = useState("type markdown here");
    
    return (
        <div className="app">
        <textarea
            className="markdown-input"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <ReactMarkdown className="markdown-output">{markdown}</ReactMarkdown>
        </div>
    );
    }

export default App;

