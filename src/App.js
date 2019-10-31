import { Web3Versions } from '@terminal-packages/sdk';
import Torus from '@toruslabs/torus-embed';
import React from 'react';
import './App.css';
const Web3 = require('web3');
const sdk = require('@terminal-packages/sdk');
function App() {
  const torus = new Torus();
  const setup = async function() {
    await torus.init();
    await torus.login();
  };
  const tester = () => {
    const web3 = new Web3(
      new sdk.TerminalHttpProvider({
        customHttpProvider: torus.provider,
        apiKey: 'Z0CsA9B5xAkCjfw0kcKh6g==',
        source: 'TORUS',
        environment: sdk.EnvironmentTypes.live,
        projectId: 'bYzPZdjZezVQKvLA',
        web3Version: Web3Versions.one
      })
    );
    //const web3 = new Web3(torus.provider);
    console.log(web3.eth.accounts[0]);
    web3.eth.getBalance(
      '0xE22FD0840d127E44557D5E19A0A9a52EAfc3e297',
      (error, result) => {
        console.log(error);
        console.log(result);
      }
    );
  };
  return (
    <div className="App">
      <button onClick={() => setup()}>SETUP</button>
      <button onClick={() => tester()}>TEST</button>
    </div>
  );
}

export default App;
