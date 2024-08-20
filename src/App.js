import React, { useState } from "react";

import walletConnectFcn from "./components/hedera/walletConnect.js"

function App() {
    const [walletData, setWalletData] = useState();
	const [account, setAccount] = useState();
	const [network, setNetwork] = useState();

    async function connectWallet() {
		if (account !== undefined) {
			// setConnectTextSt(`🔌 Account ${account} already connected ⚡ ✅`);
		} else {
			const wData = await walletConnectFcn();

			let newAccount = wData[0];
			let newNetwork = wData[2];
			if (newAccount !== undefined) {
				// setConnectTextSt(`🔌 Account ${newAccount} connected ⚡ ✅`);
				// setConnectLinkSt(`https://hashscan.io/${newNetwork}/account/${newAccount}`);

				setWalletData(wData);
				setAccount(newAccount);
				setNetwork(newNetwork);
				// setContractTextSt();
			}
		}
	}

    return (
        <div>
            <h1>Hola mundo</h1>
            <button onClick={connectWallet}>ConectarWallet</button>
        </div>
    );
}

export default App;
