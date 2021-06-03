const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const { merkleRoot, tokenTotal, claims } = JSON.parse(readFileSync(join(process.cwd(), "user_data.json")));
const output = [`Merkle Root: ${merkleRoot}`, `Token Total: ${tokenTotal}`, '\n'];

Object.entries(claims).forEach(value => {
  const [address, account] = value;
  const { index, amount, proof } = account;
  const current = [`index = ${index}`, `address = ${address}`, `amount = ${amount}`, `merkleProof = [${proof.join(',')}]`];
  output.push(current.join('\n'), "\n");
})

writeFileSync(join(process.cwd(), "User Friendly.txt"), output.join('\n'));