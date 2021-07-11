//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract DPixToken is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) {
        console.log("DPixToken Deploying...");
        console.log("name =", name);
        console.log("symbol =", symbol);
        console.log("initialSupply =", initialSupply);
        _mint(msg.sender, initialSupply);
    }

    //FIXME　This function is for testing only It should be deleted when deploying to main Network!!
    function faucet() public {
        _mint(msg.sender, 10000);
    }
}
