import {
  TerminalHttpProvider,
  Web3Versions,
  EnvironmentTypes
} from "@terminal-packages/sdk";
import Torus from "@toruslabs/torus-embed";
import React from "react";
import "./App.css";
import Web3 from "web3";

const apiKey = "zYwDsCwqeD6Sg9plihI/xQ==";
const projectId = "ZoanBDVJvKDlLYAM";

const devAPI = "zYwDsCwqeD6Sg9plihI/xQ==";
const devProjectID = "ZoanBDVJvKDlLYAM";

const stgAPI = "keLUuNmCTjqKJgAOf7CbIw==";
const stgProjectID = "aMDxVPWGpmQjBYgN";
let web3;
function App() {
  const torus = new Torus();
  const setup = async function() {
    await torus.init();
    await torus.login();
    // const tester = async () => {
    web3 = new Web3(
      new TerminalHttpProvider({
        customHttpProvider: torus.provider,
        apiKey: devAPI,
        source: "TORUS",
        environment: EnvironmentTypes.dev,
        projectId: devProjectID,
        web3Version: Web3Versions.one,
        networkSource: "matic"
      })
    );
  };
  //const web3 = new Web3(torus.provider);
  const test = () => {
    web3.eth.getBalance(
      "0xaD7d7543188e13b63699eEF2f0B963d6d589B47D",
      (error, result) => {
        console.log(error);
        console.log(result);
      }
    );
  };
  const sendTx = () => {
    web3.eth.getAccounts((err, res) => {
      console.log(res[0]);
      // console.log(err);
      web3.eth.sendTransaction({
        from: res[0],
        to: "0xaD7d7543188e13b63699eEF2f0B963d6d589B47D",
        value: web3.utils.toWei("0.0001")
      });
    });
  };

  setup();
  return (
    <div className="App">
      <button onClick={() => test()}>TEST</button>
      <button onClick={() => sendTx()}>SendTx</button>
    </div>
  );
}

export default App;
