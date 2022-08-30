import './App.css';
import {useState} from "react";

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function copyToClipboard(text, setText) {
    setText("Copied!");
    navigator.clipboard.writeText(text).then(() => {
        sleep(2).then(() => {
            setText("Copy to Clipboard");
        }).catch(err => {
            console.error(err)
        });
    })
}

function App() {
    const [text, setText] = useState("Copy To Clipboard");
    const [inputText, setInputText] = useState("")
    let finalInput = "<link rel='stylesheet' href='https://learnpid.me/cssStorage/App.css'/><div class=\"code-container\"><div class=\"buttons\"><div class=\"minimize\"></div><div class=\"fullscreen\"></div><div class=\"close\"></div></div><div class=\"input-field\"><pre><code class=\"input-block\">" + inputText + "</code></pre></div></div>";

    return (
        <>
            <div className="container">
                <div className="header">
                    <h1><img src="/public/favicon.png" alt="icon" className="icon"/> Code in Blog</h1>
                    <p>Make code snippets for your blog posts</p>
                    <p className="disclaimer">( still beta version )</p>
                </div>
                <div className="code-container">
                    <div className="buttons">
                        <div className="minimize"></div>
                        <div className="fullscreen"></div>
                        <div className="close"></div>
                    </div>
                    <div className="input-field">
                        <label className="">
                            <span></span>
                            <textarea className="input-block" autoFocus
                                      onChange={e => setInputText(e.target.value)}></textarea>
                        </label>
                    </div>
                </div>
                <button className="button" onClick={() => copyToClipboard(finalInput, setText)}>{text}</button>
            </div>
        </>
    );
}

export default App;
