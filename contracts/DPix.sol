//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./DPixToken.sol";
import "./DPixNFT.sol";
import '@openzeppelin/contracts/access/Ownable.sol';

contract DPix is Ownable {
    uint public pictureCount = 0;
    string public name = "DPix";
    mapping(uint => Picture) public pictures;
    mapping(string => address) public hashAuthorMap;
    mapping(uint => uint) public price;
    DPixToken public dpixToken;
    DPixNFT public dpixNFT;

    struct Picture {
        uint id;
        string hash;
        string title;
        address payable author;
    }

    constructor(address _tokenAddress, address _nftAddress) {
        dpixToken = DPixToken(_tokenAddress);
        dpixNFT = DPixNFT(_nftAddress);
    }

    function setDPixNftAddress(address _nftAddress) onlyOwner public {
        dpixNFT = DPixNFT(_nftAddress);
        console.log(address(dpixNFT));
    }

    event PictureCreated(
        uint id,
        string hash,
        string title,
        address payable author
    );

    modifier checkHash(string memory _hash) {
        require(bytes(_hash).length > 0, "hash is empty");
        require(hashAuthorMap[_hash] == address(0), "hash already exists");
        _;
    }

    function addPicture(string memory _hash, string memory _title, string memory _tokenURI) public checkHash(_hash) {
        require(bytes(_hash).length > 0);
        require(bytes(_title).length > 0);
        require(bytes(_tokenURI).length > 0);
        require(msg.sender != address(0));

        Picture memory newPicture = Picture(pictureCount, _hash, _title, payable(msg.sender));
        pictures[pictureCount] = newPicture;
        hashAuthorMap[_hash] = msg.sender;
        dpixNFT.mint(msg.sender, pictureCount, _tokenURI);
        price[pictureCount] = type(uint256).max;
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

    modifier idExists(uint _id) {
        require(0 <= _id && pictureCount > _id);
        _;
    }

    function tipPictureOwner(uint _id) public payable idExists(_id) {
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

    function tipPictureOwnerByDPixToken(uint _id, uint _value) public idExists(_id) {
        dpixToken.transferFrom(msg.sender, pictures[_id].author, _value);
        emit ImageTippedByDPXT(_id, pictures[_id].hash, pictures[_id].title, _value, pictures[_id].author);
    }

    function setPrice(uint _id, uint _price) public idExists(_id){
        require(dpixNFT.ownerOf(_id) == msg.sender);
        price[_id] = _price;
    }

    function buyNFT(uint _id) public idExists(_id) {
        require(price[_id] != type(uint256).max);
        dpixToken.transferFrom(msg.sender, dpixNFT.ownerOf(_id), price[_id]);
        dpixNFT.transferFrom(dpixNFT.ownerOf(_id), msg.sender, _id);
        price[_id] = type(uint256).max;
    }
}
