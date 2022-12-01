import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';


const Home = () => {
  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {
    console.log(event.target.value);
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
              <a className="generate-button" onClick={null}>
                <div className="generate">
                  <p>Automagic!</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
