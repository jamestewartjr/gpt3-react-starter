import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [isAutoMagic, setIsAutoMagic] = useState(false)

  const callGPTEndpoint = async () => {
    setIsAutoMagic(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...")

    setApiOutput(`${output.text}`);
    setIsAutoMagic(false);
  }

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>Automagic website copy | James Stewart</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Automagically create website copy for your web3 business.</h1>
          </div>
          <div className="header-subtitle">
            <h2>Add a small sentence about what value your business provides. We do the rest. </h2>
          </div>
          <div className="prompt-container">
            <textarea 
              className="prompt-box" 
              placeholder="start typing here... this is the way."
              value={userInput}
              onChange={onUserChangedText}
            />
            <div className="prompt-buttons">
              <a className={isAutoMagic ? "generate-button loading" : "generate-button"}
                onClick={callGPTEndpoint}
              >
                <div className="generate">
                  {isAutoMagic ? <span className="loader"></span> : <p>Automagic!</p>}
                  <p></p>
                </div>
              </a>
            </div>
            {apiOutput && (
              <div className="output">
                <div className="output-header-container">
                  <div className="output-header">
                    <h3>It's Magic!</h3>
                  </div>
                </div>
                <div className="output-content">
                  <p>{apiOutput}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
