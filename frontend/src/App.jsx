import { ethers } from "ethers";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState("");
  const [balance, setBlance] = useState("");

  async function connectWallet() {
    if(!window.ethereum){
        return alert("请安装MetaMask钱包");
    }
    await window.ethereum.request({method:"eth_requestAccounts"})
    const provider = new ethers.BrowserProvider(window.ethereum)
    console.log("provider",provider)
    const signer = await provider.getSigner()
    const address= await signer.getAddress()
    console.log("address",address)
    setAddress(address)
    const balance = await provider.getBalance(address)
    setBlance(ethers.formatEther(balance))
    console.log("balance",ethers.formatEther(balance))
  }
  return (<div
      style={{
        padding: 20,
      }}>
      <h1>Welcome to the Frontend Application</h1>
      {!address?(
        <button onClick={connectWallet}>连接钱包</button>
      ) : (
        <div>
          <div>已连接地址: {address}</div>
          <div>余额：{balance}</div>
        </div>
      )}
    </div>
  );
}

export default App;
