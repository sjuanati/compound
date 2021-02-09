// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

/**
 * @notice  Central smart contract of Compound: deals with risk management 
            by calculating how much each address is allowed to borrow
 */

interface ComptrollerInterface {
    function enterMarkets(address[] calldata cTokens)
        external
        returns (uint256[] memory);

    function getAccountLiquidity(address owner)
        external
        view
        returns (
            uint256,
            uint256,
            uint256
        );
}
