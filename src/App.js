import "./App.css";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";


function App() {
  const wallet = useTonWallet();
  console.log(wallet);
  return (
    <div className="App">
      <header className="App-header">
        <span>My Ton Connect App With React UI</span>
        <TonConnectButton />
        {wallet && (
          <div>
          
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
