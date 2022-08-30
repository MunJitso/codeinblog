import './App.css';
import {useState} from "react";

function App() {
  const [inputText, setInputText] = useState("");
  let finalInput = "<link rel='stylesheet' href='https://learnpid.me/cssStorage/App.css'/><div class=\"code-container\">\n"+
      "        <div class=\"buttons\">\n" +
      "          <div class=\"minimize\"></div>\n" +
      "          <div class=\"fullscreen\"></div>\n" +
      "          <div class=\"close\"></div>\n" +
      "        </div>\n" +
      "        <div class=\"input-field\">\n" +
      "            <pre><code class=\"input-block\">"+
                    inputText
      +"</code></pre>\n" +
      "        </div>\n" +
      "      </div>";


  return (
      <>
      <div className="code-container">
        <div className="buttons">
          <div className="minimize"></div>
          <div className="fullscreen"></div>
          <div className="close"></div>
        </div>
        <div className="input-field">
          <label className="">
            <span></span>
            <textarea className="input-block" autoFocus onChange={e => setInputText(e.target.value)}></textarea>
          </label>
        </div>
      </div>
          <button className="button" onClick={() => navigator.clipboard.writeText(finalInput)}> Copy</button>
    </>
  );
}

export default App;
