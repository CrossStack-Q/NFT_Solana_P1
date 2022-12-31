import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";


import CandyMachine from "../components/CandyMachine"

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {

    const wallet = useWallet();
    // console.log(wallet.publicKey._bn.words)
    


    //buttob wala

    // Button Wala Function
    const renderNotConnectedContainer = () => (
        <div>
            <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />

            <div className="button-container">
                <WalletMultiButton className="cta-button connect-wallet-button" />
                
            </div>
        </div>
    );

    // ms
                                 

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🚀 Avatar Drop 🚀</p>
                    <p className="sub-text">Get an avatar as your nft</p>
                    
                    {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}
                    
                </div>
            </div>
        </div>
    );
};

export default Home;



// Initail Setup hain
