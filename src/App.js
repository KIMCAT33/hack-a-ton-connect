import "./App.css";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";


function App() {
  const wallet = useTonWallet();
  
  return (
    <div className="App">
      <header className="App-header">
        <span>My Ton Connect App With React UI</span>
        <TonConnectButton />
        {wallet && (
          <div>
            <span>Connected wallet: {wallet}</span>
            <span>Device: {wallet.device.appName}</span>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
