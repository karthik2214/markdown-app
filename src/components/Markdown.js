import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";

const Markdown = () => {
    const [markdown, setMarkdown] = useState("")
    return (
        <>
                <h1 className='title'>Welcome to Markdown</h1>
            <div className="center-div">
                <textarea className="left-side" placeholder='type here' value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
            <div className="right-side">
                {/* <h3>output here</h3> */}
                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>
            </div>
            </div>
        </>
    )
}

export default Markdown
