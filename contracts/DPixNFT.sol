//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract DPixNFT is ERC721 {
    using Strings for uint256;

    uint256 public tokenCount = 0;
    mapping (uint256 => address) private _creators;
    mapping (uint256 => string) private _tokenURIs;

    constructor(string memory _name, string memory _symbol)
    ERC721(_name, _symbol)
    {}

    event SetCreator(uint256 indexed tokenId, address indexed creator);
    event SetTokenURI(uint256 indexed tokenId, string tokenURI);

    function mint(
        address _to,
        string memory tokenURI_
    ) external {
        _mint(_to, tokenCount);
        _setTokenURI(tokenCount, tokenURI_);
        _creators[tokenCount] = msg.sender;
        emit SetCreator(tokenCount, msg.sender);
        tokenCount += 1;
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, _tokenURIs[_tokenId])) : "";
    }

    function _setTokenURI(uint256 _tokenId, string memory _tokenURI) private {
        _tokenURIs[_tokenId] = _tokenURI;
        emit SetTokenURI(_tokenId, _tokenURI);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    function creatorOf(uint256 _tokenId) external view returns(address) {
        return _creators[_tokenId];
    }
}