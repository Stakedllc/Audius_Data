## Instructions to claim AUDIO
1. Search for your ETH address in `user_data.json` (https://github.com/Stakedllc/Audius_Data/blob/main/user_data.json)
2. Head to the `MerkleDistributor` smart contract on Etherscan here: https://etherscan.io/address/0x56fe5e18494d1b5196e1412b2c4289c335199080#writeContract
3. In `UserData.txt`, find your ETH address and fill in the parameters of the `claim` function. Where `index` = index, `account` = your ETH address, `amount` = amount, `merkleProof` = proof
5. Send the transaction through your chosen wallet (ex. Metamask, etc.) upon prompt from Etherscan 

### Example 
Let's use the address `0x8C860adb28CA8A33dB5571536BFCF7D6522181e5` as an example. If this was your address, your parameters to input into Etherscan's `claim()` would be:

```bash
# index
78
# account
0x8C860adb28CA8A33dB5571536BFCF7D6522181e5
# amount
0x111296369c55da911ac9
# merkleProof
[0x3e0775c15382bff7fd4101e2c5fc9d348a1f286150dcfccd63f65f51d181219f,0x7938d641416bd58b917fa1aab52ee2743c9ada74e4e54613f292b0b8fa06595b,0x81d2d3e0adef6011d11ad3146204b4e5fc1ebd64c82899d3352f76852d72acf5,0xffc6db6046f454aecd73953abb61b1e8bf514d90df58fe3d43acaee211790cda,0xaa65a4bd052e4d34b271f22453326c118fb0933d6afd2b8600ac96c61a4c3d1c,0x49246b9309ddfb41893cdb9b7c3652f367a6f82682145032b8a904bbcaf12541,0xd4b7aa12e78befc24463d994b98d83a364ec4639a7942c7b4735f12b5d298305,0x3d7e8e693caa7d0af8b8123faa0ed039569222fbbe3fca32f7b5d13b901721fd]
```
