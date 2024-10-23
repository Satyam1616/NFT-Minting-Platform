module AptosNFT::NFT {
    use aptos_framework::signer;
    use aptos_framework::token;

    // Mint an NFT by creating a new token within a collection.
    public fun mint_nft(
        creator: &signer,
        collection_name: &str,
        token_name: &str,
        description: &str,
        supply: u64,
        uri: &str
    ) {
        // Create a new collection (if not already created)
        token::create_collection(
            creator,
            collection_name,
            description,
            uri,
            false  // non-mutable collection
        );

        // Create a new token in the collection
        token::create_token(
            creator,
            collection_name,
            token_name,
            description,
            supply,
            0,  // royalty percentage
            uri,
            true  // mutable token
        );
    }
}
