//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./DPixToken.sol";
import "./DPixNFT.sol";

contract DPix {
    string public name = "DPix";
    mapping(uint256 => uint256) public price;
    DPixToken public dpixToken;
    DPixNFT public dpixNFT;

    constructor(address _tokenAddress, address _nftAddress) {
        dpixToken = DPixToken(_tokenAddress);
        dpixNFT = DPixNFT(_nftAddress);
    }

    function setPrice(uint256 _id, uint256 _price) public {
        require(dpixNFT.ownerOf(_id) == msg.sender);
        price[_id] = _price;
    }

    function buyNFT(uint256 _id) public {
        require(price[_id] != 0);
        dpixToken.transferFrom(msg.sender, dpixNFT.ownerOf(_id), price[_id]);
        dpixNFT.transferFrom(dpixNFT.ownerOf(_id), msg.sender, _id);
        price[_id] = 0;
    }
}
