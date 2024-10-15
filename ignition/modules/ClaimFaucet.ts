import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ClaimFaucet = buildModule("ClaimFaucet", (m) => {
  const faucet = m.contract("ClaimFaucet", ["Deltherum", "DLT"]);

  return { faucet };
});

export default ClaimFaucet;
