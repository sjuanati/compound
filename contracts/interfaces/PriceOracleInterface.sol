// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

/**
 * @notice  Calculate the dollar value of the aggregated collateral position for each address.
            This allows to calculate how much an address is allowed to borrow.
            Prices are retrieved from Coinbase Pro to the OpenOraclePriceData, and then
            price is compared with a second Oracle (UniswapAnchoredView) from Uniswap.
 */

interface PriceOracleInterface {
  function getUnderlyingPrice(address asset) external view returns(uint);
}
