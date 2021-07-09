//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./DPixToken.sol";

contract DPix {
    address owner;
    uint public pictureCount = 0;
    string public name = "DPix";
    mapping(uint => Picture) public pictures;
    mapping(string => address) public hashAuthorMap;
    DPixToken public dpixToken;

    struct Picture {
        uint id;
        string hash;
        string title;
        address payable author;
    }

    event PictureCreated(
        uint id,
        string hash,
        string title,
        address payable author
    );

    constructor(address _tokenAddress) {
        dpixToken = DPixToken(_tokenAddress);
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

        Picture memory newPicture = Picture(pictureCount, _hash, _title, payable(msg.sender));
        pictures[pictureCount] = newPicture;
        hashAuthorMap[_hash] = msg.sender;
        pictureCount++;

        emit PictureCreated(pictureCount-1, _hash, _title, payable(msg.sender));
    }

    event ImageTipped(
        uint id,
        string hash,
        string title,
        uint tipAmount,
        address payable author
    );

    function tipPictureOwner(uint _id) public payable {
        require(0 <= _id && pictureCount > _id);
        pictures[_id].author.transfer(msg.value);
        emit ImageTipped(_id, pictures[_id].hash, pictures[_id].title, msg.value, pictures[_id].author);
    }

    event ImageTippedByDPXT(
        uint id,
        string hash,
        string title,
        uint tipAmount,
        address payable author
    );

    function tipPictureOwnerByDPixToken(uint _id, uint _value) public {
        require(0 <= _id && pictureCount > _id);
        bool result = dpixToken.transferFrom(msg.sender, pictures[_id].author, _value);
        ImageTippedByDPXT(_id, pictures[_id].hash, pictures[_id].title, _value, pictures[_id].author);
    }
}
