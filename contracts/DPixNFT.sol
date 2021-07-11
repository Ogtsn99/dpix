//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract DPixNFT is ERC721, Ownable {

    using Strings for uint256;

    mapping (uint256 => string) private _tokenURIs;

    constructor(string memory _name, string memory _symbol)
    ERC721(_name, _symbol)
    {}

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return _tokenURIs[tokenId];
    }

    function mint(
        address _to,
        uint256 _tokenId,
        string memory tokenURI_
    ) external onlyOwner() {
        _mint(_to, _tokenId);
        _setTokenURI(_tokenId, tokenURI_);
    }
}