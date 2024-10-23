# NFT Minting Platform on Aptos

This project is a simple NFT minting platform built on the Aptos blockchain. It allows users to mint their own NFTs by providing their account address and a token URI that points to the NFT metadata.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [Smart Contract Development](#smart-contract-development)
  - [Frontend Development](#frontend-development)
- [Running the Application](#running-the-application)
- [Interacting with the Application](#interacting-with-the-application)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Aptos CLI
- A code editor (like VS Code)

## Setup

### Smart Contract Development

1. **Install Aptos CLI**:
   Follow the instructions in the [Aptos CLI documentation](https://aptos.dev/tutorials/cli) to install the Aptos CLI.

2. **Create a new Aptos project**:
   ```bash
   mkdir nft_minting
   cd nft_minting
   aptos move init
Implement the NFT minting smart contract: Create a new file in the move directory called nft_minting.move and add your smart contract code.

Compile the contract:
aptos move compile

Publish the package: Make sure your profile is set to devnet or testnet in the Aptos configuration
aptos move publish --package-dir move --profile devnet

Frontend Development
Create a new React app: In a separate directory, create your React app using Create React App.

npx create-react-app aptos-nft-minting
cd aptos-nft-minting

nstall dependencies: Install the Aptos SDK:
npm install aptos

Create the MintNFT component: Create a new folder named components and a file named MintNFT.js for your NFT minting component. Copy the minting logic into this file.

Add styling: Create a App.css file in the src directory and add the provided CSS styles.

Import the MintNFT component in App.js: Update src/App.js to include the MintNFT component.

Running the Application
Start your React app: In the terminal, navigate to the aptos-nft-minting directory and run:

npm start

Open your browser: Visit http://localhost:3000 to view the application.

Interacting with the Application
Fill in the Account Address: Enter your Aptos account address. If you don’t have one, you can create it using the Aptos CLI.
Enter the Token URI: Provide the metadata URI for your NFT. This should point to a JSON file hosted on IPFS, GitHub Pages, or a cloud storage service.
Click the "Mint NFT" button: This will initiate the minting process. You will see loading feedback, and upon success, a success message will be displayed.
Troubleshooting
"Failed to mint NFT.": Check the following:
Ensure your account address is correct and funded.
Verify the token URI points to a valid JSON file containing NFT metadata.
Move compilation issues: Make sure you have installed all dependencies correctly and that your smart contract code is error-free.


This README provides a comprehensive overview of the project, including setup instructions, usage guidelines, and troubleshooting tips. You can adjust the sections or add additional details based on your project's specific features or requirements. Let me know if you need any more help!


