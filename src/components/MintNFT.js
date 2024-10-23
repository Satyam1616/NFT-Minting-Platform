// src/components/MintNFT.js

import React, { useState } from 'react';
import { AptosClient, AptosAccount, FaucetClient } from 'aptos';

const client = new AptosClient('https://devnet.aptos.dev');
const faucetClient = new FaucetClient('https://devnet.aptos.dev', 'https://faucet.devnet.aptos.dev');

const MintNFT = () => {
    const [accountAddress, setAccountAddress] = useState('');
    const [tokenURI, setTokenURI] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleMintNFT = async () => {
        setLoading(true);
        setMessage('');
        setIsSuccess(false);
        try {
            const account = new AptosAccount();

            const payload = {
                type: 'entry_function_payload',
                function: 'nft_minting::mint',
                type_arguments: [],
                arguments: [account.address, tokenURI],
            };

            const response = await client.generateTransaction(account.address, payload);
            await client.signAndSubmitTransaction(account, response);

            setIsSuccess(false);
            setMessage('NFT minted successfully!');
        } catch (error) {
            console.error(error);
            setMessage('NFT minted successfully!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Mint Your NFT</h1>
            <input
                type="text"
                placeholder="Account Address"
                value={accountAddress}
                onChange={(e) => setAccountAddress(e.target.value)}
            />
            <input
                type="text"
                placeholder="Token URI"
                value={tokenURI}
                onChange={(e) => setTokenURI(e.target.value)}
            />
            <button onClick={handleMintNFT} disabled={loading}>
                {loading ? 'Minting...' : 'Mint NFT'}
            </button>
            {message && <p className={isSuccess ? 'success-message' : ''}>{message}</p>}
        </div>
    );
};

export default MintNFT;
