// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

/**
 * @notice  Where the borrowing and lending happen. One cToken by asset supported by the platform (e.g.: for DAI, it is cDAI)
            There are 11 markets (cBAT, cCOMP, cDAI, cETH, cREP, cSAI, cUNI, cUSDC, cUSDT, cWBTC)
            New markets can only be added through the Governance system of Compound
 */

interface CTokenInterface {
  function mint(uint mintAmount) external returns (uint);
  function redeem(uint redeemTokens) external returns (uint);
  function redeemUnderlying(uint redeemAmount) external returns (uint);
  function borrow(uint borrowAmount) external returns (uint);
  function repayBorrow(uint repayAmount) external returns (uint);
  function underlying() external view returns(address);
}
