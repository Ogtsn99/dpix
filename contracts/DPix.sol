//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

import "hardhat/console.sol";

contract DPix {
    address owner;
    uint public pictureCount = 0;
    string public name = "DPix";
    mapping(uint => Picture) public pictures;
    mapping(string => address) public hashAuthorMap;

    struct Picture {
        uint id;
        string hash;
        string title;
        address payable author;
    }

    constructor() public {
        owner = msg.sender;
    }

    modifier checkHash(string memory _hash) {
        require(bytes(_hash).length > 0, "hash is empty");
        require(hashAuthorMap[_hash] == address(0), "hash already exists");
        _;
    }

    function addPicture(string memory _hash, string memory _title) public checkHash(_hash) {
        require(bytes(_hash).length > 0);
        require(bytes(_title).length > 0);
        require(msg.sender != address(0));
        Picture memory newPicture = Picture(pictureCount, _hash, _title, msg.sender);
        pictures[pictureCount] = newPicture;
        hashAuthorMap[_hash] = msg.sender;
        pictureCount++;
    }

    function tipPictureOwner(uint _id) public payable {
        require(0 <= _id && pictureCount > _id);
        pictures[_id].author.transfer(msg.value);
    }
}
