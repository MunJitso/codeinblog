import './App.css';
import {useState} from "react";

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}
function convert(text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
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
    const textarea = document.getElementById('textarea');
    const [text, setText] = useState("Copy To Clipboard");
    const [inputText, setInputText] = useState("")
    let finalInput = "<link rel='stylesheet' href='https://learnpid.me/cssStorage/App.css'/><div class=\"yruehfedowekf\"><div class=\"dewjkflsmdkkfd\"><div class=\"ifdsfidsjfjsdi\"></div><div class=\"uifdjiosfdslkd\"></div><div class=\"fnmsdnfmdnsfsd\"></div></div><div class=\"input-field\"><pre><code class=\"kjdsljdsasd\">" +
        convert(inputText) + "</code></pre></div></div>";

    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>Code in Blog</h1>
                    <p>Make code snippets for your blog posts</p>
                    <p>( still beta version + the copy format is HTML )</p>
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
                            <textarea id="textarea" className="input-block" autoFocus
                                      onChange={e => setInputText(e.target.value)}></textarea>
                        </label>
                    </div>
                </div>
                <div className="footer">
                    <button className="copy" onClick={() => copyToClipboard(finalInput, setText)}>{text}</button>
                    <a href="https://www.buymeacoffee.com/munjitso" target="blank">
                        <button className="donate">Donate</button>
                    </a>
                    <button className="clear" onClick={() => {textarea.value = ''; setInputText("")}}>Clear</button>
                </div>
            </div>
        </>
    );
}

export default App;
